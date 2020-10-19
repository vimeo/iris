import { IrisProps } from '../../../utils';

export type Props = IrisProps<
  {
    /**
     * [default = 'default']
     */
    format?: BadgeFormats;
    href?: string;
    target?: string;
    label?: string;
    /**
     * [default = 'sm']
     */
    size?: 'sm' | 'lg';
  },
  DOMElement
>;

export type DOMElement = HTMLSpanElement | HTMLAnchorElement;

export type BadgeFormats =
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
  | 'new'
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
