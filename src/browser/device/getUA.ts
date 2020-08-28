import { isBrowser } from '../../common/type'

/**
 * 获取浏览器的 `userAgent`
 */
export function getUA() {
  isBrowser(true)
  return window.navigator.userAgent
}
