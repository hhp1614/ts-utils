import { isUndefined } from '../../src/type';

describe('type: isUndefined', () => {
  test('isUndefined(): true', () => {
    expect(isUndefined(void 0)).toBe(true);
  });
  test('isUndefined(): false', () => {
    expect(isUndefined(null)).toBe(false);
  });
});
