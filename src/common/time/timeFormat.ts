import { isString } from '../type'

type TimeObject = {
  // 年
  year: string
  // 月
  month: string
  // 日
  date: string
  // 时
  hour: string
  // 分
  minutes: string
  // 秒
  seconds: string
  // 毫秒
  milliseconds: string
}

/**
 * 时间格式化
 * @param time 时间对象、时间戳、可转换为时间对象字符串
 * @param format 格式，默认：`YYYY-MM-DD hh:mm:ss`
 */
export function timeFormat(time: Date | number | string = new Date(), format = 'YYYY-MM-DD hh:mm:ss') {
  const D = new Date(time)

  if (D.toDateString() === 'Invalid Date') {
    throw new Error('`time` 无法转化为有效 Date 对象')
  }
  if (!isString(format)) {
    throw new TypeError('`format` 必须是字符串')
  }

  const t: TimeObject = {
    year: String(D.getFullYear()),
    month: String(D.getMonth() + 1),
    date: String(D.getDate()),
    hour: String(D.getHours()),
    minutes: String(D.getMinutes()),
    seconds: String(D.getSeconds()),
    milliseconds: String(D.getMilliseconds())
  }

  return format.replace(/(YY(YY)?|MM?|DD?|hh?|mm?|ss?|SS?)/g, str => {
    switch (str) {
      case 'YYYY':
        return t.year
      case 'YY':
        return t.year.substr(-2)
      case 'MM':
        return t.month.padStart(2, '0')
      case 'M':
        return t.month
      case 'DD':
        return t.date.padStart(2, '0')
      case 'D':
        return t.date
      case 'hh':
        return t.hour.padStart(2, '0')
      case 'h':
        return t.hour
      case 'mm':
        return t.minutes.padStart(2, '0')
      case 'm':
        return t.minutes
      case 'ss':
        return t.seconds.padStart(2, '0')
      case 's':
        return t.seconds
      case 'SS':
        return t.milliseconds.padStart(3, '0')
      case 'S':
        return t.milliseconds
    }
    return str
  })
}
