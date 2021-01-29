const os = require('os');
import { getUA } from '../../../src/browser/device';

describe('browser/device:getUA', () => {
  test('getUA()', () => {
    if (os.type() === 'Windows_NT') {
      expect(getUA()).toBe('Mozilla/5.0 (win32) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/16.2.2');
    }
    if (os.type() === 'Darwin') {
      expect(getUA()).toBe('Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/16.2.2');
    }
  });
});
