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
    expect(isString('')).toBe(true);
    expect(isString(Object(''))).toBe(true);

    expect(isString(args)).toBe(false);
    expect(isString([1, 2, 3])).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(new Date())).toBe(false);
    expect(isString(new Error())).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(() => {})).toBe(false);
    expect(isString({ '0': 1, length: 1 })).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString(/x/)).toBe(false);
    expect(isString(Symbol())).toBe(false);
  });

  test('isNumber()', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(Object(0))).toBe(true);
    expect(isNumber(NaN)).toBe(true);

    expect(isNumber(args)).toBe(false);
    expect(isNumber([1, 2, 3])).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(new Date())).toBe(false);
    expect(isNumber(new Error())).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(() => {})).toBe(false);
    expect(isNumber({ a: 1 })).toBe(false);
    expect(isNumber(/x/)).toBe(false);
    expect(isNumber('a')).toBe(false);
    expect(isNumber(Symbol())).toBe(false);
  });

  test('isBoolean()', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(Object(true))).toBe(true);
    expect(isBoolean(Object(false))).toBe(true);

    expect(isBoolean(args)).toBe(false);
    expect(isBoolean([1, 2, 3])).toBe(false);
    expect(isBoolean(new Date())).toBe(false);
    expect(isBoolean(new Error())).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(() => {})).toBe(false);
    expect(isBoolean({ a: 1 })).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(/x/)).toBe(false);
    expect(isBoolean('a')).toBe(false);
    expect(isBoolean(Symbol())).toBe(false);
  });

  test('isNull()', () => {
    expect(isNull(null)).toBe(true);

    expect(isNull(args)).toBe(false);
    expect(isNull([1, 2, 3])).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(new Date())).toBe(false);
    expect(isNull(new Error())).toBe(false);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(() => {})).toBe(false);
    expect(isNull({ a: 1 })).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(/x/)).toBe(false);
    expect(isNull('a')).toBe(false);
    expect(isNull(Symbol())).toBe(false);
  });

  test('isUndefined()', () => {
    // @ts-ignore
    expect(isUndefined()).toBe(true);
    expect(isUndefined(undefined)).toBe(true);

    expect(isUndefined(args)).toBe(false);
    expect(isUndefined([1, 2, 3])).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(new Date())).toBe(false);
    expect(isUndefined(new Error())).toBe(false);
    expect(isUndefined(() => {})).toBe(false);
    expect(isUndefined({ a: 1 })).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(/x/)).toBe(false);
    expect(isUndefined('a')).toBe(false);
    expect(isUndefined(Symbol())).toBe(false);
  });

  test('isNil()', () => {
    expect(isNil(null)).toBe(true);
    // @ts-ignore
    expect(isNil()).toBe(true);
    expect(isNil(undefined)).toBe(true);

    expect(isNil(args)).toBe(false);
    expect(isNil([1, 2, 3])).toBe(false);
    expect(isNil(true)).toBe(false);
    expect(isNil(new Date())).toBe(false);
    expect(isNil(new Error())).toBe(false);
    expect(isNil(() => {})).toBe(false);
    expect(isNil({ a: 1 })).toBe(false);
    expect(isNil(1)).toBe(false);
    expect(isNil(/x/)).toBe(false);
    expect(isNil('a')).toBe(false);
    expect(isUndefined(Symbol())).toBe(false);
  });

  test('isSymbol()', () => {
    expect(isSymbol(Symbol())).toBe(true);
    expect(isSymbol(Object(Symbol()))).toBe(true);

    expect(isSymbol(args)).toBe(false);
    expect(isSymbol([1, 2, 3])).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(new Date())).toBe(false);
    expect(isSymbol(new Error())).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol(() => {})).toBe(false);
    expect(isSymbol({ '0': 1, length: 1 })).toBe(false);
    expect(isSymbol(1)).toBe(false);
    expect(isSymbol(/x/)).toBe(false);
    expect(isSymbol('a')).toBe(false);
  });

  test('isBigInt()', () => {
    // @ts-ignore
    expect(isBigInt(1n)).toBe(true);
    expect(isBigInt(BigInt(1))).toBe(true);
    expect(isBigInt(Object(BigInt(1)))).toBe(true);

    expect(isBigInt(args)).toBe(false);
    expect(isBigInt([1, 2, 3])).toBe(false);
    expect(isBigInt(true)).toBe(false);
    expect(isBigInt(new Date())).toBe(false);
    expect(isBigInt(new Error())).toBe(false);
    expect(isBigInt(undefined)).toBe(false);
    expect(isBigInt(() => {})).toBe(false);
    expect(isBigInt({ '0': 1, length: 1 })).toBe(false);
    expect(isBigInt(1)).toBe(false);
    expect(isBigInt(/x/)).toBe(false);
    expect(isBigInt('a')).toBe(false);
  });

  test('isObject()', () => {
    expect(isObject(args)).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(Object(false))).toBe(true);
    expect(isObject(new Date())).toBe(true);
    expect(isObject(new Error())).toBe(true);
    expect(isObject(() => {})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(Object(0))).toBe(true);
    expect(isObject(/x/)).toBe(true);
    expect(isObject(Object('a'))).toBe(true);
    expect(isObject(Object(Symbol()))).toBe(true);
    expect(isObject(Object(BigInt(1)))).toBe(true);

    expect(isObject(true)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject('a')).toBe(false);
    expect(isObject(Symbol(1))).toBe(false);
    expect(isObject(BigInt(1))).toBe(false);
  });

  test('isObjectLike()', () => {
    expect(isObjectLike(args)).toBe(true);
    expect(isObjectLike([1, 2, 3])).toBe(true);
    expect(isObjectLike(Object(false))).toBe(true);
    expect(isObjectLike(new Date())).toBe(true);
    expect(isObjectLike(new Error())).toBe(true);
    expect(isObjectLike({ a: 1 })).toBe(true);
    expect(isObjectLike(Object(0))).toBe(true);
    expect(isObjectLike(/x/)).toBe(true);
    expect(isObjectLike(Object('a'))).toBe(true);

    expect(isObjectLike(true)).toBe(false);
    expect(isObjectLike(undefined)).toBe(false);
    expect(isObjectLike(null)).toBe(false);
    expect(isObjectLike(1)).toBe(false);
    expect(isObjectLike('a')).toBe(false);
  });

  test('isPlainObject()', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject({ constructor: function() {} })).toBe(true);

    expect(isPlainObject([1, 2, 3])).toBe(false);
    expect(isPlainObject(new (class {})())).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject('a')).toBe(false);
    expect(isPlainObject(args)).toBe(false);
    expect(isPlainObject(Error)).toBe(false);
    expect(isPlainObject(Math)).toBe(false);
    expect(isPlainObject(Symbol())).toBe(false);
    expect(isPlainObject(BigInt(1))).toBe(false);
  });

  test('isEmptyObject()', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject(Object.create(null))).toBe(true);

    expect(isEmptyObject(new (class {})())).toBe(false);
    expect(isEmptyObject(new Date())).toBe(false);
    expect(isEmptyObject({ constructor: function() {} })).toBe(false);
    expect(isEmptyObject({ a: 1 })).toBe(false);
    expect(isEmptyObject([1, 2, 3])).toBe(false);
    expect(isEmptyObject(true)).toBe(false);
    expect(isEmptyObject(new Error())).toBe(false);
    expect(isEmptyObject(undefined)).toBe(false);
    expect(isEmptyObject(() => {})).toBe(false);
    expect(isEmptyObject(1)).toBe(false);
    expect(isEmptyObject(/x/)).toBe(false);
    expect(isEmptyObject('a')).toBe(false);
    expect(isEmptyObject(Object(1))).toBe(false);
  });

  test('isArray()', () => {
    expect(isArray([])).toBe(true);

    expect(isArray(args)).toBe(false);
    expect(isArray(args)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(new Date())).toBe(false);
    expect(isArray(new Error())).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(() => {})).toBe(false);
    expect(isArray({ '0': 1, length: 1 })).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray(/x/)).toBe(false);
    expect(isArray('a')).toBe(false);
    expect(isArray(Symbol())).toBe(false);
  });

  test('isArrayLike()', () => {
    expect(isArrayLike([])).toBe(true);
    expect(isArrayLike(args)).toBe(true);
    expect(isArrayLike('args')).toBe(true);
    expect(isArrayLike({ 0: '0', '1': '1', length: 2 })).toBe(true);

    expect(isArrayLike(true)).toBe(false);
    expect(isArrayLike(new Date())).toBe(false);
    expect(isArrayLike(new Error())).toBe(false);
    expect(isArrayLike(undefined)).toBe(false);
    expect(isArrayLike(async () => {})).toBe(false);
    expect(isArrayLike(Function('return function*(){}'))).toBe(false);
    expect(isArrayLike(() => {})).toBe(false);
    expect(isArrayLike({ a: 1 })).toBe(false);
    expect(isArrayLike(1)).toBe(false);
    expect(isArrayLike(/x/)).toBe(false);
    expect(isArrayLike(Symbol())).toBe(false);
  });

  test('isEmptyArray()', () => {
    expect(isEmptyArray([])).toBe(true);

    expect(isEmptyArray([0])).toBe(false);
    expect(isEmptyArray(Array(1))).toBe(false);
    expect(isEmptyArray(args)).toBe(false);
    expect(isEmptyArray(true)).toBe(false);
    expect(isEmptyArray(new Date())).toBe(false);
    expect(isEmptyArray(new Error())).toBe(false);
    expect(isEmptyArray(undefined)).toBe(false);
    expect(isEmptyArray(async () => {})).toBe(false);
    expect(isEmptyArray(Function('return function*(){}'))).toBe(false);
    expect(isEmptyArray(() => {})).toBe(false);
    expect(isEmptyArray({ a: 1 })).toBe(false);
    expect(isEmptyArray(1)).toBe(false);
    expect(isEmptyArray(/x/)).toBe(false);
    expect(isEmptyArray(Symbol())).toBe(false);
  });

  test('isFunction()', () => {
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(class {})).toBe(true);
    expect(isFunction(async () => {})).toBe(true);
    expect(isFunction(Function('return function*(){}'))).toBe(true);
    expect(isFunction(Proxy)).toBe(true);

    expect(isFunction(args)).toBe(false);
    expect(isFunction([1, 2, 3])).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(new Date())).toBe(false);
    expect(isFunction(new Error())).toBe(false);
    expect(isFunction({ a: 1 })).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(/x/)).toBe(false);
    expect(isFunction('a')).toBe(false);
    expect(isFunction(Symbol())).toBe(false);
  });

  test('isRegExp()', () => {
    expect(isRegExp(/x/)).toBe(true);
    expect(isRegExp(RegExp('x'))).toBe(true);

    expect(isRegExp(args)).toBe(false);
    expect(isRegExp([1, 2, 3])).toBe(false);
    expect(isRegExp(true)).toBe(false);
    expect(isRegExp(new Date())).toBe(false);
    expect(isRegExp(new Error())).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp(() => {})).toBe(false);
    expect(isRegExp({ a: 1 })).toBe(false);
    expect(isRegExp(1)).toBe(false);
    expect(isRegExp('a')).toBe(false);
    expect(isRegExp(Symbol())).toBe(false);
  });
});
