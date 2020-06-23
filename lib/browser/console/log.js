"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var level = {
    info: '[info]',
    error: '[error]',
    success: '[success]',
    fail: '[fail]',
    debug: '[debug]' // 调试
};
/**
 * 日志打印类
 */
var Log = /** @class */ (function () {
    function Log() {
    }
    /**
     * 打印信息
     * @param args 任意值
     */
    Log.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.warn.apply(console, __spreadArrays([Log.prefix + level.info], args));
    };
    /**
     * 打印报错信息
     * @param args 任意值
     */
    Log.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.error.apply(console, __spreadArrays([Log.prefix + level.error], args));
    };
    /**
     * 打印成功信息
     * @param args 任意值
     */
    Log.success = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.warn.apply(console, __spreadArrays([Log.prefix + level.success], args));
    };
    /**
     * 打印失败信息
     * @param args 任意值
     */
    Log.fail = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.error.apply(console, __spreadArrays([Log.prefix + level.fail], args));
    };
    /**
     * 打印 debug 信息
     * @param args 任意值
     */
    Log.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.warn.apply(console, __spreadArrays([Log.prefix + level.debug], args));
    };
    /**
     * 前缀
     */
    Log.prefix = '';
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=log.js.map