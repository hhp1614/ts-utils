/**
 * sessionStorage 操作类
 */
export declare class Session {
  /**
   * 前缀
   */
  private static prefix;
  /**
   * 设置前缀
   * @param prefix 前缀
   */
  static setPrefix(prefix: string): void;
  /**
   * 获取 sessionStorage item
   * @param key item 的 key
   */
  static get(key: string): any;
  /**
   * 设置 sessionStorage item
   * @param key item 的 key
   * @param value 获取结果
   */
  static set(key: string, value: any): boolean;
  /**
   * 删除 sessionStorage item
   * @param key item 的 key
   */
  static remove(key: string): boolean;
  /**
   * 清空 sessionStorage
   */
  static clear(): boolean;
}
//# sourceMappingURL=session.d.ts.map
