import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('Modal', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'Modal')).toBe(true);
  });
});
