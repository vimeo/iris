import { ReactNode } from 'react';

export interface MiniRadioProps {
  label: string | ReactNode;
  id: string;
  value: string;
}

export interface RadioSetProps {
  disabled?: boolean;
  id: string;
  name: string;
  radios: MiniRadioProps[];
}
