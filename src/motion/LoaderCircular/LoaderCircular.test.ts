import { correctComponentStructure } from '../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('LoaderCircular', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'LoaderCircular')).toBe(true);
  });
});
