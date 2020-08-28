import { round } from '../../../src/common/math'

describe('common/math:round', () => {
  test('round()', () => {
    expect(round(1.4)).toBe('1')
    expect(round(-1.4)).toBe('-1')
    expect(round(1.5)).toBe('2')
    expect(round(-1.5)).toBe('-2')
    expect(round(1.115, 2)).toBe('1.12')
    expect(round(-1.115, 2)).toBe('-1.12')
    expect(round(1.114, 2)).toBe('1.11')
    expect(round(-1.114, 2)).toBe('-1.11')
    expect(round(1, 2)).toBe('1.00')
    expect(round(-1, 2)).toBe('-1.00')
  })

  test('round():error', () => {
    // @ts-ignore
    const fn1 = () => round('1')
    expect(fn1).toThrow('`num` 必须是数字')

    // @ts-ignore
    const fn2 = () => round(1, 0.1)
    expect(fn2).toThrow('`decimal` 必须是0或正整数')

    // @ts-ignore
    const fn3 = () => round(1, -1)
    expect(fn3).toThrow('`decimal` 必须是0或正整数')
  })
})
