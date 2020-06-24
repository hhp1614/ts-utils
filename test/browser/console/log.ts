import { Log } from '../../../src/browser/console';

describe('browser/console:log', () => {
  test('Log:info', () => {
    Log.setPrefix('i');
    Log.info('this is test');
  });

  test('Log:error', () => {
    Log.setPrefix('e');
    Log.error('this is test');
  });

  test('Log:success', () => {
    Log.setPrefix('s');
    Log.success('this is test');
  });

  test('Log:fail', () => {
    Log.setPrefix('f');
    Log.fail('this is test');
  });

  test('Log:debug', () => {
    Log.setPrefix('d');
    Log.debug('this is test');
  });

  test('Log:empty', () => {
    Log.setPrefix('');
    Log.info('this is test');
  });
});
