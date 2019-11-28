import { data } from './_internal/data';

/**
 * 设置 userAgent
 * @param ua userAgent
 */
export function setUA(ua: string): void {
  data.ua = ua;
}
