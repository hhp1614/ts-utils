import { isMap } from '../../src/type';

describe('type: isMap', () => {
  test('isMap(): true', () => {
    expect(isMap(new Map)).toBe(true);
  });
  test('isMap(): false', () => {
    expect(isMap(new WeakMap)).toBe(false);
  });
});
