import { correctComponentStructure } from '../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('Link', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'Link')).toBe(true);
  });
});
