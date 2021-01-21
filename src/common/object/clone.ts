import { getType } from '../type'

// 将父层级的数据缓存对比，解决循环引用
const cache = new Map()

/**
 * 深拷贝
 * @param value 任意值
 */
export function clone(value: any) {
  // 非引用类型及函数将直接返回
  if (!value || typeof value !== 'object') {
    return value
  }

  // 特殊的引用类型处理
  switch (getType(value)) {
    case 'date':
      return new Date(value)
    case 'regexp':
      return new RegExp(value)
    case 'string':
    case 'number':
    case 'boolean':
      return Object(value)
  }

  // 如果缓存中存在就直接返回
  if (cache.get(value)) {
    return cache.get(value)
  }

  // 存储结果
  const result: any = value instanceof Array ? [] : {}

  // 存入缓存
  cache.set(value, result)

  for (const propName in value) {
    if (value.hasOwnProperty(propName)) {
      // 递归 clone
      result[propName] = clone(value[propName])
    }
  }

  return result
}
