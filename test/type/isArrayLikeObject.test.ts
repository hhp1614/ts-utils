import { isArrayLikeObject } from '../../src/type';

describe('type: isArrayLikeObject', () => {
  test('isArrayLikeObject(): true', () => {
    expect(isArrayLikeObject([1, 2, 3])).toBe(true);
    expect(isArrayLikeObject(document.body.children)).toBe(true);
  });
  test('isArrayLikeObject(): false', () => {
    expect(isArrayLikeObject('abc')).toBe(false);
    expect(isArrayLikeObject(Function)).toBe(false);
  });
});
