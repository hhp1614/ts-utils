import { divide } from '../../../src/common/math';

describe('common/math:divide', () => {
  test('divide()', () => {
    expect(divide(2, 2)).toBe(1);
    expect(divide(-2, -2)).toBe(1);
    expect(divide(-2, 2)).toBe(-1);
    expect(divide(2, -2)).toBe(-1);

    expect(divide(0.02, 0.2)).toBe(0.1);
    expect(divide(-0.02, -0.2)).toBe(0.1);
    expect(divide(-0.02, 0.2)).toBe(-0.1);
    expect(divide(0.02, -0.2)).toBe(-0.1);
  });

  test('divide():error', () => {
    // @ts-ignore
    const fn1 = () => divide('1', 2);
    expect(fn1).toThrow('`x` 必须是数字');

    // @ts-ignore
    const fn2 = () => divide(1, '2');
    expect(fn2).toThrow('`y` 必须是数字');
  });
});
