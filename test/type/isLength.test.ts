import { isLength } from '../../src/type';

describe('type: isLength', () => {
  test('isLength(): true', () => {
    expect(isLength(3)).toBe(true);
  });
  test('isLength(): false', () => {
    expect(isLength(Number.MIN_VALUE)).toBe(false);
    expect(isLength(Infinity)).toBe(false);
    expect(isLength('3')).toBe(false);
  });
});
