import { isDate } from '../../src/type';

describe('type: isDate', () => {
  test('isDate(): true', () => {
    expect(isDate(new Date)).toBe(true);
  });
  test('isDate(): false', () => {
    expect(isDate('Wed Nov 27 2019')).toBe(false);
  });
});
