import { DRAWER_SIZE } from './Drawer.styles';
import { DrawerSize } from './Drawer.types';

const TRANSITION_DURATION = 0.2; // 200ms

export function getAnimation(size: DrawerSize, pad = 0) {
  return {
    initial: { x: -DRAWER_SIZE[size] },
    animate: { x: 0 + pad },
    exit: { x: -DRAWER_SIZE[size] },
    transition: { type: 'tween', duration: TRANSITION_DURATION },
  };
}
