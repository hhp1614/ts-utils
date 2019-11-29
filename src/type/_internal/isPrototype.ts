/**
 * @private
 * 判断是否为 原型对象
 * @param value 要判断的值
 */
export function isPrototype(value: any): boolean {
  const Ctor = value && value.constructor;
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || Object.prototype;
  return value === proto;
}
