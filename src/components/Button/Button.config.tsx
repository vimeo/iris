export const formats = [
  'basic',
  'soft',
  'alternative',
  'secondary',
  'primary',
  'upsell',
] as const;
export const statuses = ['positive', 'negative'] as const;
export const variants = [
  'solid',
  'transparent',
  'outline',
  'dashed',
  'minimal',
  'minimalTransparent',
  'hyperminimal',
  'test',
] as const;
export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export const iconPositions = [
  'left',
  'right',
  'featured',
  'action',
] as const;

export const borderRadii = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
} as const;
