import { isWeakSet } from '../../src/type';

describe('type: isWeakSet', () => {
  test('isWeakSet(): true', () => {
    expect(isWeakSet(new WeakSet)).toBe(true);
  });
  test('isWeakSet(): false', () => {
    expect(isWeakSet(new Set)).toBe(false);
  });
});
