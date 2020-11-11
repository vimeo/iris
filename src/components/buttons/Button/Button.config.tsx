import { Button } from './Button';

export const config = {
  title: 'Components/Buttons',
  component: Button,
};

export const formats = [
  'basic',
  'soft',
  'alternative',
  'secondary',
  'primary',
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
] as const;
export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
