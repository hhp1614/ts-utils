import { multiply } from '../../../src/common/math';

describe('common/math:multiply', () => {
  test('multiply()', () => {
    expect(multiply(1, 2)).toBe(2);
    expect(multiply(-1, -2)).toBe(2);
    expect(multiply(-1, 2)).toBe(-2);
    expect(multiply(1, -2)).toBe(-2);

    expect(multiply(0.1, 0.2)).toBe(0.02);
    expect(multiply(-0.1, -0.2)).toBe(0.02);
    expect(multiply(-0.1, 0.2)).toBe(-0.02);
    expect(multiply(0.1, -0.2)).toBe(-0.02);
  });

  test('multiply():error', () => {
    // @ts-ignore
    const fn1 = () => multiply('1', 2);
    expect(fn1).toThrow('`x` 必须是数字');

    // @ts-ignore
    const fn2 = () => multiply(1, '2');
    expect(fn2).toThrow('`y` 必须是数字');
  });
});
