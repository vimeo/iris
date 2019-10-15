import { correctComponentStructure } from '../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('BigStat', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'BigStat')).toBe(true);
  });
});
