'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.timeFormat = void 0;
var type_1 = require('../type');
/**
 * 时间格式化
 * @param time 时间对象、时间戳、可转换为时间对象字符串
 * @param format 格式，默认：`YYYY-MM-DD hh:mm:ss`
 */
function timeFormat(time, format) {
  if (time === void 0) {
    time = new Date();
  }
  if (format === void 0) {
    format = 'YYYY-MM-DD hh:mm:ss';
  }
  var D = new Date(time);
  if (D.toDateString() === 'Invalid Date') {
    throw new Error('`time` 无法转化为有效 Date 对象');
  }
  if (!type_1.isString(format)) {
    throw new TypeError('`format` 必须是字符串');
  }
  var t = {
    year: String(D.getFullYear()),
    month: String(D.getMonth() + 1),
    date: String(D.getDate()),
    hour: String(D.getHours()),
    minutes: String(D.getMinutes()),
    seconds: String(D.getSeconds()),
    milliseconds: String(D.getMilliseconds())
  };
  return format.replace(/(YY(YY)?|MM?|DD?|hh?|mm?|ss?|SS?)/g, function (str) {
    switch (str) {
      case 'YYYY':
        return t.year;
      case 'YY':
        return t.year.substr(-2);
      case 'MM':
        return t.month.padStart(2, '0');
      case 'M':
        return t.month;
      case 'DD':
        return t.date.padStart(2, '0');
      case 'D':
        return t.date;
      case 'hh':
        return t.hour.padStart(2, '0');
      case 'h':
        return t.hour;
      case 'mm':
        return t.minutes.padStart(2, '0');
      case 'm':
        return t.minutes;
      case 'ss':
        return t.seconds.padStart(2, '0');
      case 's':
        return t.seconds;
      case 'SS':
        return t.milliseconds.padStart(3, '0');
      case 'S':
        return t.milliseconds;
    }
    return str;
  });
}
exports.timeFormat = timeFormat;
//# sourceMappingURL=timeFormat.js.map
