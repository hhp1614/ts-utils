import { isPlainObject } from '../../src/type';

describe('type: isPlainObject', () => {
  test('isPlainObject(): true', () => {
    expect(isPlainObject({ 'x': 0, 'y': 0 })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });
  test('isPlainObject(): false', () => {
    class Foo {
      public a: number;

      constructor() {
        this.a = 1;
      }
    }

    expect(isPlainObject(new Foo())).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
  });
});
