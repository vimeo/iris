import { Attach } from './usePortal_DEPRECATED.types';

export function coordinates(attach, anchorToWindow): Attach {
  if (typeof attach === 'string' && !anchorToWindow) {
    switch (attach) {
      case 'top':
        return [
          [0, 50],
          [100, 50],
        ];
      case 'topRight':
        return [
          [0, 100],
          [100, 0],
        ];
      case 'right':
        return [
          [50, 100],
          [50, 0],
        ];
      case 'bottomRight':
        return [
          [100, 100],
          [0, 0],
        ];
      case 'bottom':
        return [
          [100, 50],
          [0, 50],
        ];
      case 'bottomLeft':
        return [
          [100, 0],
          [0, 100],
        ];
      case 'left':
        return [
          [50, 0],
          [50, 100],
        ];
      case 'topLeft':
        return [
          [0, 0],
          [100, 100],
        ];
    }
  }

  if (typeof attach === 'string' && anchorToWindow) {
    switch (attach) {
      case 'top':
        return [
          [0, 50],
          [0, 50],
        ];
      case 'topRight':
        return [
          [0, 100],
          [100, 100],
        ];
      case 'right':
        return [
          [50, 100],
          [100, 100],
        ];
      case 'bottomRight':
        return [
          [100, 100],
          [100, 100],
        ];
      case 'bottom':
        return [
          [100, 50],
          [100, 50],
        ];
      case 'bottomLeft':
        return [
          [100, 0],
          [100, 0],
        ];
      case 'left':
        return [
          [50, 0],
          [100, 0],
        ];
      case 'topLeft':
        return [
          [0, 0],
          [0, 0],
        ];
    }
  }

  if (attach && invalidCoords(attach)) {
    console.error(
      `Invalid coordinates: ${attach}. Values must be 0 - 100.`
    );

    return attach.map(limitCoords);
  }

  return attach;
}

const invalidCoords = (attach) =>
  attach.flatMap((a) => a).some((a) => a < 0 || a > 100);

const limitCoords = (coords) =>
  coords.map((a) => Math.min(100, Math.max(0, a)));
