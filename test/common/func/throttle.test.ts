import { throttle } from '../../../src/common/func';

describe('common/func:throttle', () => {
  test('throttle()', done => {
    let counter = 0;
    const add = () => counter++;
    let throttledAdd = throttle(add, 32);
    throttledAdd();
    throttledAdd();
    expect(counter).toBe(1);
    setTimeout(() => {
      expect(counter).toBe(2);
      throttledAdd();
      expect(counter).toBe(3);
      done();
    }, 100);
  });

  test('throttle():options.leading', done => {
    let counter = 0;
    const add = () => counter++;
    let throttledAdd = throttle(add, 32, { leading: false });
    throttledAdd();
    throttledAdd();
    expect(counter).toBe(0);
    setTimeout(() => {
      expect(counter).toBe(1);
      throttledAdd();
      expect(counter).toBe(1);
      done();
    }, 100);
  });

  test('throttle():options.trailing', done => {
    let counter = 0;
    const add = () => counter++;
    let throttledAdd = throttle(add, 32, { trailing: false });
    throttledAdd();
    throttledAdd();
    expect(counter).toBe(1);
    setTimeout(() => {
      expect(counter).toBe(1);
      throttledAdd();
      expect(counter).toBe(2);
      done();
    }, 100);
  });

  test('debounce():func error', () => {
    // @ts-ignore
    const fn = () => throttle(0, 0);
    expect(fn).toThrow('`func` 必须是函数');
  });

  test('debounce():wait error', () => {
    // @ts-ignore
    const fn = () => throttle(() => {}, 'a');
    expect(fn).toThrow('`wait` 必须是数字');
  });

  test('debounce():options error', () => {
    // @ts-ignore
    const fn = () => throttle(() => {}, 0, 0);
    expect(fn).toThrow('`options` 必须是普通对象');
  });
});
