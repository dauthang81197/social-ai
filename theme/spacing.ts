export const spacing = {
  // Base spacing unit (4px)
  base: 4,
  // Spacing scale
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
} as const;

export const sizing = {
  // Border radius
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 9999,
  },
  // Icon sizes
  icon: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    '2xl': 40,
  },
  // Button sizes
  button: {
    sm: {
      height: 32,
      paddingHorizontal: spacing.md,
    },
    md: {
      height: 40,
      paddingHorizontal: spacing.lg,
    },
    lg: {
      height: 48,
      paddingHorizontal: spacing.xl,
    },
  },
  // Input sizes
  input: {
    sm: {
      height: 32,
      paddingHorizontal: spacing.md,
    },
    md: {
      height: 40,
      paddingHorizontal: spacing.lg,
    },
    lg: {
      height: 48,
      paddingHorizontal: spacing.xl,
    },
  },
} as const;
