import { useEffect, useRef, useState, useMemo } from 'react';
import { initWizardChess } from './wizardChessEngine.js';
import {
  detectInitialLanguage,
  SUPPORTED_LANGUAGES,
  TRANSLATIONS,
  type SupportedLang
} from './i18n.js';
import { playClickSound, playGongSound, isSoundEnabled, setSoundEnabled } from './audio.js';
import {
  EGYPT_SETS,
  ROME_SETS,
  CROSSOVER_SET,
  type EmpireSet
} from './empireThemes.js';

export default function App() {
  const initializedRef = useRef(false);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

  // i18n State
  const initialLangData = useMemo(() => detectInitialLanguage(), []);
  const [currentLang, setCurrentLang] = useState<SupportedLang>(initialLangData.lang);
  const canUserChangeLang = !initialLangData.isDeviceSupported;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  // Sound State
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  // Empire & Set Selection State
  // Modes in selector: 'gates' | 'egypt_sets' | 'rome_sets'
  const [selectionModalOpen, setSelectionModalOpen] = useState(true);
  const [selectionView, setSelectionView] = useState<'gates' | 'egypt_sets' | 'rome_sets'>('gates');
  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const [selectedSet, setSelectedSet] = useState<EmpireSet>(CROSSOVER_SET);

  // Apply theme to website body and 3D scene
  const applyThemeToGame = (set: EmpireSet) => {
    setSelectedSet(set);
    document.body.classList.remove('theme-egypt', 'theme-rome', 'theme-crossover');
    document.body.classList.add(`theme-${set.faction}`);

    const win = window as unknown as {
      wizardChess?: {
        applyEmpireTheme?: (theme: EmpireSet) => void;
      };
    };
    if (win.wizardChess?.applyEmpireTheme) {
      win.wizardChess.applyEmpireTheme(set);
    }
  };

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    initWizardChess();

    // Default start with Crossover
    document.body.classList.add('theme-crossover');
  }, []);

  // Sync theme when wizardChess finishes loading
  useEffect(() => {
    const timer = setTimeout(() => {
      const win = window as unknown as {
        wizardChess?: {
          applyEmpireTheme?: (theme: EmpireSet) => void;
        };
      };
      if (win.wizardChess?.applyEmpireTheme) {
        win.wizardChess.applyEmpireTheme(selectedSet);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, [selectedSet]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileSheetOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileSheetOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    playClickSound();
  };

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playClickSound();
  };

  const handleRestoreUI = () => {
    handleButtonClick();
    const win = window as unknown as { wizardChess?: { toggleUI?: (force?: boolean) => void } };
    if (win.wizardChess?.toggleUI) {
      win.wizardChess.toggleUI(false);
    } else {
      document.body.classList.remove('cinematic-ui-hidden');
      const btnHide = document.getElementById('btn-hide-ui');
      if (btnHide) btnHide.textContent = `${t.hideUI}`;
    }
  };

  // Selection Actions
  const handleSelectEmpireGate = (gate: 'egypt' | 'rome') => {
    playClickSound();
    setActiveSetIndex(0);
    setSelectionView(gate === 'egypt' ? 'egypt_sets' : 'rome_sets');
  };

  const handleSelectSet = (set: EmpireSet) => {
    playGongSound();
    applyThemeToGame(set);
    setSelectionModalOpen(false);
  };

  const handleStartCrossoverBattle = () => {
    playGongSound();
    applyThemeToGame(CROSSOVER_SET);
    setSelectionModalOpen(false);
  };

  const currentSetList = selectionView === 'egypt_sets' ? EGYPT_SETS : ROME_SETS;
  const currentBrowsingSet = currentSetList[activeSetIndex] || currentSetList[0];

  return (
    <div onClickCapture={handleButtonClick}>
      {/* Loading Overlay */}
      <div id="loading-overlay">
        <div className="loader-title">The Old World Chess</div>
        <div className="loader-bar-wrap">
          <div className="loader-bar" id="loader-bar"></div>
        </div>
        <div id="loader-text">Summoning Ancient Legions &amp; Pharaonic Dynasties...</div>
      </div>

      <div id="canvas-container"></div>

      {/* Floating Restore UI button for mobile / hidden HUD */}
      <button
        type="button"
        className="hud-btn mobile-only-restore-ui"
        id="btn-mobile-show-ui"
        onClick={handleRestoreUI}
        title={t.showUI}
      >
        {t.showUI}
      </button>

      {/* Top Floating HUD */}
      <div id="hud-top">
        <div className="hud-group" id="hud-left">
          {/* Empire Theme Switcher Button */}
          <button
            type="button"
            className="brand-pill clickable-pill"
            onClick={() => {
              setSelectionView('gates');
              setSelectionModalOpen(true);
            }}
            title={t.changeEmpire}
          >
            <span className="faction-crest">{selectedSet.icon}</span>
            <div className="brand-texts">
              <span className="brand-title">{t.appTitle}</span>
              <span className="brand-subtitle">{selectedSet.name}</span>
            </div>
            <span className="pill-badge-arrow">▼</span>
          </button>

          <div className="status-pill" id="status-pill">
            <span className="turn-dot" id="turn-dot"></span>
            <span id="turn-text">{t.whiteToMove}</span>
            <span className="mode-badge" id="mode-badge">{t.playingAsWhite}</span>
          </div>

          {/* Sound Toggle */}
          <button
            type="button"
            className="hud-btn icon-only-btn"
            onClick={handleToggleSound}
            title={soundOn ? t.soundOn : t.soundOff}
            aria-label={soundOn ? t.soundOn : t.soundOff}
          >
            {soundOn ? '🔊' : '🔇'}
          </button>

          {/* Language selector ONLY shown if device language is NOT in the 25 */}
          {canUserChangeLang && (
            <div className="lang-selector-wrap">
              <select
                className="lang-select-dropdown"
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value as SupportedLang)}
                title={t.languagePrompt}
              >
                {SUPPORTED_LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.nativeName} ({l.code.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Mobile controls toggle */}
        <button
          type="button"
          className={`hud-btn mobile-controls-trigger ${mobileSheetOpen ? 'active' : ''}`}
          id="btn-mobile-controls"
          aria-expanded={mobileSheetOpen}
          aria-controls="hud-right"
          onClick={() => setMobileSheetOpen((prev) => !prev)}
        >
          {mobileSheetOpen ? '✕' : '⚙️ Controls'}
        </button>

        <div
          className={`mobile-sheet-backdrop ${mobileSheetOpen ? 'open' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setMobileSheetOpen(false);
          }}
          aria-hidden="true"
        ></div>

        {/* HUD Controls Group (Required IDs strictly preserved) */}
        <div
          className={`hud-group ${mobileSheetOpen ? 'mobile-sheet-open' : ''}`}
          id="hud-right"
        >
          <div
            className="mobile-sheet-handle-wrap"
            onClick={(e) => {
              e.stopPropagation();
              setMobileSheetOpen(false);
            }}
            aria-hidden="true"
          >
            <div className="mobile-sheet-handle"></div>
          </div>

          <div className="mobile-sheet-header">
            <span className="mobile-sheet-title">{t.appTitle}</span>
            <button
              type="button"
              className="mobile-sheet-close"
              id="btn-mobile-sheet-close"
              onClick={(e) => {
                e.stopPropagation();
                setMobileSheetOpen(false);
              }}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Quick Empire Switch Button inside mobile sheet */}
          <button
            type="button"
            className="hud-btn empire-quick-switch-btn"
            onClick={() => {
              setMobileSheetOpen(false);
              setSelectionView('gates');
              setSelectionModalOpen(true);
            }}
          >
            🏛️ {t.changeEmpire} ({selectedSet.name})
          </button>

          <div className="mobile-sheet-section-label">Game Actions</div>

          <button
            className="hud-btn"
            id="btn-side-toggle"
            title="Switch between Playing as White and Playing as Black"
            onClick={() => setMobileSheetOpen(false)}
          >
            {t.playAsBlack}
          </button>
          <button
            className="hud-btn"
            id="btn-ai-move"
            title="Let the AI make the next move immediately"
            onClick={() => setMobileSheetOpen(false)}
          >
            {t.aiMove}
          </button>
          <button
            className="hud-btn"
            id="btn-reset"
            title="Start a fresh game on the altar"
            onClick={() => setMobileSheetOpen(false)}
          >
            {t.newGame}
          </button>

          <div className="hud-divider" aria-hidden="true"></div>
          <div className="mobile-sheet-section-label">
            <span>{t.cameraViews}</span>
          </div>

          <button
            className="hud-btn active"
            id="btn-cam-player"
            title="Player Camera (Click again to flip White / Black view)"
          >
            {t.playerCam}
          </button>
          <button
            className="hud-btn"
            id="btn-cam-top"
            title="Overhead Board View (Click again to flip White / Black orientation)"
          >
            {t.overhead}
          </button>
          <button
            className="hud-btn"
            id="btn-cam-side"
            title="Side Profile View (Click again to switch East / West side)"
          >
            {t.side}
          </button>
          <button
            className="hud-btn"
            id="btn-cam-wide"
            title="Wide Cathedral View (Click again to switch North Rose / South Narthex)"
          >
            {t.cathedral}
          </button>

          <div className="hud-divider" aria-hidden="true"></div>
          <div className="mobile-sheet-section-label">Display</div>

          <button
            className="hud-btn"
            id="btn-hide-ui"
            title="Toggle HUD visibility (Shortcut: H)"
            onClick={() => setMobileSheetOpen(false)}
          >
            {t.hideUI}
          </button>

          <div className="mobile-sheet-hint">
            <strong>{t.touchHint}</strong>
          </div>
        </div>
      </div>

      {/* Bottom HUD */}
      <div id="hud-bottom">
        <div className="hint-pill" id="controls-hint">
          <strong>Controles:</strong> {t.desktopHint}
        </div>
        <div className="captured-pill" id="captured-tray"></div>
      </div>

      {/* Checkmate Banner Overlay */}
      <div id="checkmate-overlay" role="status" aria-live="polite">
        <div className="checkmate-banner">
          <div className="checkmate-ornament">✦ &nbsp; {selectedSet.name} &nbsp; ✦</div>
          <div className="checkmate-crown" id="checkmate-crown">♔</div>
          <div className="checkmate-title" id="checkmate-title">{t.checkmate}</div>
          <div className="checkmate-rule"></div>
          <div className="checkmate-subtitle" id="checkmate-subtitle">
            {t.whiteTriumphs}
          </div>
          <div className="checkmate-actions">
            <button className="checkmate-btn" id="btn-checkmate-replay">
              {t.replayKingFall}
            </button>
            <button className="checkmate-btn" id="btn-checkmate-newgame">
              {t.newGame}
            </button>
            <button className="checkmate-btn secondary" id="btn-checkmate-dismiss">
              {t.dismiss}
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN EMPIRE & 15-SET SELECTION PORTAL MODAL
          1. Two Grand Gates: Egypt vs Rome
          2. Highlighted Center Mode: "Batalla de Imperios: Roma vs Egipto"
          3. 15 Detailed Sets for each Empire with horizontal swipe/tabs
          ========================================================================= */}
      {selectionModalOpen && (
        <div className="selection-modal-backdrop" role="dialog" aria-modal="true">
          <div className="selection-modal-card">
            {/* Header with Title and Lore */}
            <div className="selection-modal-header">
              <div className="selection-modal-badge">✦ THE OLD WORLD CHESS ✦</div>
              <h1 className="selection-modal-title">{t.appTitle}</h1>
              <p className="selection-modal-subtitle">
                {selectionView === 'gates' && t.selectFactionPrompt}
                {selectionView === 'egypt_sets' && `${t.egypt}: ${t.chooseYourSet} (${t.setsAvailable})`}
                {selectionView === 'rome_sets' && `${t.rome}: ${t.chooseYourSet} (${t.setsAvailable})`}
              </p>
            </div>

            {/* View 1: Two Grand Gates + Crossover Mode Button */}
            {selectionView === 'gates' && (
              <div className="gates-container">
                <div className="gates-row">
                  {/* Left Gate: Egypt */}
                  <div
                    className="empire-gate-card egypt-gate"
                    onClick={() => handleSelectEmpireGate('egypt')}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="gate-glow"></div>
                    <div className="gate-crest-icon">𓂀</div>
                    <h2 className="gate-title">{t.egypt}</h2>
                    <div className="gate-tagline">{t.egyptDynasties}</div>
                    <div className="gate-features-pill">15 {t.exploreSets}</div>
                    <p className="gate-description">
                      {t.egyptFlavorSlogan}
                    </p>
                    <div className="gate-palette-preview">
                      <span className="dot dot-gold" title="Oro del Faraón"></span>
                      <span className="dot dot-lapis" title="Lapislázuli"></span>
                      <span className="dot dot-sand" title="Arenisca Sagrada"></span>
                    </div>
                    <button type="button" className="gate-action-btn egypt-btn">
                      {t.enterEmpire} →
                    </button>
                  </div>

                  {/* Right Gate: Rome */}
                  <div
                    className="empire-gate-card rome-gate"
                    onClick={() => handleSelectEmpireGate('rome')}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="gate-glow"></div>
                    <div className="gate-crest-icon">🦅</div>
                    <h2 className="gate-title">{t.rome}</h2>
                    <div className="gate-tagline">{t.romeLegions}</div>
                    <div className="gate-features-pill">15 {t.exploreSets}</div>
                    <p className="gate-description">
                      {t.romanFlavorSlogan}
                    </p>
                    <div className="gate-palette-preview">
                      <span className="dot dot-carrara" title="Mármol de Carrara"></span>
                      <span className="dot dot-crimson" title="Púrpura Imperial"></span>
                      <span className="dot dot-bronze" title="Bronce Scutum"></span>
                    </div>
                    <button type="button" className="gate-action-btn rome-btn">
                      {t.enterEmpire} →
                    </button>
                  </div>
                </div>

                {/* Center Highlight Mode: Batalla de Imperios / Roma vs Egipto */}
                <div className="crossover-hero-banner">
                  <div className="crossover-hero-glow"></div>
                  <div className="crossover-hero-content">
                    <div className="crossover-icon-duel">
                      <span className="duel-side egypt-side">👑 𓂀</span>
                      <span className="duel-vs">VS</span>
                      <span className="duel-side rome-side">🦅 ⚔️</span>
                    </div>
                    <div className="crossover-info">
                      <h3 className="crossover-title">{t.battleOfEmpires}</h3>
                      <div className="crossover-tagline">{t.crossoverSubtitle}</div>
                      <p className="crossover-desc">
                        {t.crossoverFlavorSlogan}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="crossover-launch-btn"
                      onClick={handleStartCrossoverBattle}
                    >
                      ⚡ {t.battleOfEmpires}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* View 2 & 3: 15 Sets Carousel/Browser for Egypt or Rome */}
            {(selectionView === 'egypt_sets' || selectionView === 'rome_sets') && (
              <div className="sets-browser-container">
                <div className="sets-navigation-bar">
                  <button
                    type="button"
                    className="hud-btn back-btn"
                    onClick={() => setSelectionView('gates')}
                  >
                    {t.backToGates}
                  </button>

                  <div className="sets-counter-label">
                    Set {activeSetIndex + 1} / {currentSetList.length}
                  </div>
                </div>

                {/* Main Active Set Spotlight Card */}
                <div className={`set-spotlight-card ${selectionView === 'egypt_sets' ? 'egypt-theme' : 'rome-theme'}`}>
                  <div className="spotlight-header">
                    <span className="spotlight-icon">{currentBrowsingSet.icon}</span>
                    <div className="spotlight-title-group">
                      <h2 className="spotlight-title">{currentBrowsingSet.name}</h2>
                      <div className="spotlight-tagline">{currentBrowsingSet.tagline}</div>
                    </div>
                  </div>

                  <p className="spotlight-desc">{currentBrowsingSet.description}</p>

                  {/* Visual Board & Pieces Color Chips */}
                  <div className="spotlight-materials-preview">
                    <div className="preview-label">Paleta de Tablero &amp; Piezas:</div>
                    <div className="chips-row">
                      <div className="color-chip" style={{ background: currentBrowsingSet.previewColors.boardLight }}>
                        <span>Casillas Claras</span>
                      </div>
                      <div className="color-chip" style={{ background: currentBrowsingSet.previewColors.boardDark, color: '#fff' }}>
                        <span>Casillas Oscuras</span>
                      </div>
                      <div className="color-chip" style={{ background: currentBrowsingSet.previewColors.primary }}>
                        <span>Piezas Principales</span>
                      </div>
                      <div className="color-chip" style={{ background: currentBrowsingSet.previewColors.accent }}>
                        <span>Detalles &amp; Filigrana</span>
                      </div>
                    </div>
                  </div>

                  <div className="spotlight-actions">
                    <button
                      type="button"
                      className="play-set-btn"
                      onClick={() => handleSelectSet(currentBrowsingSet)}
                    >
                      ✓ {t.playThisSet}
                    </button>
                  </div>
                </div>

                {/* 15 Thumbnails Strip (Touch Swipe & Responsive) */}
                <div className="sets-thumbnails-scroller">
                  {currentSetList.map((set, idx) => {
                    const isSelected = idx === activeSetIndex;
                    return (
                      <button
                        key={set.id}
                        type="button"
                        className={`set-thumb-card ${isSelected ? 'active' : ''}`}
                        onClick={() => setActiveSetIndex(idx)}
                      >
                        <span className="thumb-idx">{idx + 1}</span>
                        <span className="thumb-icon">{set.icon}</span>
                        <div className="thumb-name">{set.name}</div>
                        <div
                          className="thumb-color-bar"
                          style={{
                            background: `linear-gradient(90deg, ${set.previewColors.primary}, ${set.previewColors.accent})`
                          }}
                        ></div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
