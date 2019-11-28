/**
 * @private
 * 检查是否为 原型对象
 * @param value 要检查的值
 */
export function isPrototype(value: any): boolean {
  const Ctor = value && value.constructor;
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || Object.prototype;
  return value === proto;
}
