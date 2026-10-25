// 15 Egyptian & 15 Roman Piece & Board Styles + Battle of Empires Crossover

export interface BoardStyleConfig {
  lightSqColor: number;
  darkSqColor: number;
  lightRoughness: number;
  darkRoughness: number;
  lightMetalness: number;
  darkMetalness: number;
  borderGoldColor: number;
  borderMetalness: number;
}

export interface PieceStyleConfig {
  whitePieceColor: number;
  whitePieceRoughness: number;
  whitePieceMetalness: number;
  blackPieceColor: number;
  blackPieceRoughness: number;
  blackPieceMetalness: number;
  goldTrimColor: number;
  goldTrimRoughness: number;
  goldTrimMetalness: number;
  steelTrimColor: number;
  steelTrimRoughness: number;
  steelTrimMetalness: number;
}

export interface EmpireSet {
  id: string;
  faction: 'egypt' | 'rome' | 'crossover';
  name: string;
  tagline: string;
  description: string;
  icon: string;
  previewColors: {
    primary: string;
    secondary: string;
    accent: string;
    boardLight: string;
    boardDark: string;
  };
  board: BoardStyleConfig;
  pieces: PieceStyleConfig;
}

// 15 Distinct Egyptian Sets
export const EGYPT_SETS: EmpireSet[] = [
  {
    id: 'egypt_gold',
    faction: 'egypt',
    name: 'Egipto Dorado de los Faraones',
    tagline: 'Oro Real & Obsidiana Pulida',
    description: 'Estatua real bañada en electrum de Luxor con incrustaciones de obsidiana del Valle de los Reyes.',
    icon: '👑',
    previewColors: {
      primary: '#f5d76e',
      secondary: '#1c1b22',
      accent: '#e5b73b',
      boardLight: '#f3e8c9',
      boardDark: '#1e1c24'
    },
    board: {
      lightSqColor: 0xf3e8c9,
      darkSqColor: 0x1e1c24,
      lightRoughness: 0.32,
      darkRoughness: 0.24,
      lightMetalness: 0.12,
      darkMetalness: 0.22,
      borderGoldColor: 0xf5d76e,
      borderMetalness: 0.88
    },
    pieces: {
      whitePieceColor: 0xfcedc2,
      whitePieceRoughness: 0.28,
      whitePieceMetalness: 0.35,
      blackPieceColor: 0x18171f,
      blackPieceRoughness: 0.22,
      blackPieceMetalness: 0.42,
      goldTrimColor: 0xf5d76e,
      goldTrimRoughness: 0.24,
      goldTrimMetalness: 0.92,
      steelTrimColor: 0xd4af37,
      steelTrimRoughness: 0.22,
      steelTrimMetalness: 0.88
    }
  },
  {
    id: 'egypt_ancient_stone',
    faction: 'egypt',
    name: 'Egipto de Piedra Antigua',
    tagline: 'Arenisca de Tebas & Jeroglíficos',
    description: 'Bloques de arenisca tallados a mano con el peso milenario de los templos de Karnak.',
    icon: '🏛️',
    previewColors: {
      primary: '#d8c09d',
      secondary: '#42382e',
      accent: '#c99a53',
      boardLight: '#e4d2b8',
      boardDark: '#3a3028'
    },
    board: {
      lightSqColor: 0xe4d2b8,
      darkSqColor: 0x3a3028,
      lightRoughness: 0.72,
      darkRoughness: 0.68,
      lightMetalness: 0.04,
      darkMetalness: 0.06,
      borderGoldColor: 0xc89b52,
      borderMetalness: 0.62
    },
    pieces: {
      whitePieceColor: 0xeadcc6,
      whitePieceRoughness: 0.58,
      whitePieceMetalness: 0.06,
      blackPieceColor: 0x383028,
      blackPieceRoughness: 0.55,
      blackPieceMetalness: 0.08,
      goldTrimColor: 0xc89b52,
      goldTrimRoughness: 0.45,
      goldTrimMetalness: 0.72,
      steelTrimColor: 0x8c7965,
      steelTrimRoughness: 0.48,
      steelTrimMetalness: 0.55
    }
  },
  {
    id: 'egypt_mystic_sand',
    faction: 'egypt',
    name: 'Egipto de Arena Mística',
    tagline: 'Dunas Doradas & Brisa del Desierto',
    description: 'Cristales de silicio moldeados por tormentas solares y el calor del desierto del Sahara.',
    icon: '🏜️',
    previewColors: {
      primary: '#e8c282',
      secondary: '#5a4632',
      accent: '#dfa245',
      boardLight: '#f0d9ab',
      boardDark: '#4e3b2b'
    },
    board: {
      lightSqColor: 0xf0d9ab,
      darkSqColor: 0x4e3b2b,
      lightRoughness: 0.48,
      darkRoughness: 0.52,
      lightMetalness: 0.08,
      darkMetalness: 0.10,
      borderGoldColor: 0xdfa245,
      borderMetalness: 0.75
    },
    pieces: {
      whitePieceColor: 0xf3e2bf,
      whitePieceRoughness: 0.42,
      whitePieceMetalness: 0.12,
      blackPieceColor: 0x423224,
      blackPieceRoughness: 0.46,
      blackPieceMetalness: 0.14,
      goldTrimColor: 0xdfa245,
      goldTrimRoughness: 0.32,
      goldTrimMetalness: 0.82,
      steelTrimColor: 0xb08b53,
      steelTrimRoughness: 0.35,
      steelTrimMetalness: 0.65
    }
  },
  {
    id: 'egypt_lapis_lazuli',
    faction: 'egypt',
    name: 'Lapislázuli de los Faraones',
    tagline: 'Azul Celestial & Oro Sagrado',
    description: 'La gema más codiciada de la realeza egipcia, invocando el cielo estrellado de Nut.',
    icon: '💎',
    previewColors: {
      primary: '#1d4e89',
      secondary: '#e5c158',
      accent: '#2a6f97',
      boardLight: '#cde1f0',
      boardDark: '#0e274a'
    },
    board: {
      lightSqColor: 0xd2e3f2,
      darkSqColor: 0x0f294d,
      lightRoughness: 0.25,
      darkRoughness: 0.22,
      lightMetalness: 0.15,
      darkMetalness: 0.30,
      borderGoldColor: 0xe5c158,
      borderMetalness: 0.90
    },
    pieces: {
      whitePieceColor: 0xe2eef8,
      whitePieceRoughness: 0.22,
      whitePieceMetalness: 0.18,
      blackPieceColor: 0x112b50,
      blackPieceRoughness: 0.18,
      blackPieceMetalness: 0.35,
      goldTrimColor: 0xf2cb59,
      goldTrimRoughness: 0.20,
      goldTrimMetalness: 0.95,
      steelTrimColor: 0x4682b4,
      steelTrimRoughness: 0.25,
      steelTrimMetalness: 0.80
    }
  },
  {
    id: 'egypt_anubis_obsidian',
    faction: 'egypt',
    name: 'Obsidiana de Anubis',
    tagline: 'Guardianes del Inframundo',
    description: 'Vidrio volcánico negro azabache con filigrana dorada en honor al dios chacal de embalsamamiento.',
    icon: '🐺',
    previewColors: {
      primary: '#111317',
      secondary: '#e5a93b',
      accent: '#6b7280',
      boardLight: '#d1d5db',
      boardDark: '#0b0c0f'
    },
    board: {
      lightSqColor: 0xd6d8dc,
      darkSqColor: 0x0c0e12,
      lightRoughness: 0.35,
      darkRoughness: 0.18,
      lightMetalness: 0.08,
      darkMetalness: 0.45,
      borderGoldColor: 0xe5a93b,
      borderMetalness: 0.92
    },
    pieces: {
      whitePieceColor: 0xedeef0,
      whitePieceRoughness: 0.30,
      whitePieceMetalness: 0.15,
      blackPieceColor: 0x090a0d,
      blackPieceRoughness: 0.15,
      blackPieceMetalness: 0.55,
      goldTrimColor: 0xe5a93b,
      goldTrimRoughness: 0.22,
      goldTrimMetalness: 0.94,
      steelTrimColor: 0x374151,
      steelTrimRoughness: 0.24,
      steelTrimMetalness: 0.82
    }
  },
  {
    id: 'egypt_nile_alabaster',
    faction: 'egypt',
    name: 'Alabastro del Nilo',
    tagline: 'Translucidez Blanca & Turquesa Sagrada',
    description: 'Alabastro imperial translúcido extraído de Hatnub con reflejos de turquesa del Sinaí.',
    icon: '✨',
    previewColors: {
      primary: '#f4ede2',
      secondary: '#2a9d8f',
      accent: '#e76f51',
      boardLight: '#faf6ee',
      boardDark: '#1e4844'
    },
    board: {
      lightSqColor: 0xfcf8f2,
      darkSqColor: 0x1f4a46,
      lightRoughness: 0.22,
      darkRoughness: 0.28,
      lightMetalness: 0.06,
      darkMetalness: 0.22,
      borderGoldColor: 0x38b2a3,
      borderMetalness: 0.78
    },
    pieces: {
      whitePieceColor: 0xfffcf7,
      whitePieceRoughness: 0.20,
      whitePieceMetalness: 0.10,
      blackPieceColor: 0x183e3a,
      blackPieceRoughness: 0.24,
      blackPieceMetalness: 0.28,
      goldTrimColor: 0x38b2a3,
      goldTrimRoughness: 0.25,
      goldTrimMetalness: 0.84,
      steelTrimColor: 0x5eead4,
      steelTrimRoughness: 0.22,
      steelTrimMetalness: 0.76
    }
  },
  {
    id: 'egypt_karnak_temple',
    faction: 'egypt',
    name: 'Templo de Karnak',
    tagline: 'Granito Rojo & Columnas Monumentales',
    description: 'Inspirado en la gran sala hipóstila con 134 columnas gigantes bañadas por el sol.',
    icon: '⛩️',
    previewColors: {
      primary: '#b0654e',
      secondary: '#36221d',
      accent: '#e69d72',
      boardLight: '#e8c4b2',
      boardDark: '#381e18'
    },
    board: {
      lightSqColor: 0xe8c4b2,
      darkSqColor: 0x381e18,
      lightRoughness: 0.54,
      darkRoughness: 0.48,
      lightMetalness: 0.08,
      darkMetalness: 0.15,
      borderGoldColor: 0xdf845d,
      borderMetalness: 0.72
    },
    pieces: {
      whitePieceColor: 0xf0d6c7,
      whitePieceRoughness: 0.46,
      whitePieceMetalness: 0.10,
      blackPieceColor: 0x341913,
      blackPieceRoughness: 0.42,
      blackPieceMetalness: 0.18,
      goldTrimColor: 0xdf845d,
      goldTrimRoughness: 0.30,
      goldTrimMetalness: 0.80,
      steelTrimColor: 0x934b35,
      steelTrimRoughness: 0.35,
      steelTrimMetalness: 0.65
    }
  },
  {
    id: 'egypt_eye_of_horus',
    faction: 'egypt',
    name: 'Ojo de Horus Sagrado',
    tagline: 'Protección Divina & Azurita',
    description: 'El Wedjat protector contra las fuerzas del caos, esculpido en azurita y oro brillante.',
    icon: '👁️',
    previewColors: {
      primary: '#1d3557',
      secondary: '#f4a261',
      accent: '#457b9d',
      boardLight: '#d9e2ec',
      boardDark: '#12233b'
    },
    board: {
      lightSqColor: 0xd9e2ec,
      darkSqColor: 0x12233b,
      lightRoughness: 0.30,
      darkRoughness: 0.26,
      lightMetalness: 0.12,
      darkMetalness: 0.28,
      borderGoldColor: 0xf4a261,
      borderMetalness: 0.86
    },
    pieces: {
      whitePieceColor: 0xe8eef5,
      whitePieceRoughness: 0.25,
      whitePieceMetalness: 0.16,
      blackPieceColor: 0x102035,
      blackPieceRoughness: 0.22,
      blackPieceMetalness: 0.32,
      goldTrimColor: 0xf4a261,
      goldTrimRoughness: 0.22,
      goldTrimMetalness: 0.90,
      steelTrimColor: 0x457b9d,
      steelTrimRoughness: 0.24,
      steelTrimMetalness: 0.82
    }
  },
  {
    id: 'egypt_sacred_scarab',
    faction: 'egypt',
    name: 'Escarabajo Khepri',
    tagline: 'Esmeralda Tornasol & Renacimiento',
    description: 'El símbolo del sol naciente reflejado en caparazones irisados de malaquita y oro.',
    icon: '🪲',
    previewColors: {
      primary: '#2d6a4f',
      secondary: '#d4af37',
      accent: '#52b788',
      boardLight: '#d8f3dc',
      boardDark: '#1b4332'
    },
    board: {
      lightSqColor: 0xd8f3dc,
      darkSqColor: 0x1b4332,
      lightRoughness: 0.28,
      darkRoughness: 0.25,
      lightMetalness: 0.18,
      darkMetalness: 0.35,
      borderGoldColor: 0xd4af37,
      borderMetalness: 0.90
    },
    pieces: {
      whitePieceColor: 0xeafaf1,
      whitePieceRoughness: 0.24,
      whitePieceMetalness: 0.20,
      blackPieceColor: 0x143527,
      blackPieceRoughness: 0.20,
      blackPieceMetalness: 0.40,
      goldTrimColor: 0xd4af37,
      goldTrimRoughness: 0.22,
      goldTrimMetalness: 0.92,
      steelTrimColor: 0x40916c,
      steelTrimRoughness: 0.25,
      steelTrimMetalness: 0.80
    }
  },
  {
    id: 'egypt_ramses_dynasty',
    faction: 'egypt',
    name: 'Dinastía de Ramsés II',
    tagline: 'Pórfido Rojo Imperial & Poder Guerrero',
    description: 'El legado bélico del vencedor de Kadesh forjado en pórfido imperial egipcio.',
    icon: '🏹',
    previewColors: {
      primary: '#7209b7',
      secondary: '#f72585',
      accent: '#d4af37',
      boardLight: '#f2e8f8',
      boardDark: '#36094a'
    },
    board: {
      lightSqColor: 0xf2e8f8,
      darkSqColor: 0x36094a,
      lightRoughness: 0.32,
      darkRoughness: 0.28,
      lightMetalness: 0.12,
      darkMetalness: 0.25,
      borderGoldColor: 0xd4af37,
      borderMetalness: 0.88
    },
    pieces: {
      whitePieceColor: 0xf7f0fa,
      whitePieceRoughness: 0.28,
      whitePieceMetalness: 0.15,
      blackPieceColor: 0x300842,
      blackPieceRoughness: 0.24,
      blackPieceMetalness: 0.32,
      goldTrimColor: 0xd4af37,
      goldTrimRoughness: 0.22,
      goldTrimMetalness: 0.90,
      steelTrimColor: 0xb5179e,
      steelTrimRoughness: 0.26,
      steelTrimMetalness: 0.78
    }
  },
  {
    id: 'egypt_sacred_oasis',
    faction: 'egypt',
    name: 'Oasis Sagrado de Siwa',
    tagline: 'Malaquita Viva & Aguas del Oráculo',
    description: 'El santuario en medio del desierto donde Alejandro Magno fue coronado hijo de Amón.',
    icon: '🌴',
    previewColors: {
      primary: '#0077b6',
      secondary: '#90e0ef',
      accent: '#e29578',
      boardLight: '#caf0f8',
      boardDark: '#03045e'
    },
    board: {
      lightSqColor: 0xd6f4f9,
      darkSqColor: 0x051b47,
      lightRoughness: 0.26,
      darkRoughness: 0.22,
      lightMetalness: 0.14,
      darkMetalness: 0.32,
      borderGoldColor: 0x00b4d8,
      borderMetalness: 0.82
    },
    pieces: {
      whitePieceColor: 0xe8f9fc,
      whitePieceRoughness: 0.22,
      whitePieceMetalness: 0.15,
      blackPieceColor: 0x041639,
      blackPieceRoughness: 0.18,
      blackPieceMetalness: 0.38,
      goldTrimColor: 0x48cae4,
      goldTrimRoughness: 0.24,
      goldTrimMetalness: 0.85,
      steelTrimColor: 0x0077b6,
      steelTrimRoughness: 0.25,
      steelTrimMetalness: 0.78
    }
  },
  {
    id: 'egypt_tutankhamun_tomb',
    faction: 'egypt',
    name: 'Tumba de Tutankamón',
    tagline: 'Máscara Funeraria de Oro Puro & Vidrio Azul',
    description: 'Recreación exacta del tesoro intacto de la tumba KV62 con pigmentos de pasta vítrea.',
    icon: '🏺',
    previewColors: {
      primary: '#f9c74f',
      secondary: '#277da1',
      accent: '#90be6d',
      boardLight: '#fbf2d5',
      boardDark: '#1b4055'
    },
    board: {
      lightSqColor: 0xfbf2d5,
      darkSqColor: 0x1b4055,
      lightRoughness: 0.28,
      darkRoughness: 0.24,
      lightMetalness: 0.25,
      darkMetalness: 0.35,
      borderGoldColor: 0xf9c74f,
      borderMetalness: 0.94
    },
    pieces: {
      whitePieceColor: 0xfef7e2,
      whitePieceRoughness: 0.24,
      whitePieceMetalness: 0.30,
      blackPieceColor: 0x163445,
      blackPieceRoughness: 0.20,
      blackPieceMetalness: 0.40,
      goldTrimColor: 0xf9c74f,
      goldTrimRoughness: 0.18,
      goldTrimMetalness: 0.96,
      steelTrimColor: 0x4d908e,
      steelTrimRoughness: 0.22,
      steelTrimMetalness: 0.82
    }
  },
  {
    id: 'egypt_royal_papyrus',
    faction: 'egypt',
    name: 'Papiro Real de Alejandría',
    tagline: 'Papiro Pergamino & Tinta de Hollín',
    description: 'Rollos de biblioteca iluminados con cálamo y pigmentos minerales del delta.',
    icon: '📜',
    previewColors: {
      primary: '#e9d8a6',
      secondary: '#005f73',
      accent: '#ee9b00',
      boardLight: '#f3e9cb',
      boardDark: '#2b2d42'
    },
    board: {
      lightSqColor: 0xf3e9cb,
      darkSqColor: 0x2b2d42,
      lightRoughness: 0.52,
      darkRoughness: 0.46,
      lightMetalness: 0.05,
      darkMetalness: 0.12,
      borderGoldColor: 0xee9b00,
      borderMetalness: 0.74
    },
    pieces: {
      whitePieceColor: 0xf8f1db,
      whitePieceRoughness: 0.48,
      whitePieceMetalness: 0.08,
      blackPieceColor: 0x222435,
      blackPieceRoughness: 0.42,
      blackPieceMetalness: 0.16,
      goldTrimColor: 0xee9b00,
      goldTrimRoughness: 0.32,
      goldTrimMetalness: 0.82,
      steelTrimColor: 0x0a9396,
      steelTrimRoughness: 0.34,
      steelTrimMetalness: 0.70
    }
  },
  {
    id: 'egypt_ancient_sphinx',
    faction: 'egypt',
    name: 'Esfinge de Guiza',
    tagline: 'Caliza Milenaria & Enigma del Desierto',
    description: 'Cuerpo de león y rostro de faraón que vigilan el horizonte desde hace cinco mil años.',
    icon: '🦁',
    previewColors: {
      primary: '#c9ada7',
      secondary: '#4a4e69',
      accent: '#9a8c98',
      boardLight: '#dfd3cf',
      boardDark: '#393c52'
    },
    board: {
      lightSqColor: 0xdfd3cf,
      darkSqColor: 0x393c52,
      lightRoughness: 0.65,
      darkRoughness: 0.58,
      lightMetalness: 0.04,
      darkMetalness: 0.10,
      borderGoldColor: 0xb5927f,
      borderMetalness: 0.68
    },
    pieces: {
      whitePieceColor: 0xeae0dd,
      whitePieceRoughness: 0.55,
      whitePieceMetalness: 0.06,
      blackPieceColor: 0x303345,
      blackPieceRoughness: 0.50,
      blackPieceMetalness: 0.14,
      goldTrimColor: 0xb5927f,
      goldTrimRoughness: 0.38,
      goldTrimMetalness: 0.74,
      steelTrimColor: 0x6c757d,
      steelTrimRoughness: 0.40,
      steelTrimMetalness: 0.66
    }
  },
  {
    id: 'egypt_sun_of_ra',
    faction: 'egypt',
    name: 'Sol Eterno de Ra',
    tagline: 'Oro Solar, Fuego y Ópalo de Fuego',
    description: 'La deidad suprema surcando el firmamento en la barca solar, irradiando calor y vida.',
    icon: '☀️',
    previewColors: {
      primary: '#ffb703',
      secondary: '#fb8500',
      accent: '#d00000',
      boardLight: '#fef0cd',
      boardDark: '#4a1505'
    },
    board: {
      lightSqColor: 0xfef0cd,
      darkSqColor: 0x4a1505,
      lightRoughness: 0.28,
      darkRoughness: 0.24,
      lightMetalness: 0.30,
      darkMetalness: 0.35,
      borderGoldColor: 0xffb703,
      borderMetalness: 0.95
    },
    pieces: {
      whitePieceColor: 0xfff6dc,
      whitePieceRoughness: 0.22,
      whitePieceMetalness: 0.38,
      blackPieceColor: 0x3a0f03,
      blackPieceRoughness: 0.18,
      blackPieceMetalness: 0.45,
      goldTrimColor: 0xffb703,
      goldTrimRoughness: 0.16,
      goldTrimMetalness: 0.98,
      steelTrimColor: 0xfb8500,
      steelTrimRoughness: 0.20,
      steelTrimMetalness: 0.88
    }
  }
];

// 15 Distinct Roman Sets
export const ROME_SETS: EmpireSet[] = [
  {
    id: 'rome_carrara_marble',
    faction: 'rome',
    name: 'Mármol Imperial de Carrara',
    tagline: 'Mármol Blanco Puro & Laureles de Oro',
    description: 'Esculpido en las canteras de la Toscana con las que Augusto transformó Roma de ladrillo a mármol.',
    icon: '🏛️',
    previewColors: {
      primary: '#f5f5f7',
      secondary: '#800020',
      accent: '#d4af37',
      boardLight: '#f8f8fa',
      boardDark: '#1f242d'
    },
    board: {
      lightSqColor: 0xf8f8fa,
      darkSqColor: 0x1f242d,
      lightRoughness: 0.20,
      darkRoughness: 0.26,
      lightMetalness: 0.10,
      darkMetalness: 0.25,
      borderGoldColor: 0xd4af37,
      borderMetalness: 0.92
    },
    pieces: {
      whitePieceColor: 0xffffff,
      whitePieceRoughness: 0.18,
      whitePieceMetalness: 0.12,
      blackPieceColor: 0x181c24,
      blackPieceRoughness: 0.22,
      blackPieceMetalness: 0.30,
      goldTrimColor: 0xd4af37,
      goldTrimRoughness: 0.20,
      goldTrimMetalness: 0.94,
      steelTrimColor: 0x800020,
      steelTrimRoughness: 0.28,
      steelTrimMetalness: 0.75
    }
  },
  {
    id: 'rome_bronze_legion',
    faction: 'rome',
    name: 'Legión de Bronce y Oro',
    tagline: 'Bronce Romano & Armaduras de Batalla',
    description: 'Armaduras de lorica segmentata y escudos scutum forjados para las legiones del Rin y el Danubio.',
    icon: '🛡️',
    previewColors: {
      primary: '#b87333',
      secondary: '#2a1a12',
      accent: '#e5a93b',
      boardLight: '#ebd9c8',
      boardDark: '#2e1c14'
    },
    board: {
      lightSqColor: 0xebd9c8,
      darkSqColor: 0x2e1c14,
      lightRoughness: 0.36,
      darkRoughness: 0.32,
      lightMetalness: 0.40,
      darkMetalness: 0.50,
      borderGoldColor: 0xb87333,
      borderMetalness: 0.88
    },
    pieces: {
      whitePieceColor: 0xf3e6d8,
      whitePieceRoughness: 0.32,
      whitePieceMetalness: 0.45,
      blackPieceColor: 0x24150f,
      blackPieceRoughness: 0.28,
      blackPieceMetalness: 0.55,
      goldTrimColor: 0xe5a93b,
      goldTrimRoughness: 0.22,
      goldTrimMetalness: 0.92,
      steelTrimColor: 0xb87333,
      steelTrimRoughness: 0.25,
      steelTrimMetalness: 0.85
    }
  },
  {
    id: 'rome_imperial_purple',
    faction: 'rome',
    name: 'Púrpura Imperial de Tiro',
    tagline: 'El Manto Sagrado de los Césares',
    description: 'El tinte más costoso de la antigüedad clásica, reservado por ley exclusivamente para el Emperador.',
    icon: '👑',
    previewColors: {
      primary: '#5c0632',
      secondary: '#e5c158',
      accent: '#8e1b58',
      boardLight: '#f5e4ed',
      boardDark: '#38031d'
    },
    board: {
      lightSqColor: 0xf5e4ed,
      darkSqColor: 0x38031d,
      lightRoughness: 0.28,
      darkRoughness: 0.25,
      lightMetalness: 0.15,
      darkMetalness: 0.30,
      borderGoldColor: 0xe5c158,
      borderMetalness: 0.94
    },
    pieces: {
      whitePieceColor: 0xfbeef5,
      whitePieceRoughness: 0.24,
      whitePieceMetalness: 0.18,
      blackPieceColor: 0x2f0218,
      blackPieceRoughness: 0.20,
      blackPieceMetalness: 0.35,
      goldTrimColor: 0xe5c158,
      goldTrimRoughness: 0.18,
      goldTrimMetalness: 0.96,
      steelTrimColor: 0x8e1b58,
      steelTrimRoughness: 0.24,
      steelTrimMetalness: 0.82
    }
  },
  {
    id: 'rome_colosseum_travertine',
    faction: 'rome',
    name: 'Coliseo de Travertino',
    tagline: 'Piedra del Anfiteatro Flavio',
    description: 'Bloques porosos de travertino de Tívoli que han resistido gladiadores y siglos de asedios.',
    icon: '🏟️',
    previewColors: {
      primary: '#d6c7b2',
      secondary: '#4d3f33',
      accent: '#a83232',
      boardLight: '#e9dfd0',
      boardDark: '#45372b'
    },
    board: {
      lightSqColor: 0xe9dfd0,
      darkSqColor: 0x45372b,
      lightRoughness: 0.62,
      darkRoughness: 0.58,
      lightMetalness: 0.05,
      darkMetalness: 0.08,
      borderGoldColor: 0xa83232,
      borderMetalness: 0.65
    },
    pieces: {
      whitePieceColor: 0xf0e8db,
      whitePieceRoughness: 0.52,
      whitePieceMetalness: 0.06,
      blackPieceColor: 0x3c3025,
      blackPieceRoughness: 0.48,
      blackPieceMetalness: 0.12,
      goldTrimColor: 0xc49a45,
      goldTrimRoughness: 0.35,
      goldTrimMetalness: 0.80,
      steelTrimColor: 0x8b2525,
      steelTrimRoughness: 0.38,
      steelTrimMetalness: 0.70
    }
  },
  {
    id: 'rome_augustan_eagle',
    faction: 'rome',
    name: 'Águila Augusta',
    tagline: 'Aquila de la Décima Legión',
    description: 'El estandarte supremo sagrado de Roma cuya pérdida significaba la deshonra eterna de la legión.',
    icon: '🦅',
    previewColors: {
      primary: '#d4af37',
      secondary: '#1c1f26',
      accent: '#a82020',
      boardLight: '#f2e8cb',
      boardDark: '#1a1c22'
    },
    board: {
      lightSqColor: 0xf2e8cb,
      darkSqColor: 0x1a1c22,
      lightRoughness: 0.28,
      darkRoughness: 0.22,
      lightMetalness: 0.25,
      darkMetalness: 0.35,
      borderGoldColor: 0xd4af37,
      borderMetalness: 0.95
    },
    pieces: {
      whitePieceColor: 0xf8f1dc,
      whitePieceRoughness: 0.24,
      whitePieceMetalness: 0.32,
      blackPieceColor: 0x14161b,
      blackPieceRoughness: 0.18,
      blackPieceMetalness: 0.48,
      goldTrimColor: 0xd4af37,
      goldTrimRoughness: 0.16,
      goldTrimMetalness: 0.96,
      steelTrimColor: 0xa82020,
      steelTrimRoughness: 0.22,
      steelTrimMetalness: 0.85
    }
  },
  {
    id: 'rome_praetorian_guard',
    faction: 'rome',
    name: 'Guardia Pretoriana',
    tagline: 'Acero Oscuro & Penacho Escarlata',
    description: 'La guardia de élite personal del emperador acuartelada en el Castra Praetoria de Roma.',
    icon: '⚔️',
    previewColors: {
      primary: '#242833',
      secondary: '#c1121f',
      accent: '#d4af37',
      boardLight: '#dfe3ea',
      boardDark: '#15171e'
    },
    board: {
      lightSqColor: 0xdfe3ea,
      darkSqColor: 0x15171e,
      lightRoughness: 0.30,
      darkRoughness: 0.20,
      lightMetalness: 0.20,
      darkMetalness: 0.45,
      borderGoldColor: 0xc1121f,
      borderMetalness: 0.85
    },
    pieces: {
      whitePieceColor: 0xeaedf2,
      whitePieceRoughness: 0.26,
      whitePieceMetalness: 0.22,
      blackPieceColor: 0x0f1116,
      blackPieceRoughness: 0.16,
      blackPieceMetalness: 0.58,
      goldTrimColor: 0xc1121f,
      goldTrimRoughness: 0.20,
      goldTrimMetalness: 0.88,
      steelTrimColor: 0xd4af37,
      steelTrimRoughness: 0.20,
      steelTrimMetalness: 0.92
    }
  },
  {
    id: 'rome_gladiator_arena',
    faction: 'rome',
    name: 'Gladiador de la Arena',
    tagline: 'Arena Sangrienta & Bronce Murmillo',
    description: 'Morituri te salutant: el valor de los campeones del anfiteatro grabado en bronce y sangre.',
    icon: '🩸',
    previewColors: {
      primary: '#9b2226',
      secondary: '#bb3e03',
      accent: '#ee9b00',
      boardLight: '#f1dfd1',
      boardDark: '#4a1012'
    },
    board: {
      lightSqColor: 0xf1dfd1,
      darkSqColor: 0x4a1012,
      lightRoughness: 0.44,
      darkRoughness: 0.38,
      lightMetalness: 0.15,
      darkMetalness: 0.30,
      borderGoldColor: 0xee9b00,
      borderMetalness: 0.82
    },
    pieces: {
      whitePieceColor: 0xf6eae0,
      whitePieceRoughness: 0.38,
      whitePieceMetalness: 0.18,
      blackPieceColor: 0x3d0b0d,
      blackPieceRoughness: 0.30,
      blackPieceMetalness: 0.42,
      goldTrimColor: 0xee9b00,
      goldTrimRoughness: 0.24,
      goldTrimMetalness: 0.88,
      steelTrimColor: 0xca6702,
      steelTrimRoughness: 0.28,
      steelTrimMetalness: 0.80
    }
  },
  {
    id: 'rome_spqr_senate',
    faction: 'rome',
    name: 'Senatus Populusque Romanus',
    tagline: 'Mármol del Senado & Laurel Cónsul',
    description: 'La máxima autoridad republicana de la Curia Julia, donde los cónsules gobernaban el mundo conocido.',
    icon: '📜',
    previewColors: {
      primary: '#ffffff',
      secondary: '#d4af37',
      accent: '#6b0f1a',
      boardLight: '#f7f7f9',
      boardDark: '#2b2326'
    },
    board: {
      lightSqColor: 0xf7f7f9,
      darkSqColor: 0x2b2326,
      lightRoughness: 0.22,
      darkRoughness: 0.26,
      lightMetalness: 0.12,
      darkMetalness: 0.28,
      borderGoldColor: 0xd4af37,
      borderMetalness: 0.94
    },
    pieces: {
      whitePieceColor: 0xffffff,
      whitePieceRoughness: 0.18,
      whitePieceMetalness: 0.15,
      blackPieceColor: 0x221b1e,
      blackPieceRoughness: 0.22,
      blackPieceMetalness: 0.32,
      goldTrimColor: 0xd4af37,
      goldTrimRoughness: 0.18,
      goldTrimMetalness: 0.95,
      steelTrimColor: 0x6b0f1a,
      steelTrimRoughness: 0.26,
      steelTrimMetalness: 0.78
    }
  },
  {
    id: 'rome_julius_caesar',
    faction: 'rome',
    name: 'Legión de Julio César',
    tagline: 'Rojo Carmesí & Plata Pulida',
    description: 'Veni, Vidi, Vici: la imbatible Legio XIII Gemina que cruzó el Rubicón para cambiar la historia.',
    icon: '🗡️',
    previewColors: {
      primary: '#a4161a',
      secondary: '#e5e5e5',
      accent: '#e0a96d',
      boardLight: '#f5e4e4',
      boardDark: '#2b090a'
    },
    board: {
      lightSqColor: 0xf5e4e4,
      darkSqColor: 0x2b090a,
      lightRoughness: 0.28,
      darkRoughness: 0.24,
      lightMetalness: 0.20,
      darkMetalness: 0.35,
      borderGoldColor: 0xe0a96d,
      borderMetalness: 0.90
    },
    pieces: {
      whitePieceColor: 0xf9eded,
      whitePieceRoughness: 0.22,
      whitePieceMetalness: 0.25,
      blackPieceColor: 0x210607,
      blackPieceRoughness: 0.18,
      blackPieceMetalness: 0.44,
      goldTrimColor: 0xe0a96d,
      goldTrimRoughness: 0.20,
      goldTrimMetalness: 0.92,
      steelTrimColor: 0xd3d3d3,
      steelTrimRoughness: 0.18,
      steelTrimMetalness: 0.90
    }
  },
  {
    id: 'rome_pantheon_gods',
    faction: 'rome',
    name: 'Panteón de los Dioses',
    tagline: 'Óculo Celestial & Hormigón Romano',
    description: 'La cúpula de hormigón no armado más grande del mundo, templo a todos los dioses olímpicos.',
    icon: '⚡',
    previewColors: {
      primary: '#6c757d',
      secondary: '#212529',
      accent: '#f8f9fa',
      boardLight: '#e9ecef',
      boardDark: '#1c1f23'
    },
    board: {
      lightSqColor: 0xe9ecef,
      darkSqColor: 0x1c1f23,
      lightRoughness: 0.40,
      darkRoughness: 0.35,
      lightMetalness: 0.10,
      darkMetalness: 0.22,
      borderGoldColor: 0xbfa15f,
      borderMetalness: 0.76
    },
    pieces: {
      whitePieceColor: 0xf1f3f5,
      whitePieceRoughness: 0.32,
      whitePieceMetalness: 0.12,
      blackPieceColor: 0x15181b,
      blackPieceRoughness: 0.28,
      blackPieceMetalness: 0.28,
      goldTrimColor: 0xbfa15f,
      goldTrimRoughness: 0.28,
      goldTrimMetalness: 0.82,
      steelTrimColor: 0xadb5bd,
      steelTrimRoughness: 0.30,
      steelTrimMetalness: 0.75
    }
  },
  {
    id: 'rome_appian_way',
    faction: 'rome',
    name: 'Vía Apia Regina Viarum',
    tagline: 'Basalto Poligonal & Bronce Envejecido',
    description: 'La reina de las calzadas romanas pavimentada con lajas de basalto pulidas por millones de legionarios.',
    icon: '🛤️',
    previewColors: {
      primary: '#495057',
      secondary: '#adb5bd',
      accent: '#b08968',
      boardLight: '#dee2e6',
      boardDark: '#212529'
    },
    board: {
      lightSqColor: 0xdfe2e6,
      darkSqColor: 0x22252a,
      lightRoughness: 0.58,
      darkRoughness: 0.50,
      lightMetalness: 0.08,
      darkMetalness: 0.18,
      borderGoldColor: 0xb08968,
      borderMetalness: 0.70
    },
    pieces: {
      whitePieceColor: 0xe8ebef,
      whitePieceRoughness: 0.48,
      whitePieceMetalness: 0.10,
      blackPieceColor: 0x1b1d22,
      blackPieceRoughness: 0.42,
      blackPieceMetalness: 0.24,
      goldTrimColor: 0xb08968,
      goldTrimRoughness: 0.34,
      goldTrimMetalness: 0.78,
      steelTrimColor: 0x7f8c8d,
      steelTrimRoughness: 0.36,
      steelTrimMetalness: 0.68
    }
  },
  {
    id: 'rome_triumphal_arch',
    faction: 'rome',
    name: 'Arco de Triunfo',
    tagline: 'Relieves de Victoria & Oro Flávico',
    description: 'El arco monumental de Constantino y Tito celebrando las campañas victoriosas del imperio.',
    icon: '🏛️',
    previewColors: {
      primary: '#eae2b7',
      secondary: '#003049',
      accent: '#d62828',
      boardLight: '#f2edd7',
      boardDark: '#12263a'
    },
    board: {
      lightSqColor: 0xf2edd7,
      darkSqColor: 0x12263a,
      lightRoughness: 0.34,
      darkRoughness: 0.28,
      lightMetalness: 0.14,
      darkMetalness: 0.28,
      borderGoldColor: 0xd4af37,
      borderMetalness: 0.90
    },
    pieces: {
      whitePieceColor: 0xf7f4e4,
      whitePieceRoughness: 0.28,
      whitePieceMetalness: 0.18,
      blackPieceColor: 0x0d1f30,
      blackPieceRoughness: 0.24,
      blackPieceMetalness: 0.35,
      goldTrimColor: 0xd4af37,
      goldTrimRoughness: 0.20,
      goldTrimMetalness: 0.94,
      steelTrimColor: 0xd62828,
      steelTrimRoughness: 0.26,
      steelTrimMetalness: 0.80
    }
  },
  {
    id: 'rome_forge_of_vulcan',
    faction: 'rome',
    name: 'Fragua de Vulcano',
    tagline: 'Hierro Templado & Brasas de Fuego',
    description: 'Forjada en los fuegos subterráneos del monte Etna por el dios herrero de las armas de Marte.',
    icon: '🔥',
    previewColors: {
      primary: '#ff4d00',
      secondary: '#1a100c',
      accent: '#ffaa00',
      boardLight: '#eddcd4',
      boardDark: '#200e07'
    },
    board: {
      lightSqColor: 0xeddcd4,
      darkSqColor: 0x200e07,
      lightRoughness: 0.32,
      darkRoughness: 0.26,
      lightMetalness: 0.30,
      darkMetalness: 0.55,
      borderGoldColor: 0xffaa00,
      borderMetalness: 0.92
    },
    pieces: {
      whitePieceColor: 0xf4e6df,
      whitePieceRoughness: 0.26,
      whitePieceMetalness: 0.35,
      blackPieceColor: 0x160803,
      blackPieceRoughness: 0.20,
      blackPieceMetalness: 0.65,
      goldTrimColor: 0xffaa00,
      goldTrimRoughness: 0.18,
      goldTrimMetalness: 0.95,
      steelTrimColor: 0xff4d00,
      steelTrimRoughness: 0.22,
      steelTrimMetalness: 0.88
    }
  },
  {
    id: 'rome_alexandrian_conquest',
    faction: 'rome',
    name: 'Faraón Cautivo de Roma',
    tagline: 'Mármol Greco-Romano & Oro de Cleopatra',
    description: 'La caída de Alejandría y la proclamación de Egipto como provincia imperial de Roma.',
    icon: '🏺',
    previewColors: {
      primary: '#2b2d42',
      secondary: '#8d99ae',
      accent: '#d4af37',
      boardLight: '#edf2f4',
      boardDark: '#1c1e2b'
    },
    board: {
      lightSqColor: 0xedf2f4,
      darkSqColor: 0x1c1e2b,
      lightRoughness: 0.26,
      darkRoughness: 0.22,
      lightMetalness: 0.16,
      darkMetalness: 0.32,
      borderGoldColor: 0xd4af37,
      borderMetalness: 0.92
    },
    pieces: {
      whitePieceColor: 0xf5f7f8,
      whitePieceRoughness: 0.22,
      whitePieceMetalness: 0.20,
      blackPieceColor: 0x151620,
      blackPieceRoughness: 0.18,
      blackPieceMetalness: 0.40,
      goldTrimColor: 0xd4af37,
      goldTrimRoughness: 0.18,
      goldTrimMetalness: 0.94,
      steelTrimColor: 0x8d99ae,
      steelTrimRoughness: 0.24,
      steelTrimMetalness: 0.78
    }
  },
  {
    id: 'rome_eternal_empire',
    faction: 'rome',
    name: 'Imperio Eterno',
    tagline: 'Oro Soberano, Ónix y Carmesí César',
    description: 'Roma Aeterna: la cumbre de la civilización clásica reinando sobre tres continentes.',
    icon: '👑',
    previewColors: {
      primary: '#d4af37',
      secondary: '#800020',
      accent: '#0d1117',
      boardLight: '#fbf4dc',
      boardDark: '#1a050b'
    },
    board: {
      lightSqColor: 0xfbf4dc,
      darkSqColor: 0x1a050b,
      lightRoughness: 0.24,
      darkRoughness: 0.20,
      lightMetalness: 0.32,
      darkMetalness: 0.42,
      borderGoldColor: 0xd4af37,
      borderMetalness: 0.96
    },
    pieces: {
      whitePieceColor: 0xfdf8e8,
      whitePieceRoughness: 0.20,
      whitePieceMetalness: 0.36,
      blackPieceColor: 0x120307,
      blackPieceRoughness: 0.16,
      blackPieceMetalness: 0.52,
      goldTrimColor: 0xd4af37,
      goldTrimRoughness: 0.16,
      goldTrimMetalness: 0.98,
      steelTrimColor: 0x800020,
      steelTrimRoughness: 0.20,
      steelTrimMetalness: 0.88
    }
  }
];

// Special Mode: Battle of Empires (Crossover)
export const CROSSOVER_SET: EmpireSet = {
  id: 'crossover_empires',
  faction: 'crossover',
  name: 'Batalla de Imperios: Roma vs Egipto',
  tagline: 'Egipto (Blancas) vs Roma (Negras)',
  description: 'Guerra total: las dinastías doradas del Faraón en el bando blanco contra las legiones de hierro del César en el bando negro en un tablero dividido a la mitad.',
  icon: '⚔️',
  previewColors: {
    primary: '#f5d76e',
    secondary: '#8b0000',
    accent: '#d4af37',
    boardLight: '#f3e8c9',
    boardDark: '#2b090a'
  },
  board: {
    lightSqColor: 0xf3e8c9,
    darkSqColor: 0x2b090a,
    lightRoughness: 0.30,
    darkRoughness: 0.24,
    lightMetalness: 0.18,
    darkMetalness: 0.32,
    borderGoldColor: 0xd4af37,
    borderMetalness: 0.94
  },
  pieces: {
    // White Pieces: Egyptian Sacred Pharaoh Gold & Alabaster
    whitePieceColor: 0xf9edd0,
    whitePieceRoughness: 0.24,
    whitePieceMetalness: 0.35,
    // Black Pieces: Roman Legion Centurion Iron & Dark Bronze
    blackPieceColor: 0x181c22,
    blackPieceRoughness: 0.20,
    blackPieceMetalness: 0.55,
    goldTrimColor: 0xf5d76e,
    goldTrimRoughness: 0.18,
    goldTrimMetalness: 0.96,
    steelTrimColor: 0x8b0000,
    steelTrimRoughness: 0.24,
    steelTrimMetalness: 0.85
  }
};

export const ALL_SETS: Record<string, EmpireSet> = {};
for (const s of EGYPT_SETS) ALL_SETS[s.id] = s;
for (const s of ROME_SETS) ALL_SETS[s.id] = s;
ALL_SETS[CROSSOVER_SET.id] = CROSSOVER_SET;
