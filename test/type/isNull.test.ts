import { isNull } from '../../src/type';

describe('type: isNull', () => {
  test('isNull(): true', () => {
    expect(isNull(null)).toBe(true);
  });
  test('isNull(): false', () => {
    expect(isNull(void 0)).toBe(false);
  });
});
