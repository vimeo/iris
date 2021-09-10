export { centered, hidden, Focus, GlobalStyles } from './css';
export { generateUID } from './general/generateUID';
export { throttle } from './general/throttle';
export { clamp } from './general/clamp';
export { capitalize } from './general/capitalize';

// hooks
export { useDeprecate } from './hooks/useDeprecate';
export { useFlip } from './hooks/useFlip';
export { useForwardRef } from './hooks/useForwardRef';
export { useIrisError } from './hooks/useIrisError';
export { useIsomorphicEffect } from './hooks/useIsomorphicEffect';
export { useLayoutStyles } from './hooks/useLayoutStyles';
export { useLocalTheme } from './hooks/useLocalTheme';
export { useMeasure } from './hooks/useMeasure';
export { useOutsideClick } from './hooks/useOutsideClick';
export { usePortal } from './hooks/usePortal';
export { usePortal_DEPRECATED, validate, ANCHOR_POINTS, Attach, AttachAlias, SimpleAnimation } from './hooks/usePortal_DEPRECATED';
export { useStateTransmorphic } from './hooks/useStateTransmorphic';
export { useStyleVars } from './hooks/useStyleVars';

// events
export { useClose, onClose } from './events/onClose';
export { arrowRight, arrowLeft, enter, esc, spacebar, tab } from './events/KeyCodes';
export { stopPrevent } from './events/stopPrevent';

// HOCs
export { withIris } from './HOCs/withIris';
export { IrisProps, IrisInputProps, Messages, MinorComponent } from './HOCs/IrisProps';
export { CSSProps, ExtractProps, Override, IrisElement } from './HOCs/types';

// DOM
export { createPortalOutlet } from './DOM/createPortalOutlet';
export { geometry } from './DOM/geometry';
export { getComputedStyles } from './DOM/getComputedStyles';
export { removeElementByID } from './DOM/removeElementByID';
export { SSR } from './DOM/SSR';
