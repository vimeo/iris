import { DRAWER_SIZE } from './Drawer.styles';
import { DrawerSize } from './Drawer.types';

export function getAnimation(
  placement: 'left' | 'right',
  size: DrawerSize,
  pad = 0
) {
  return {
    initial: { [`${placement}`]: -DRAWER_SIZE[size] },
    animate: { [`${placement}`]: 0 + pad },
    exit: { [`${placement}`]: -DRAWER_SIZE[size] },
  };
}
