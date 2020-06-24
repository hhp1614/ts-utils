import { randomNum } from './randomNum';

/**
 * 随机模式
 */
type Mode = 'all' | 'light' | 'dark';

/**
 * 随机颜色
 * TODO: 增加类型 type，可选十六进制和 rgb
 * @param mode 默认 `all`；`all` 全部颜色中随机，`light` 随机亮色，`dark` 随机暗色
 */
export function randomColor(mode: Mode = 'all') {
  const modeMap: { [k in Mode]: string } = {
    all: '0123456789abcabcdefdef',
    light: '0123401234abcabcabcabc',
    dark: '5678956789defdefdefdef'
  };
  let res = '#';
  for (let i = 0; i < 6; i++) {
    res += modeMap[mode][randomNum(0, 21)];
  }
  return res;
}
