// Color constants
export const COLORS = {
  primary: '#1d6b2b',
  secondary: '#807668',
  accent: '#FDF5CE',
  background: '#FFFFF0',
  white: '#FFFFFF',
  transparent: 'transparent',
  overlay: 'rgba(246, 245, 245, 0.18)',
  shadow: 'rgba(253, 245, 206, 0.3)',
} as const

// Breakpoints
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
  wide: 1580,
} as const

// Spacing
export const SPACING = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  xxl: '80px',
} as const

// Border radius
export const BORDER_RADIUS = {
  sm: '16px',
  md: '20px',
  lg: '32px',
  xl: '48px',
  full: '100px',
} as const

// Font sizes
export const FONT_SIZES = {
  xs: '18px',
  sm: '22px',
  md: '24px',
  lg: '28px',
  xl: '32px',
  xxl: '40px',
  huge: '100px',
} as const

// Z-index layers
export const Z_INDEX = {
  base: 1,
  overlay: 100,
  modal: 1000,
  tooltip: 2000,
  fixed: 9999,
} as const

// Animation durations
export const ANIMATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.4,
  slower: 0.5,
} as const
