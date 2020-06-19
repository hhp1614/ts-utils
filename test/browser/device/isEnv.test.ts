import os from 'os';
import { isLinux, isWin, isMac } from '../../../src/browser/device';

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
});
