import { isBrowser, isNode } from '../../../src/common/type';

describe('common/type:isEnv', () => {
  test('isBrowser()', () => {
    expect(isBrowser()).toBeTruthy();
    expect(isBrowser(true)).toBeTruthy();
    expect(isBrowser(true, 'test')).toBeTruthy();
  });

  test('isNode()', () => {
    expect(isNode()).toBeFalsy();
    expect(() => isNode(true)).toThrow('当前环境不是 NodeJS 环境');
    expect(() => isNode(true, 'test')).toThrow('test');
  });
});
