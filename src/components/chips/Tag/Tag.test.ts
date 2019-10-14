import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('Tag', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'Tag')).toBe(true);
  });
});
