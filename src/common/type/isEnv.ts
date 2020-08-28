/**
 * 判断当前环境是否为浏览器
 * @param throwError 是否抛出异常
 * @param errorContent 抛出异常时的错误内容
 */
export function isBrowser(throwError = false, errorContent: any = '当前环境不是浏览器环境') {
  const result = typeof window != null && typeof window === 'object' && (window as any).self === window
  if (throwError && !result) {
    throw new Error(errorContent)
  }
  return result
}

/**
 * 判断当前环境是否为 NodeJS
 * @param throwError 是否抛出异常
 * @param errorContent 抛出异常时的错误内容
 */
export function isNode(throwError = false, errorContent: any = '当前环境不是 NodeJS 环境') {
  const result = typeof window != null && typeof global === 'object' && (global as any).global === global
  if (throwError && !result) {
    throw new Error(errorContent)
  }
  return result
}
