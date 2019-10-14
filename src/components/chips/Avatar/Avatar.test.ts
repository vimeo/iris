import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('Avatar', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'Avatar')).toBe(true);
  });
});
