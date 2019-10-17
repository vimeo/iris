import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('Input', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'Input')).toBe(true);
  });
});
