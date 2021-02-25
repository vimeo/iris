import { Avatar } from './Avatar';
import { description, scratch } from './Avatar.notes';

export const config = {
  title: 'Components/Chips/Avatar',
  component: Avatar,
  parameters: {
    notes: {
      description,
      scratch,
    },
  },
  argTypes: {
    src: { control: { disable: true } },
    srcSet: { control: { disable: true } },
    target: { control: { disable: true } },
    href: { control: { disable: true } },
  },
};

export const sizes = [
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'auto',
] as const;
