/**
 * 转换为大写
 * @param str 需要转换的字符串
 */
const upCase = (str: string) => str.toUpperCase();

/**
 * localStorage 操作类
 */
export class Local {
  /**
   * 前缀
   */
  private static prefix = '';

  /**
   * 设置前缀
   * @param prefix 前缀
   */
  static setPrefix(prefix: string) {
    this.prefix = prefix === '' ? '' : `${prefix}_`;
  }

  /**
   * 获取 localStorage item
   * @param key item 的 key
   */
  static get(key: string) {
    try {
      return JSON.parse(<string>localStorage.getItem(upCase(this.prefix + key)));
    } catch {
      return null;
    }
  }

  /**
   * 设置 localStorage item
   * @param key item 的 key
   * @param value 获取结果
   */
  static set(key: string, value: any) {
    try {
      localStorage.setItem(upCase(this.prefix + key), JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 删除 localStorage item
   * @param key item 的 key
   */
  static remove(key: string) {
    try {
      localStorage.removeItem(upCase(this.prefix + key));
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 清空 localStorage
   */
  static clear() {
    try {
      localStorage.clear();
      return true;
    } catch {
      return false;
    }
  }
}
