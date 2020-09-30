type Level = {
  info: string;
  error: string;
  success: string;
  fail: string;
  debug: string;
};

/**
 * 打印等级
 */
const level: Level = {
  info: '[info]', // 提示
  error: '[error]', // 报错
  success: '[success]', // 成功
  fail: '[fail]', // 失败
  debug: '[debug]' // 调试
};

/**
 * 根据打印等级获取打印样式
 * @param level 打印等级
 */
const getStyle = (level: keyof Level) => {
  const color: Level = {
    info: '#3190e8',
    error: '#E83131',
    success: '#4ce831',
    fail: '#e231e8',
    debug: '#e89631'
  };
  return `color: ${color[level]}`;
};

/**
 * 日志打印类
 */
export class Log {
  /**
   * 前缀
   */
  private static prefix = '';

  /**
   * 设置前缀
   * @param prefix 前缀
   */
  static setPrefix(prefix: string) {
    this.prefix = prefix === '' ? '' : `[${prefix}]`;
  }

  /**
   * 打印信息
   * @param args 任意值
   */
  static info(...args: any[]) {
    console.info('%c' + this.prefix + level.info, getStyle('info'), ...args);
  }

  /**
   * 打印报错信息
   * @param args 任意值
   */
  static error(...args: any[]) {
    console.error('%c' + this.prefix + level.error, getStyle('error'), ...args);
  }

  /**
   * 打印成功信息
   * @param args 任意值
   */
  static success(...args: any[]) {
    console.info('%c' + this.prefix + level.success, getStyle('success'), ...args);
  }

  /**
   * 打印失败信息
   * @param args 任意值
   */
  static fail(...args: any[]) {
    console.error('%c' + this.prefix + level.fail, getStyle('fail'), ...args);
  }

  /**
   * 打印 debug 信息
   * @param args 任意值
   */
  static debug(...args: any[]) {
    console.warn('%c' + this.prefix + level.debug, getStyle('debug'), ...args);
  }
}
