import { isArrayLike } from '../../src/type';

describe('type: isArrayLike', () => {
  test('isArrayLike(): true', () => {
    expect(isArrayLike([1, 2, 3])).toBe(true);
    expect(isArrayLike(document.body.children)).toBe(true);
    expect(isArrayLike('abc')).toBe(true);
  });
  test('isArrayLike(): false', () => {
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike(Function)).toBe(false);
  });
});
