/**
 * 获取当前语言
 */
export function getLanguage(): string {
  return navigator.language.replace(/-/g, '_');
}
