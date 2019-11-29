import { isWeakMap } from '../../src/type';

describe('type: isWeakMap', () => {
  test('isWeakMap(): true', () => {
    expect(isWeakMap(new WeakMap)).toBe(true);
  });
  test('isWeakMap(): false', () => {
    expect(isWeakMap(new Map)).toBe(false);
  });
});
