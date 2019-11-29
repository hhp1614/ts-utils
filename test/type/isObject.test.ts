import { isObject } from '../../src/type';

describe('type: isObject', () => {
  test('isObject(): true', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(Function)).toBe(true);
  });
  test('isObject(): false', () => {
    expect(isObject(null)).toBe(false);
  });
});
