import { IrisProps } from '../../utils';

export type Props = IrisProps<
  {
    children: any;
    allowMultiple?: boolean;
    defaultIndex?: number;
    format?: 'basic' | 'secondary';
  },
  HTMLDivElement
>;

export type AccordionItemProps = IrisProps<{
  children: React.ReactElement;
  title: string;
  format: 'basic' | 'secondary';
  index: number;
  allowMultiple: boolean;
  defaultActive: boolean;
  setActiveIndex: ({ index }) => void;
  itemActive: boolean;
  subcopy?: string;
  icon?: string;
  hasError?: boolean;
  disabled?: boolean;
}>;
