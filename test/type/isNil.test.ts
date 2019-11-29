import { isNil } from '../../src/type';

describe('type: isNil', () => {
  test('isNil(): true', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(void 0)).toBe(true);
  });
  test('isNil(): false', () => {
    expect(isNil(NaN)).toBe(false);
  });
});
