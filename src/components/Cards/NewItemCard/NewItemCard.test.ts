import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('NewItemCard', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'NewItemCard')).toBe(true);
  });
});
