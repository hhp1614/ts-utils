import { isRegExp } from '../../src/type';

describe('type: isRegExp', () => {
  test('isRegExp(): true', () => {
    expect(isRegExp(/abc/)).toBe(true);
  });
  test('isRegExp(): false', () => {
    expect(isRegExp('/abc/')).toBe(false);
  });
});
