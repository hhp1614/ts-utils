'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Local = void 0;
/**
 * 转换为大写
 * @param str 需要转换的字符串
 */
var upCase = function (str) {
  return str.toUpperCase();
};
/**
 * localStorage 操作类
 */
var Local = /** @class */ (function () {
  function Local() {}
  /**
   * 设置前缀
   * @param prefix 前缀
   */
  Local.setPrefix = function (prefix) {
    this.prefix = prefix === '' ? '' : prefix + '_';
  };
  /**
   * 获取 localStorage item
   * @param key item 的 key
   */
  Local.get = function (key) {
    try {
      return JSON.parse(localStorage.getItem(upCase(this.prefix + key)));
    } catch (_a) {
      return null;
    }
  };
  /**
   * 设置 localStorage item
   * @param key item 的 key
   * @param value 获取结果
   */
  Local.set = function (key, value) {
    try {
      localStorage.setItem(upCase(this.prefix + key), JSON.stringify(value));
      return true;
    } catch (_a) {
      return false;
    }
  };
  /**
   * 删除 localStorage item
   * @param key item 的 key
   */
  Local.remove = function (key) {
    try {
      localStorage.removeItem(upCase(this.prefix + key));
      return true;
    } catch (_a) {
      return false;
    }
  };
  /**
   * 清空 localStorage
   */
  Local.clear = function () {
    try {
      localStorage.clear();
      return true;
    } catch (_a) {
      return false;
    }
  };
  /**
   * 前缀
   */
  Local.prefix = '';
  return Local;
})();
exports.Local = Local;
//# sourceMappingURL=local.js.map
