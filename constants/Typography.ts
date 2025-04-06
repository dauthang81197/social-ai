export const FONTS = {
  regular: 'System',
  medium: 'System',
  semiBold: 'System',
  bold: 'System',
};

export const SIZES = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
};

export const COLORS = {
  // Primary colors
  primary: '#FF69B4', // pink from design
  secondary: '#FFF0F5', // light pink background
  
  // Text colors
  text: {
    primary: '#4A4A4A',
    secondary: '#666666',
    white: '#FFFFFF',
  },
  
  // Background colors
  background: {
    primary: '#FFF8DC', // cream color from design
    secondary: '#FFFFFF',
  },
  
  // Border colors
  border: {
    light: '#E5E5E5',
    dark: '#1A1A1A',
  },
};

export const TEXT_STYLES = {
  h1: {
    fontWeight: '700' as const,
    fontSize: SIZES['3xl'],
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  h2: {
    fontWeight: '700' as const,
    fontSize: SIZES['2xl'],
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  h3: {
    fontWeight: '600' as const,
    fontSize: SIZES.xl,
    lineHeight: 28,
    letterSpacing: -0.2,
  },
  body1: {
    fontWeight: '400' as const,
    fontSize: SIZES.base,
    lineHeight: 24,
  },
  body2: {
    fontWeight: '400' as const,
    fontSize: SIZES.sm,
    lineHeight: 20,
  },
  button: {
    fontWeight: '600' as const,
    fontSize: SIZES.base,
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  caption: {
    fontWeight: '400' as const,
    fontSize: SIZES.xs,
    lineHeight: 16,
  },
}; 