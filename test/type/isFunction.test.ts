import { isFunction } from '../../src/type';

describe('type: isFunction', () => {
  test('isFunction(): true', () => {
    expect(isFunction(class Any {
    })).toBe(true);
    expect(isFunction(() => {
    })).toBe(true);
    expect(isFunction(async () => {
    })).toBe(true);
    expect(isFunction(function* Any() {
    })).toBe(true);
    expect(isFunction(Math.round)).toBe(true);
  });
  test('isFunction(): false', () => {
    expect(isFunction(/abc/)).toBe(false);
  });
});
