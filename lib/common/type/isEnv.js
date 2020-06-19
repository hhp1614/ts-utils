"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNode = exports.isBrowser = void 0;
/**
 * 判断当前环境是否为浏览器
 * @param throwError 是否抛出异常
 * @param errorContent 抛出异常时的错误内容
 */
function isBrowser(throwError, errorContent) {
    if (throwError === void 0) { throwError = false; }
    if (errorContent === void 0) { errorContent = '当前环境不是浏览器环境'; }
    var result = typeof window != null && typeof window === 'object' && window.self === window;
    if (throwError && !result) {
        throw new Error(errorContent);
    }
    return result;
}
exports.isBrowser = isBrowser;
/**
 * 判断当前环境是否为 NodeJS
 * @param throwError 是否抛出异常
 * @param errorContent 抛出异常时的错误内容
 */
function isNode(throwError, errorContent) {
    if (throwError === void 0) { throwError = false; }
    if (errorContent === void 0) { errorContent = '当前环境不是 NodeJS 环境'; }
    var result = typeof window != null && typeof global === 'object' && global.global === global;
    if (throwError && !result) {
        throw new Error(errorContent);
    }
    return result;
}
exports.isNode = isNode;
//# sourceMappingURL=isEnv.js.map