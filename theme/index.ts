export * from './colors';
export * from './typography';
export * from './spacing';
export * from './shadows';

// Theme type
export type Theme = {
  colors: typeof import('./colors').colors;
  typography: typeof import('./typography').typography;
  typographyVariants: typeof import('./typography').typographyVariants;
  spacing: typeof import('./spacing').spacing;
  sizing: typeof import('./spacing').sizing;
  shadows: typeof import('./shadows').shadows;
};
