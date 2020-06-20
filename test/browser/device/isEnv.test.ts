import os from 'os';
import {
  isLinux,
  isWin,
  isMac,
  isAndroid,
  isWeChat,
  isWeChatPC,
  isWeChatMobile,
  isWeChatIOS,
  isWeChatAndroid,
  isMobile,
  isPC
} from '../../../src/browser/device';

describe('browser/device:isEnv', () => {
  test('isWin()', () => {
    const result = os.type() === 'Windows_NT';
    expect(isWin()).toBe(result);
  });

  test('isLinux()', () => {
    const result = os.type() === 'Linux';
    expect(isLinux()).toBe(result);
  });

  test('isMac()', () => {
    const result = os.type() === 'Darwin';
    expect(isMac()).toBe(result);
  });

  test('isAndroid', () => {
    expect(isAndroid()).toBeFalsy();
  });

  test('isWeChat', () => {
    expect(isWeChat()).toBeFalsy();
  });

  test('isWeChatPC', () => {
    expect(isWeChatPC()).toBeFalsy();
  });

  test('isWeChatMobile', () => {
    expect(isWeChatMobile()).toBeFalsy();
  });

  test('isWeChatIOS', () => {
    expect(isWeChatIOS()).toBeFalsy();
  });

  test('isWeChatAndroid', () => {
    expect(isWeChatAndroid()).toBeFalsy();
  });

  test('isMobile', () => {
    expect(isMobile()).toBeFalsy();
  });

  test('isPC', () => {
    expect(isPC()).toBeTruthy();
  });
});
