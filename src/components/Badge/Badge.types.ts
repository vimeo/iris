import { IrisProps } from '../../utils';

export type Props = IrisProps<
  {
    children?: string;
    /**
     * [default = 'default']
     */
    format?: Format;
    href?: string;
    target?: string;
    /**
     * @deprecated
     */
    label?: string;
    /**
     * [default = 'sm']
     */
    size?: 'sm' | 'lg' | 'xl';
  },
  DOMElement
>;

export type DOMElement = HTMLSpanElement | HTMLAnchorElement;

type Format =
  | 'alum'
  | 'beta'
  | 'business'
  | 'curation'
  | 'default'
  | 'explicit'
  | 'featured'
  | 'hd'
  | 'info'
  | 'live'
  | 'live-archive'
  | 'mature'
  | 'new'
  | 'not-yet-rated'
  | 'partner'
  | 'plus'
  | 'producer'
  | 'pro'
  | 'spatial'
  | 'sponsor'
  | 'staff'
  | 'support'
  | 'unrated'
  | 'upgrade'
  | 'vod';
