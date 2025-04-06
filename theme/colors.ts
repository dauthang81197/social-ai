export const colors = {
  // Primary colors
  primary: {
    main: '#007AFF',
    light: '#47A1FF',
    dark: '#0055B3',
  },
  // Secondary colors
  secondary: {
    main: '#5856D6',
    light: '#7A79E0',
    dark: '#3E3D96',
  },
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  // Semantic colors
  success: {
    main: '#34C759',
    light: '#4CD964',
    dark: '#2D9E4D',
  },
  error: {
    main: '#FF3B30',
    light: '#FF453A',
    dark: '#D63229',
  },
  warning: {
    main: '#FF9500',
    light: '#FFA533',
    dark: '#CC7700',
  },
  info: {
    main: '#5856D6',
    light: '#7A79E0',
    dark: '#3E3D96',
  },
  // Background colors
  background: {
    default: '#FFFFFF',
    paper: '#F9FAFB',
    dark: '#111827',
  },
  // Text colors
  text: {
    primary: '#111827',
    secondary: '#4B5563',
    disabled: '#9CA3AF',
    inverse: '#FFFFFF',
  },
  // Border colors
  border: {
    light: '#E5E7EB',
    main: '#D1D5DB',
    dark: '#9CA3AF',
  },
} as const;
