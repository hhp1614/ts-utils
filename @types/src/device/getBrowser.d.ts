import { IBrowserInfo } from './_internal/types';
/**
 * 获取浏览器信息
 * @return IBrowserInfo.engine 内核
 * @return IBrowserInfo.supporter 载体
 * @return IBrowserInfo.shell 外壳
 */
export declare function getBrowser(): IBrowserInfo;
