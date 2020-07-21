"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
/**
 * 转换为大写
 * @param str 需要转换的字符串
 */
var upCase = function (str) { return str.toUpperCase(); };
/**
 * sessionStorage 操作类
 */
var Session = /** @class */ (function () {
    function Session() {
    }
    /**
     * 设置前缀
     * @param prefix 前缀
     */
    Session.setPrefix = function (prefix) {
        this.prefix = prefix === '' ? '' : prefix + "_";
    };
    /**
     * 获取 sessionStorage item
     * @param key item 的 key
     */
    Session.get = function (key) {
        try {
            return JSON.parse(sessionStorage.getItem(upCase(this.prefix + key)));
        }
        catch (_a) {
            return null;
        }
    };
    /**
     * 设置 sessionStorage item
     * @param key item 的 key
     * @param value 获取结果
     */
    Session.set = function (key, value) {
        try {
            sessionStorage.setItem(upCase(this.prefix + key), JSON.stringify(value));
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    /**
     * 删除 sessionStorage item
     * @param key item 的 key
     */
    Session.remove = function (key) {
        try {
            sessionStorage.removeItem(upCase(this.prefix + key));
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    /**
     * 清空 sessionStorage
     */
    Session.clear = function () {
        try {
            sessionStorage.clear();
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    /**
     * 前缀
     */
    Session.prefix = '';
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=session.js.map