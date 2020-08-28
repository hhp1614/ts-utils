import { isNumber } from '../type'

/**
 * 精确加法运算 `x + y`
 * @description 如果要做减法，只需第二个参数即被减数传负值即可
 * @param x 加数
 * @param y 加数
 */
export function add(x: number, y: number) {
  if (!isNumber(x)) {
    throw new TypeError('`x` 必须是数字')
  }
  if (!isNumber(y)) {
    throw new TypeError('`y` 必须是数字')
  }

  // 记录两个加数中最长的小数位长度
  let m = 0
  let xStr = String(x)
  let yStr = String(y)
  const xStrFloat = xStr.split('.')[1] || ''
  const yStrFloat = yStr.split('.')[1] || ''
  if (xStrFloat || yStrFloat) {
    const xLen = xStrFloat.length
    const yLen = yStrFloat.length
    m = xLen > yLen ? xLen : yLen
  }
  // 补零
  xStr = x.toFixed(m).replace('.', '')
  yStr = y.toFixed(m).replace('.', '')
  const result = Number(xStr) + Number(yStr)
  return result / Math.pow(10, m)
}
