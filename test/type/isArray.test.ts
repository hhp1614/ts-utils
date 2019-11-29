import { isArray } from '../../src/type';

describe('type: isArray', () => {
  test('isArray(): true', () => {
    expect(isArray([])).toBe(true);
  });
  test('isArray(): false', () => {
    expect(isArray({})).toBe(false);
  });
});
