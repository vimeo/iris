import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('FileUpload', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'FileUpload')).toBe(true);
  });
});
