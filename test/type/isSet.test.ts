import { isSet } from '../../src/type';

describe('type: isSet', () => {
  test('isSet(): true', () => {
    expect(isSet(new Set)).toBe(true);
  });
  test('isSet(): false', () => {
    expect(isSet(new WeakSet)).toBe(false);
  });
});
