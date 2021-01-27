import { timeFormat } from '../../../src/common/time'

describe('common/time:timeFormat', () => {
  test('timeFormat():Date', () => {
    const src = new Date()
    const dst = new Date(timeFormat(src))
    expect(dst.getFullYear()).toBe(src.getFullYear())
    expect(dst.getMonth()).toBe(src.getMonth())
    expect(dst.getDate()).toBe(src.getDate())
    expect(dst.getHours()).toBe(src.getHours())
    expect(dst.getMinutes()).toBe(src.getMinutes())
    expect(dst.getSeconds()).toBe(src.getSeconds())
    expect(dst.getMilliseconds()).toBe(0)
  })

  test('timeFormat():number', () => {
    const time = 1592468007000
    const src = new Date(time)
    const dst = new Date(timeFormat(time))
    expect(dst.getTime()).toBe(src.getTime())
  })

  test('timeFormat():string', () => {
    const time = '2020-6-18 23:33:33'
    const src = new Date(time)
    const dst = new Date(timeFormat(time))
    expect(dst.getTime()).toBe(src.getTime())
  })

  test('timeFormat():format', () => {
    const timeStr = '2020-01-01 01:01:01'
    const timeNum = 1577811661000
    expect(timeFormat()).toMatch(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/)
    expect(timeFormat(new Date(timeStr))).toBe(timeStr)
    expect(timeFormat(timeNum)).toBe(timeStr)
    expect(timeFormat(timeNum, 'YY年M月D日 h时m分s秒 S毫秒')).toBe('20年1月1日 1时1分1秒 0毫秒')
    expect(timeFormat(timeNum + 100, 'YYYY年MM月DD日 hh时mm分ss秒 SS毫秒')).toBe('2020年01月01日 01时01分01秒 100毫秒')
    expect(timeFormat(timeNum + 10, 'YYYY年MM月DD日 hh时mm分ss秒 SS毫秒')).toBe('2020年01月01日 01时01分01秒 010毫秒')
    expect(timeFormat(timeNum + 1, 'YYYY年MM月DD日 hh时mm分ss秒 SS毫秒')).toBe('2020年01月01日 01时01分01秒 001毫秒')
    expect(timeFormat(timeNum + 100, 'YY年M月D日 h时m分s秒 S毫秒')).toBe('20年1月1日 1时1分1秒 100毫秒')
    expect(timeFormat(timeNum + 10, 'YY年M月D日 h时m分s秒 S毫秒')).toBe('20年1月1日 1时1分1秒 10毫秒')
    expect(timeFormat(timeNum + 1, 'YY年M月D日 h时m分s秒 S毫秒')).toBe('20年1月1日 1时1分1秒 1毫秒')
  })

  test('timeFormat():time error', () => {
    expect(() => timeFormat('')).toThrow('`time` 无法转化为有效 Date 对象')
  })

  test('timeFormat():format error', () => {
    // @ts-ignore
    expect(() => timeFormat(new Date(), 0)).toThrow('`format` 必须是字符串')
  })
})
