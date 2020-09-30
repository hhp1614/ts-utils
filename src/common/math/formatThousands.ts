import { isNumber, isString } from '../type';

/**
 * 数字千分位格式化
 * @description 支持负数和小数，小数部分不会参与格式化
 * @param num 数字或可以转换成数字的字符串
 */
export function formatThousands(num: number | string) {
  if (!isNumber(num) && !isString(num)) {
    throw new TypeError('`num` 必须是数字或字符串');
  }
  return String(num).replace(/(?<=(^|\s)-?\d+)(?=(\d{3})+\b)/g, ',');
}
