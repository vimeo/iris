import { DRAWER_SIZE } from './Drawer.styles';
import { DrawerSize } from './Drawer.types';

const TRANSITION_DURATION = 0.2; // 200ms

export function getAnimation(
  size: DrawerSize,
  placement: 'left' | 'right'
) {
  const left = placement === 'left';
  return {
    initial: { x: left ? -DRAWER_SIZE[size] : DRAWER_SIZE[size] },
    animate: { x: 0 },
    exit: { x: left ? -DRAWER_SIZE[size] : DRAWER_SIZE[size] },
    transition: { type: 'tween', duration: TRANSITION_DURATION },
  };
}
