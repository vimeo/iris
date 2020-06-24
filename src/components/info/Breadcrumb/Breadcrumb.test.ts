import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('Breadcrumb', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'Breadcrumb')).toBe(true);
  });
});
