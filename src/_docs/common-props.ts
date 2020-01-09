import { ReactEventHandler, ReactNode } from 'react';

// PROP SORT
// one-line A-Z
// one-line trueleans A-Z
// two-line A-Z
// multi-line A-Z

type Formats =
  | 'basic'
  | 'soft'
  | 'alternative'
  | 'secondary'
  | 'primary';

type Statuses = 'positive' | 'negative' | 'neutral';

type Variants =
  | 'basic'
  | 'transparent'
  | 'outline'
  | 'dashed'
  | 'minimal'
  | 'hyperminimal'
  | 'minimalTransparent';

type Sizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Breakpoints = VideoResolutions[keyof VideoResolutions]['width'];

interface VideoResolutions {
  '8K': { width: 7680; height: 4320 };
  // ↑↑ tv
  '4K': { width: 3840; height: 2160 };
  // ↑↑ desktop
  '1080p': { width: 1920; height: 1080 };
  // ↑↑ desktop
  '720p': { width: 1280; height: 720 };
  // ↑↑ laptop
  '480p': { width: 720; height: 480 };
  // ↑↑ tablet
  '360p': { width: 480; height: 360 };
  // ↑↑ phone
}

// @media screen and (min-width)
const breakpoints = {
  phone: 0,
  // 360: // xs
  tablet: 480, // sm
  laptop: 720, // md
  // 1080 // lg
  desktop: 1280, // xl
  // 1440 // xxl
  '4K': 3840,
  '8K': 7680,
} as const;

interface Fluidity {
  fluid?: true | Breakpoints;
}

interface InteractionEvents {
  onClose:
    | ReactEventHandler // aka. finally
    | {
        reject: ReactEventHandler; // reject, aka. onDismiss
        accept: ReactEventHandler; // resolve, aka. onClose
        complete: ReactEventHandler; // finally
      };
  onOpen: ReactEventHandler;
  active?: boolean; // manually control toggleable components (usually portals)
  auto?: boolean; // trigger animation on mount
  content?: ReactNode; // children for attached component
  trigger?: 'click' | 'hover';
}

interface AnimationProps {
  auto?: boolean; // trigger animation on mount
}

type IrisDOMElement =
  | GenericElements
  | HeaderElements
  | InteractionElements
  | TextElements;

type GenericElements = 'div';
type InteractionElements = 'button' | 'a';
type TextElements = 'p' | 'span' | 'label';
type HeaderElements =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span';

interface Messages {
  error?: ReactNode;
  help?: ReactNode;
  pre?: ReactNode;
  success?: ReactNode;
  post?: ReactNode;
}

interface InputProps {
  label?: string;
  messages: Messages;
}

type Point = number;
type Coordinates = [Point, Point];
export type Attach = [Coordinates, Coordinates];
export type AttachAlias =
  | 'top'
  | 'topRight'
  | 'right'
  | 'bottomRight'
  | 'bottom'
  | 'bottomLeft'
  | 'left'
  | 'topLeft';
