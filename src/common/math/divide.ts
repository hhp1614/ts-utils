import { isNumber } from '../type'

/**
 * 精确除法运算 `x / y`
 * @param x 被除数
 * @param y 除数
 */
export function divide(x: number, y: number) {
  if (!isNumber(x)) {
    throw new TypeError('`x` 必须是数字')
  }
  if (!isNumber(y)) {
    throw new TypeError('`y` 必须是数字')
  }

  const xStr = String(x)
  const yStr = String(y)
  const xStrFloat = xStr.split('.')[1] || ''
  const yStrFloat = yStr.split('.')[1] || ''
  const m = yStrFloat.length - xStrFloat.length
  const result = Number(xStr.replace('.', '')) / Number(yStr.replace('.', ''))
  return result * Math.pow(10, m)
}
