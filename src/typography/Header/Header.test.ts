import { correctComponentStructure } from '../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('Header', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'Header')).toBe(true);
  });
});
