import { getUA } from '../../../src/browser/device';

describe('browser/device:getUA', () => {
  test('getUA()', () => {
    expect(getUA()).toBe('Mozilla/5.0 (win32) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/16.2.2');
  });
});
