/**
 * 获取横竖屏状态
 * @return vertical | horizontal
 */
export function getOrientationStatus(): string {
  const orientation: MediaQueryList = matchMedia('(orientation: portrait)');
  return orientation.matches ? 'vertical' : 'horizontal';
}

/**
 * 获取屏幕分辨率
 * @return 长边x短边
 * @example
 * // => 1920x1080
 */
export function getResolution(): string {
  const ratio: number = devicePixelRatio || 1;
  const min: number = Math.min(screen.width, screen.height) * ratio;
  const max: number = Math.max(screen.width, screen.height) * ratio;
  return `${max}x${min}`;
}
