import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('Card', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'Card')).toBe(true);
  });
});
