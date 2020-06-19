import { getBrowser } from '../../../src/browser/device';

describe('browser/device:getBrowser', () => {
  test('getBrowser()', () => {
    expect(getBrowser()).toEqual({
      engine: { type: 'webkit', version: '537.36' },
      supporter: { type: 'unknown', version: 'unknown' },
      shell: { type: 'unknown', version: 'unknown' }
    });
  });
});
