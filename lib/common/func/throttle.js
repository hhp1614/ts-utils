"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
var type_1 = require("../type");
/**
 * 函数节流
 * @description 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 `wait` 毫秒调用一次该函数
 * @description 对于想控制一些触发频率较高的事件有帮助
 * @description 默认情况下，`throttle` 将在调用的第一时间尽快执行这个 `func`（第一次和最后一次都执行 `func`）
 * @param func 需要节流处理的函数
 * @param wait 延迟执行的时间，单位毫秒
 * @param options 选项，默认 `{}`
 * @param options.leading 如果想禁用第一次首先执行的话，传递 `{ leading: false }`
 * @param options.trailing 如果想禁用最后一次执行的话，传递 `{ trailing: false }`
 */
function throttle(func, wait, options) {
    if (options === void 0) { options = {}; }
    if (!type_1.isFunction(func)) {
        throw new TypeError('`func` 必须是函数');
    }
    if (!type_1.isNumber(wait)) {
        throw new TypeError('`wait` 必须是数字');
    }
    if (!type_1.isPlainObject(options)) {
        throw new TypeError('`options` 必须是普通对象');
    }
    var timeout;
    var previous = 0;
    var throttled = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = Date.now();
        // leading：false 表示禁用第一次执行
        if (!previous && options.leading === false)
            previous = now;
        // 下次触发 func 剩余的时间
        var remaining = wait - (now - previous);
        // 如果没有剩余时间了或者改了系统时间
        if (remaining <= 0 || now < previous) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(this, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(function () {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                func.apply(_this, args);
            }, remaining);
        }
    };
    /**
     * 取消节流
     */
    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    };
    return throttled;
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map