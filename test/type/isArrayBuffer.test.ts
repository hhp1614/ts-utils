import { isArrayBuffer } from '../../src/type';

describe('type: isArrayBuffer', () => {
  test('isArrayBuffer(): true', () => {
    expect(isArrayBuffer(new ArrayBuffer(2))).toBe(true);
  });
  test('isArrayBuffer(): false', () => {
    expect(isArrayBuffer(new Array(2))).toBe(false);
  });
});
