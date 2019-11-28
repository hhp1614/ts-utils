/**
 * 获取网络状态
 */
export function getNetwork(): string {
  const n: any = navigator || {};
  const connect = n.connection || n.mozConnection || n.webkitConnection || {};
  return connect.type || connect.effectiveType || 'unknown';
}
