export const typography = {
  // Font families
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  // Font weights
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  // Letter spacing
  letterSpacing: {
    tighter: -0.05,
    tight: -0.025,
    normal: 0,
    wide: 0.025,
    wider: 0.05,
    widest: 0.1,
  },
} as const;

// Typography variants
export const typographyVariants = {
  h1: {
    fontSize: typography.fontSize['4xl'],
    lineHeight: typography.lineHeight.tight,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.tight,
  },
  h2: {
    fontSize: typography.fontSize['3xl'],
    lineHeight: typography.lineHeight.tight,
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.tight,
  },
  h3: {
    fontSize: typography.fontSize['2xl'],
    lineHeight: typography.lineHeight.snug,
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.tight,
  },
  h4: {
    fontSize: typography.fontSize.xl,
    lineHeight: typography.lineHeight.snug,
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.normal,
  },
  body1: {
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.regular,
    letterSpacing: typography.letterSpacing.normal,
  },
  body2: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.regular,
    letterSpacing: typography.letterSpacing.normal,
  },
  button: {
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.medium,
    letterSpacing: typography.letterSpacing.wide,
  },
  caption: {
    fontSize: typography.fontSize.xs,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.regular,
    letterSpacing: typography.letterSpacing.normal,
  },
} as const;
