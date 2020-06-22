const level = {
  info: '[info]', // 提示
  error: '[error]', // 报错
  success: '[success]', // 成功
  fail: '[fail]', // 失败
  debug: '[debug]' // 调试
};

/**
 * 日志打印类
 */
export class Log {
  /**
   * 前缀
   */
  static prefix = '';

  /**
   * 打印信息
   * @param args 任意值
   */
  static info(...args: any[]) {
    console.warn(Log.prefix + level.info, ...args);
  }

  /**
   * 打印报错信息
   * @param args 任意值
   */
  static error(...args: any[]) {
    console.error(Log.prefix + level.error, ...args);
  }

  /**
   * 打印成功信息
   * @param args 任意值
   */
  static success(...args: any[]) {
    console.warn(Log.prefix + level.success, ...args);
  }

  /**
   * 打印失败信息
   * @param args 任意值
   */
  static fail(...args: any[]) {
    console.warn(Log.prefix + level.fail, ...args);
  }

  /**
   * 打印 debug 信息
   * @param args 任意值
   */
  static debug(...args: any[]) {
    console.warn(Log.prefix + level.debug, ...args);
  }
}
