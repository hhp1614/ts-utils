import { isEmpty } from '../../src/type';

describe('type: isEmpty', () => {
  test('isEmpty(): true', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(true)).toBe(true);
  });
  test('isEmpty(): false', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });
});
