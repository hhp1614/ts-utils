import { add } from '../../../src/common/math';

describe('common/math:add', () => {
  test('add()', () => {
    expect(add(0.1, 0.2)).toBe(0.3);
    expect(add(1, 2)).toBe(3);

    expect(add(-0.1, -0.2)).toBe(-0.3);
    expect(add(-1, -2)).toBe(-3);

    expect(add(0.1, -0.3)).toBe(-0.2);
    expect(add(1, -3)).toBe(-2);

    expect(add(0.1, 1)).toBe(1.1);
    expect(add(-0.1, -1)).toBe(-1.1);
    expect(add(-0.1, 1)).toBe(0.9);
    expect(add(0.1, -1)).toBe(-0.9);

    expect(add(1, Infinity)).toBe(Infinity);
    expect(add(1, -Infinity)).toBe(-Infinity);
    expect(add(1, NaN)).toBe(NaN);
  });

  test('add():error', () => {
    // @ts-ignore
    const fn1 = () => add('1', 2);
    expect(fn1).toThrow('`x` 必须是数字');

    // @ts-ignore
    const fn2 = () => add(1, '2');
    expect(fn2).toThrow('`y` 必须是数字');
  });
});
