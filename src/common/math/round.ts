import { isNumber } from '../type';
import { divide } from './divide';
import { multiply } from './multiply';

/**
 * 四舍五入
 * @param num 数字
 * @param decimal 默认：`0`，保留小数位数
 */
export function round(num: number, decimal: number = 0) {
  if (!isNumber(num)) {
    throw new TypeError('`num` 必须是数字');
  }
  if (!Number.isInteger(decimal) || decimal < 0) {
    throw new TypeError('`decimal` 必须是0或正整数');
  }

  const n = Math.pow(10, decimal);
  // 负数需要先转换成正数，四舍五入完之后再转换成负数
  if (num < 0) {
    return (-divide(Math.round(multiply(-num, n)), n)).toFixed(decimal);
  }
  return divide(Math.round(multiply(num, n)), n).toFixed(decimal);
}
