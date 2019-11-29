import { isBoolean } from '../../src/type';

describe('type: isBoolean', () => {
  test('isBoolean(): true', () => {
    expect(isBoolean(false)).toBe(true);
  });
  test('isBoolean(): false', () => {
    expect(isBoolean(null)).toBe(false);
  });
});
