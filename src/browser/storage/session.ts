/**
 * 转换为大写
 * @param str 需要转换的字符串
 */
const upCase = (str: string) => str.toUpperCase();

/**
 * sessionStorage 操作类
 */
export class Session {
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
   * 获取 sessionStorage item
   * @param key item 的 key
   */
  static get(key: string) {
    try {
      return JSON.parse(<string>sessionStorage.getItem(upCase(this.prefix + key)));
    } catch {
      return null;
    }
  }

  /**
   * 设置 sessionStorage item
   * @param key item 的 key
   * @param value 获取结果
   */
  static set(key: string, value: any) {
    try {
      sessionStorage.setItem(upCase(this.prefix + key), JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 删除 sessionStorage item
   * @param key item 的 key
   */
  static remove(key: string) {
    try {
      sessionStorage.removeItem(upCase(this.prefix + key));
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 清空 sessionStorage
   */
  static clear() {
    try {
      sessionStorage.clear();
      return true;
    } catch {
      return false;
    }
  }
}
