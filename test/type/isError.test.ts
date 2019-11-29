import { isError } from '../../src/type';

describe('type: isError', () => {
  test('isError(): true', () => {
    expect(isError(new Error)).toBe(true);
  });
  test('isError(): false', () => {
    expect(isError(Error)).toBe(false);
  });
});
