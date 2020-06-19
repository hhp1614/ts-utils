import {
  isString,
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
  isNil,
  isSymbol,
  isBigInt,
  isObject,
  isObjectLike,
  isPlainObject,
  isEmptyObject,
  isArray,
  isArrayLike,
  isEmptyArray,
  isFunction,
  isRegExp
} from '../../../src/common/type';

const args = (function() {
  return arguments;
})();

describe('common/type:getType', () => {
  test('isString()', () => {
    expect(isString('')).toBeTruthy();
    expect(isString(Object(''))).toBeTruthy();

    expect(isString(args)).toBeFalsy();
    expect(isString([1, 2, 3])).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(isString(new Date())).toBeFalsy();
    expect(isString(new Error())).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
    expect(isString(() => {})).toBeFalsy();
    expect(isString({ '0': 1, length: 1 })).toBeFalsy();
    expect(isString(1)).toBeFalsy();
    expect(isString(/x/)).toBeFalsy();
    expect(isString(Symbol())).toBeFalsy();
  });

  test('isNumber()', () => {
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber(Object(0))).toBeTruthy();
    expect(isNumber(NaN)).toBeTruthy();

    expect(isNumber(args)).toBeFalsy();
    expect(isNumber([1, 2, 3])).toBeFalsy();
    expect(isNumber(true)).toBeFalsy();
    expect(isNumber(new Date())).toBeFalsy();
    expect(isNumber(new Error())).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
    expect(isNumber(() => {})).toBeFalsy();
    expect(isNumber({ a: 1 })).toBeFalsy();
    expect(isNumber(/x/)).toBeFalsy();
    expect(isNumber('a')).toBeFalsy();
    expect(isNumber(Symbol())).toBeFalsy();
  });

  test('isBoolean()', () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
    expect(isBoolean(Object(true))).toBeTruthy();
    expect(isBoolean(Object(false))).toBeTruthy();

    expect(isBoolean(args)).toBeFalsy();
    expect(isBoolean([1, 2, 3])).toBeFalsy();
    expect(isBoolean(new Date())).toBeFalsy();
    expect(isBoolean(new Error())).toBeFalsy();
    expect(isBoolean(undefined)).toBeFalsy();
    expect(isBoolean(() => {})).toBeFalsy();
    expect(isBoolean({ a: 1 })).toBeFalsy();
    expect(isBoolean(1)).toBeFalsy();
    expect(isBoolean(/x/)).toBeFalsy();
    expect(isBoolean('a')).toBeFalsy();
    expect(isBoolean(Symbol())).toBeFalsy();
  });

  test('isNull()', () => {
    expect(isNull(null)).toBeTruthy();

    expect(isNull(args)).toBeFalsy();
    expect(isNull([1, 2, 3])).toBeFalsy();
    expect(isNull(true)).toBeFalsy();
    expect(isNull(new Date())).toBeFalsy();
    expect(isNull(new Error())).toBeFalsy();
    expect(isNull(undefined)).toBeFalsy();
    expect(isNull(() => {})).toBeFalsy();
    expect(isNull({ a: 1 })).toBeFalsy();
    expect(isNull(1)).toBeFalsy();
    expect(isNull(/x/)).toBeFalsy();
    expect(isNull('a')).toBeFalsy();
    expect(isNull(Symbol())).toBeFalsy();
  });

  test('isUndefined()', () => {
    // @ts-ignore
    expect(isUndefined()).toBeTruthy();
    expect(isUndefined(undefined)).toBeTruthy();

    expect(isUndefined(args)).toBeFalsy();
    expect(isUndefined([1, 2, 3])).toBeFalsy();
    expect(isUndefined(true)).toBeFalsy();
    expect(isUndefined(new Date())).toBeFalsy();
    expect(isUndefined(new Error())).toBeFalsy();
    expect(isUndefined(() => {})).toBeFalsy();
    expect(isUndefined({ a: 1 })).toBeFalsy();
    expect(isUndefined(1)).toBeFalsy();
    expect(isUndefined(/x/)).toBeFalsy();
    expect(isUndefined('a')).toBeFalsy();
    expect(isUndefined(Symbol())).toBeFalsy();
  });

  test('isNil()', () => {
    expect(isNil(null)).toBeTruthy();
    // @ts-ignore
    expect(isNil()).toBeTruthy();
    expect(isNil(undefined)).toBeTruthy();

    expect(isNil(args)).toBeFalsy();
    expect(isNil([1, 2, 3])).toBeFalsy();
    expect(isNil(true)).toBeFalsy();
    expect(isNil(new Date())).toBeFalsy();
    expect(isNil(new Error())).toBeFalsy();
    expect(isNil(() => {})).toBeFalsy();
    expect(isNil({ a: 1 })).toBeFalsy();
    expect(isNil(1)).toBeFalsy();
    expect(isNil(/x/)).toBeFalsy();
    expect(isNil('a')).toBeFalsy();
    expect(isUndefined(Symbol())).toBeFalsy();
  });

  test('isSymbol()', () => {
    expect(isSymbol(Symbol())).toBeTruthy();
    expect(isSymbol(Object(Symbol()))).toBeTruthy();

    expect(isSymbol(args)).toBeFalsy();
    expect(isSymbol([1, 2, 3])).toBeFalsy();
    expect(isSymbol(true)).toBeFalsy();
    expect(isSymbol(new Date())).toBeFalsy();
    expect(isSymbol(new Error())).toBeFalsy();
    expect(isSymbol(undefined)).toBeFalsy();
    expect(isSymbol(() => {})).toBeFalsy();
    expect(isSymbol({ '0': 1, length: 1 })).toBeFalsy();
    expect(isSymbol(1)).toBeFalsy();
    expect(isSymbol(/x/)).toBeFalsy();
    expect(isSymbol('a')).toBeFalsy();
  });

  test('isBigInt()', () => {
    // @ts-ignore
    expect(isBigInt(1n)).toBeTruthy();
    expect(isBigInt(BigInt(1))).toBeTruthy();
    expect(isBigInt(Object(BigInt(1)))).toBeTruthy();

    expect(isBigInt(args)).toBeFalsy();
    expect(isBigInt([1, 2, 3])).toBeFalsy();
    expect(isBigInt(true)).toBeFalsy();
    expect(isBigInt(new Date())).toBeFalsy();
    expect(isBigInt(new Error())).toBeFalsy();
    expect(isBigInt(undefined)).toBeFalsy();
    expect(isBigInt(() => {})).toBeFalsy();
    expect(isBigInt({ '0': 1, length: 1 })).toBeFalsy();
    expect(isBigInt(1)).toBeFalsy();
    expect(isBigInt(/x/)).toBeFalsy();
    expect(isBigInt('a')).toBeFalsy();
  });

  test('isObject()', () => {
    expect(isObject(args)).toBeTruthy();
    expect(isObject([1, 2, 3])).toBeTruthy();
    expect(isObject(Object(false))).toBeTruthy();
    expect(isObject(new Date())).toBeTruthy();
    expect(isObject(new Error())).toBeTruthy();
    expect(isObject(() => {})).toBeTruthy();
    expect(isObject({ a: 1 })).toBeTruthy();
    expect(isObject(Object(0))).toBeTruthy();
    expect(isObject(/x/)).toBeTruthy();
    expect(isObject(Object('a'))).toBeTruthy();
    expect(isObject(Object(Symbol()))).toBeTruthy();
    expect(isObject(Object(BigInt(1)))).toBeTruthy();

    expect(isObject(true)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
    expect(isObject(1)).toBeFalsy();
    expect(isObject('a')).toBeFalsy();
    expect(isObject(Symbol(1))).toBeFalsy();
    expect(isObject(BigInt(1))).toBeFalsy();
  });

  test('isObjectLike()', () => {
    expect(isObjectLike(args)).toBeTruthy();
    expect(isObjectLike([1, 2, 3])).toBeTruthy();
    expect(isObjectLike(Object(false))).toBeTruthy();
    expect(isObjectLike(new Date())).toBeTruthy();
    expect(isObjectLike(new Error())).toBeTruthy();
    expect(isObjectLike({ a: 1 })).toBeTruthy();
    expect(isObjectLike(Object(0))).toBeTruthy();
    expect(isObjectLike(/x/)).toBeTruthy();
    expect(isObjectLike(Object('a'))).toBeTruthy();

    expect(isObjectLike(true)).toBeFalsy();
    expect(isObjectLike(undefined)).toBeFalsy();
    expect(isObjectLike(null)).toBeFalsy();
    expect(isObjectLike(1)).toBeFalsy();
    expect(isObjectLike('a')).toBeFalsy();
  });

  test('isPlainObject()', () => {
    expect(isPlainObject({})).toBeTruthy();
    expect(isPlainObject({ a: 1 })).toBeTruthy();
    expect(isPlainObject({ constructor: function() {} })).toBeTruthy();

    expect(isPlainObject([1, 2, 3])).toBeFalsy();
    expect(isPlainObject(new (class {})())).toBeFalsy();
    expect(isPlainObject(true)).toBeFalsy();
    expect(isPlainObject(undefined)).toBeFalsy();
    expect(isPlainObject(null)).toBeFalsy();
    expect(isPlainObject(1)).toBeFalsy();
    expect(isPlainObject('a')).toBeFalsy();
    expect(isPlainObject(args)).toBeFalsy();
    expect(isPlainObject(Error)).toBeFalsy();
    expect(isPlainObject(Math)).toBeFalsy();
    expect(isPlainObject(Symbol())).toBeFalsy();
    expect(isPlainObject(BigInt(1))).toBeFalsy();
  });

  test('isEmptyObject()', () => {
    expect(isEmptyObject({})).toBeTruthy();
    expect(isEmptyObject(Object.create(null))).toBeTruthy();

    expect(isEmptyObject(new (class {})())).toBeFalsy();
    expect(isEmptyObject(new Date())).toBeFalsy();
    expect(isEmptyObject({ constructor: function() {} })).toBeFalsy();
    expect(isEmptyObject({ a: 1 })).toBeFalsy();
    expect(isEmptyObject([1, 2, 3])).toBeFalsy();
    expect(isEmptyObject(true)).toBeFalsy();
    expect(isEmptyObject(new Error())).toBeFalsy();
    expect(isEmptyObject(undefined)).toBeFalsy();
    expect(isEmptyObject(() => {})).toBeFalsy();
    expect(isEmptyObject(1)).toBeFalsy();
    expect(isEmptyObject(/x/)).toBeFalsy();
    expect(isEmptyObject('a')).toBeFalsy();
    expect(isEmptyObject(Object(1))).toBeFalsy();
  });

  test('isArray()', () => {
    expect(isArray([])).toBeTruthy();

    expect(isArray(args)).toBeFalsy();
    expect(isArray(args)).toBeFalsy();
    expect(isArray(true)).toBeFalsy();
    expect(isArray(new Date())).toBeFalsy();
    expect(isArray(new Error())).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray(() => {})).toBeFalsy();
    expect(isArray({ '0': 1, length: 1 })).toBeFalsy();
    expect(isArray(1)).toBeFalsy();
    expect(isArray(/x/)).toBeFalsy();
    expect(isArray('a')).toBeFalsy();
    expect(isArray(Symbol())).toBeFalsy();
  });

  test('isArrayLike()', () => {
    expect(isArrayLike([])).toBeTruthy();
    expect(isArrayLike(args)).toBeTruthy();
    expect(isArrayLike('args')).toBeTruthy();
    expect(isArrayLike({ 0: '0', '1': '1', length: 2 })).toBeTruthy();

    expect(isArrayLike(true)).toBeFalsy();
    expect(isArrayLike(new Date())).toBeFalsy();
    expect(isArrayLike(new Error())).toBeFalsy();
    expect(isArrayLike(undefined)).toBeFalsy();
    expect(isArrayLike(async () => {})).toBeFalsy();
    expect(isArrayLike(Function('return function*(){}'))).toBeFalsy();
    expect(isArrayLike(() => {})).toBeFalsy();
    expect(isArrayLike({ a: 1 })).toBeFalsy();
    expect(isArrayLike(1)).toBeFalsy();
    expect(isArrayLike(/x/)).toBeFalsy();
    expect(isArrayLike(Symbol())).toBeFalsy();
  });

  test('isEmptyArray()', () => {
    expect(isEmptyArray([])).toBeTruthy();

    expect(isEmptyArray([0])).toBeFalsy();
    expect(isEmptyArray(Array(1))).toBeFalsy();
    expect(isEmptyArray(args)).toBeFalsy();
    expect(isEmptyArray(true)).toBeFalsy();
    expect(isEmptyArray(new Date())).toBeFalsy();
    expect(isEmptyArray(new Error())).toBeFalsy();
    expect(isEmptyArray(undefined)).toBeFalsy();
    expect(isEmptyArray(async () => {})).toBeFalsy();
    expect(isEmptyArray(Function('return function*(){}'))).toBeFalsy();
    expect(isEmptyArray(() => {})).toBeFalsy();
    expect(isEmptyArray({ a: 1 })).toBeFalsy();
    expect(isEmptyArray(1)).toBeFalsy();
    expect(isEmptyArray(/x/)).toBeFalsy();
    expect(isEmptyArray(Symbol())).toBeFalsy();
  });

  test('isFunction()', () => {
    expect(isFunction(function() {})).toBeTruthy();
    expect(isFunction(() => {})).toBeTruthy();
    expect(isFunction(class {})).toBeTruthy();
    expect(isFunction(async () => {})).toBeTruthy();
    expect(isFunction(Function('return function*(){}'))).toBeTruthy();
    expect(isFunction(Proxy)).toBeTruthy();

    expect(isFunction(args)).toBeFalsy();
    expect(isFunction([1, 2, 3])).toBeFalsy();
    expect(isFunction(true)).toBeFalsy();
    expect(isFunction(new Date())).toBeFalsy();
    expect(isFunction(new Error())).toBeFalsy();
    expect(isFunction({ a: 1 })).toBeFalsy();
    expect(isFunction(1)).toBeFalsy();
    expect(isFunction(/x/)).toBeFalsy();
    expect(isFunction('a')).toBeFalsy();
    expect(isFunction(Symbol())).toBeFalsy();
  });

  test('isRegExp()', () => {
    expect(isRegExp(/x/)).toBeTruthy();
    expect(isRegExp(RegExp('x'))).toBeTruthy();

    expect(isRegExp(args)).toBeFalsy();
    expect(isRegExp([1, 2, 3])).toBeFalsy();
    expect(isRegExp(true)).toBeFalsy();
    expect(isRegExp(new Date())).toBeFalsy();
    expect(isRegExp(new Error())).toBeFalsy();
    expect(isRegExp(undefined)).toBeFalsy();
    expect(isRegExp(() => {})).toBeFalsy();
    expect(isRegExp({ a: 1 })).toBeFalsy();
    expect(isRegExp(1)).toBeFalsy();
    expect(isRegExp('a')).toBeFalsy();
    expect(isRegExp(Symbol())).toBeFalsy();
  });
});
