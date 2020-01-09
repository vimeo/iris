import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('PopOver', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'PopOver')).toBe(true);
  });
});
