import { correctComponentStructure } from '../../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('DateRange', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'DateRange')).toBe(true);
  });
});
