import { ClipboardEventHandler } from 'react';

export interface CopyFieldProps {
  children?: string;
  buttonFormat?: 'subtle' | 'neutral' | 'strong';
  format?: 'subtle' | 'neutral' | 'strong';
  id: string;
  label: string;
  onCopy?: ClipboardEventHandler;
  size?: 'md' | 'lg';
  stringToCopy: string;
  successMessage: string;
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
  tooltipString: string;
}
