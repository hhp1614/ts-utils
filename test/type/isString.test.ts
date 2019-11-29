import { isString } from '../../src/type';

describe('type: isString', () => {
  test('isString(): true', () => {
    expect(isString('abc')).toBe(true);
    expect(isString(new String('123'))).toBe(true);
  });
  test('isString(): false', () => {
    expect(isString(1)).toBe(false);
  });
});
