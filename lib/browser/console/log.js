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
/**
 * 打印等级
 */
var level = {
    info: '[info]',
    error: '[error]',
    success: '[success]',
    fail: '[fail]',
    debug: '[debug]' // 调试
};
/**
 * 根据打印等级获取打印样式
 * @param level 打印等级
 */
var getStyle = function (level) {
    var color = {
        info: '#3190e8',
        error: '#E83131',
        success: '#4ce831',
        fail: '#e231e8',
        debug: '#e89631'
    };
    return "color: " + color[level] + "; font-size: 16px; font-family: JetBrains Mono Medium, sans-serif";
};
/**
 * 日志打印类
 */
var Log = /** @class */ (function () {
    function Log() {
    }
    /**
     * 设置前缀
     * @param prefix 前缀
     */
    Log.setPrefix = function (prefix) {
        this.prefix = prefix === '' ? '' : "[" + prefix + "]";
    };
    /**
     * 打印信息
     * @param args 任意值
     */
    Log.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.info.apply(console, __spreadArrays(['%c' + this.prefix + level.info, getStyle('info')], args));
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
        console.error.apply(console, __spreadArrays(['%c' + this.prefix + level.error, getStyle('error')], args));
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
        console.info.apply(console, __spreadArrays(['%c' + this.prefix + level.success, getStyle('success')], args));
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
        console.error.apply(console, __spreadArrays(['%c' + this.prefix + level.fail, getStyle('fail')], args));
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
        console.warn.apply(console, __spreadArrays(['%c' + this.prefix + level.debug, getStyle('debug')], args));
    };
    /**
     * 前缀
     */
    Log.prefix = '';
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=log.js.map