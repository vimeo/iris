import { AnchorHTMLAttributes } from 'react';

export interface AddNewItemCardProps {
  anchorProps: AnchorHTMLAttributes<HTMLAnchorElement>;
  text: string;
  fluid?: boolean;
}
