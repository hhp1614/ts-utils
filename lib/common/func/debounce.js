'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.debounce = void 0;
var type_1 = require('../type');
/**
 * 函数防抖
 * @description 限制事件的频繁触发
 * @description 将需要延迟执行的函数(`func`)在函数(`debounce`)最后一次调用时的 `wait` 毫秒后执行
 * @param func 需要防抖处理的函数
 * @param wait 延迟执行的时间，单位毫秒
 * @param immediate 是否立即执行，默认 `false`
 */
function debounce(func, wait, immediate) {
  if (immediate === void 0) {
    immediate = false;
  }
  if (!type_1.isFunction(func)) {
    throw new TypeError('`func` 必须是函数');
  }
  if (!type_1.isNumber(wait)) {
    throw new TypeError('`wait` 必须是数字');
  }
  var timeout;
  var debounced = function () {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      // 立即执行函数，wait 毫秒内不再执行函数才可以重新触发执行 func
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) {
        func.apply(this, args);
      }
    } else {
      // 执行完函数 wait 毫秒后才可以重新触发执行 func
      timeout = setTimeout(function () {
        func.apply(_this, args);
        timeout = null;
      }, wait);
    }
  };
  /**
   * 取消防抖
   */
  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounced;
}
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map
