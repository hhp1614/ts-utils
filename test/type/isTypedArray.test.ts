import { isTypedArray } from '../../src/type';

describe('type: isTypedArray', () => {
  test('isTypedArray(): true', () => {
    expect(isTypedArray(new Uint8Array)).toBe(true);
  });
  test('isTypedArray(): false', () => {
    expect(isTypedArray([])).toBe(false);
  });
});
