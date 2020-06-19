import { debounce } from '../../../src/common/func';

describe('common/func:debounce', () => {
  test('debounce()', done => {
    let counter = 0;
    const add = () => counter++;
    const debouncedAdd = debounce(add, 32);
    debouncedAdd();
    debouncedAdd();
    setTimeout(debouncedAdd, 16);
    setTimeout(() => {
      expect(counter).toBe(1);
      done();
    }, 100);
  });

  test('debounce():immediate', done => {
    let counter = 0;
    const add = () => counter++;
    const debouncedAdd = debounce(add, 32, true);
    debouncedAdd();
    debouncedAdd();
    expect(counter).toBe(1);
    setTimeout(debouncedAdd, 16);
    setTimeout(() => {
      expect(counter).toBe(1);
      done();
    }, 100);
  });

  test('debounce():cancel', done => {
    let counter = 0;
    const add = () => counter++;
    const debouncedAdd = debounce(add, 32);
    debouncedAdd();
    debouncedAdd();
    expect(counter).toBe(0);
    setTimeout(() => debouncedAdd.cancel(), 16);
    setTimeout(() => {
      expect(counter).toBe(0);
      done();
    }, 100);
  });

  test('debounce():func error', () => {
    // @ts-ignore
    const fn = () => debounce(0, 0);
    expect(fn).toThrow('`func` 必须是函数');
  });

  test('debounce():wait error', () => {
    // @ts-ignore
    const fn = () => debounce(() => {}, 'a');
    expect(fn).toThrow('`wait` 必须是数字');
  });
});
