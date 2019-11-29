import { isObjectLike } from '../../src/type';

describe('type: isObjectLike', () => {
  test('isObjectLike(): true', () => {
    expect(isObjectLike({})).toBe(true);
    expect(isObjectLike([1, 2, 3])).toBe(true);
  });
  test('isObjectLike(): false', () => {
    expect(isObjectLike(Function)).toBe(false);
    expect(isObjectLike(null)).toBe(false);
  });
});
