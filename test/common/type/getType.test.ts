import { getType } from '../../../src/common/type';

describe('common/type:getType', () => {
  test('getType(): string', () => {
    expect(getType('')).toBe('string');
    expect(getType('1')).toBe('string');
    expect(getType(String())).toBe('string');
    expect(getType(Object(''))).toBe('string');
  });

  test('getType(): number', () => {
    expect(getType(1)).toBe('number');
    expect(getType(Infinity)).toBe('number');
    expect(getType(NaN)).toBe('number');
    expect(getType(Number())).toBe('number');
    expect(getType(Object(1))).toBe('number');
  });

  test('getType(): boolean', () => {
    expect(getType(true)).toBe('boolean');
    expect(getType(false)).toBe('boolean');
    expect(getType(Boolean())).toBe('boolean');
    expect(getType(Object(true))).toBe('boolean');
  });

  test('getType(): null', () => {
    expect(getType(null)).toBe('null');
  });

  test('getType(): undefined', () => {
    expect(getType(undefined)).toBe('undefined');
  });

  test('getType(): array', () => {
    expect(getType([])).toBe('array');
    expect(getType(Array())).toBe('array');
    expect(getType(Object([]))).toBe('array');
  });

  test('getType(): object', () => {
    expect(getType({})).toBe('object');
    expect(getType(Object())).toBe('object');
    expect(getType(new (class {})())).toBe('object');
  });

  test('getType(): function', () => {
    expect(getType(() => {})).toBe('function');
    expect(getType(function() {})).toBe('function');
    expect(getType(class {})).toBe('function');
    expect(getType(new Function())).toBe('function');
    expect(getType(Function)).toBe('function');
  });

  test('getType(): regexp', () => {
    expect(getType(/ /)).toBe('regexp');
    expect(getType(RegExp(''))).toBe('regexp');
    expect(getType(new RegExp(''))).toBe('regexp');
    expect(getType(Object(/ /))).toBe('regexp');
  });

  test('getType(): date', () => {
    expect(getType(new Date())).toBe('date');
  });

  test('getType(): date', () => {
    const args = (function() {
      return arguments;
    })();
    expect(getType(args)).toBe('arguments');
  });

  test('getType(): math', () => {
    expect(getType(Math)).toBe('math');
  });

  test('getType(): symbol', () => {
    expect(getType(Symbol())).toBe('symbol');
    expect(getType(Object(Symbol()))).toBe('symbol');
  });

  test('getType(): bigint', () => {
    // @ts-ignore
    expect(getType(1n)).toBe('bigint');
    expect(getType(BigInt(1))).toBe('bigint');
    expect(getType(Object(BigInt(1)))).toBe('bigint');
  });
});
