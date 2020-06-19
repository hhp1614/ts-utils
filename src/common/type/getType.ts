/**
 * 判断数据类型
 * @param value 任意值
 */
export function getType(value: any) {
  const type = Object.prototype.toString.call(value).match(/\[object (\w+)\]/);
  return type ? type[1].toLowerCase() : typeof value;
}
