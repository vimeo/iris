import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('CounterIcon', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'CounterIcon')).toBe(true);
  });
});
