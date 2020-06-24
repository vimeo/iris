import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('Annotation', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'Annotation')).toBe(true);
  });
});
