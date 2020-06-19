import { each } from '../../../src/common/collection';

describe('common/collection:each', () => {
  test('each():any[]', () => {
    const src: any[] = [1, ['2', { 3: [true, { '4': Object(5) }] }]];
    const dst: any[] = [];
    each(src, (value, key) => (dst[key] = value));
    expect(dst).toEqual(src);
  });

  test('each():string', () => {
    const src: string = 'test';
    let dst: string = '';
    each(src, value => (dst += value));
    expect(dst).toEqual(src);
  });

  test('each():ArrayLike', () => {
    const src = { 0: 0, '1': '1', 2: [2], 3: { a: 3 }, length: 4 };
    let dst: { [k: string]: any } = {};
    each(src, (value, key) => (dst[key] = value));
    if (!dst.length) dst.length = src.length;
    expect(dst).toEqual(src);

    (function(a: any, b: any, c: any, d: any) {
      let i = 0;
      const args = arguments;
      each(arguments, (value, index) => {
        expect(value).toEqual(args[i]);
        expect(index).toBe(i);
        i++;
      });
    })(0, '1', [2], { a: 3 });
  });

  test('each():Object', () => {
    const src = { 0: 0, '1': '1', 2: [2], 3: { a: 3 } };
    let dst: { [k: string]: any } = {};
    each(src, (value, key) => (dst[key] = value));
    expect(dst).toEqual(src);
  });

  test('each():collection error', () => {
    // @ts-ignore
    const fn1 = () => each(null, () => {});
    expect(fn1).toThrow('`collection` 类型错误，无法遍历');
    // @ts-ignore
    const fn2 = () => each(undefined, () => {});
    expect(fn2).toThrow('`collection` 类型错误，无法遍历');
    // @ts-ignore
    const fn3 = () => each();
    expect(fn3).toThrow('`collection` 类型错误，无法遍历');
  });

  test('each():callback error', () => {
    // @ts-ignore
    const fn1 = () => each([]);
    expect(fn1).toThrow('`callback` 必须是函数');
    // @ts-ignore
    const fn2 = () => each([], 1);
    expect(fn2).toThrow('`callback` 必须是函数');
  });
});
