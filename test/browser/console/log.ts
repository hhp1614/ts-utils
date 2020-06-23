import { Log } from '../../../src/browser/console';

describe('browser/console:log', () => {
  test('Log:info', () => {
    Log.prefix = '[i]';
    Log.info('this is test');
  });

  test('Log:error', () => {
    Log.prefix = '[e]';
    Log.error('this is test');
  });

  test('Log:success', () => {
    Log.prefix = '[s]';
    Log.success('this is test');
  });

  test('Log:fail', () => {
    Log.prefix = '[f]';
    Log.fail('this is test');
  });

  test('Log:debug', () => {
    Log.prefix = '[d]';
    Log.debug('this is test');
  });
});
