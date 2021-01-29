import { isNumber } from '../type';

/**
 * 精确乘法运算 `x * y`
 * @param x 因数
 * @param y 因数
 */
export function multiply(x: number, y: number) {
  if (!isNumber(x)) {
    throw new TypeError('`x` 必须是数字');
  }
  if (!isNumber(y)) {
    throw new TypeError('`y` 必须是数字');
  }

  // 记录两个加数中最长的小数位长度
  let m = 0;
  const xStr = String(x);
  const yStr = String(y);
  const xStrFloat = xStr.split('.')[1];
  const yStrFloat = yStr.split('.')[1];
  if (xStrFloat) {
    m += xStrFloat.length;
  }
  if (yStrFloat) {
    m += yStrFloat.length;
  }
  const result = Number(xStr.replace('.', '')) * Number(yStr.replace('.', ''));
  return result / Math.pow(10, m);
}
