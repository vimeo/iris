import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('ColorSelect', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'ColorSelect')).toBe(true);
  });
});
