import { randomNum } from './randomNum';

/**
 * 随机模式
 */
type Mode = 'all' | 'dark' | 'light';

/**
 * 颜色类型
 */
type Type = 'hex' | 'rgb';

/**
 * 随机十六进制颜色
 * @param mode 随机模式
 */
function randomHexColor(mode: Mode) {
  const modeMap: { [k in Mode]: string } = {
    all: '0123456789abcabcdefdef',
    dark: '0123401234abcabcabcabc',
    light: '5678956789defdefdefdef'
  };
  if (!modeMap[mode]) {
    throw new Error('`mode` 必须是 `all` | `dark` | `light`');
  }
  let res = '#';
  for (let i = 0; i < 6; i++) {
    res += modeMap[mode][randomNum(0, 21)];
  }
  return res;
}

/**
 * 随机 RGB 颜色
 * @param mode 随机模式
 */
function randomRgbColor(mode: Mode) {
  const hexColor = randomHexColor(mode);
  const rgbColor = [];
  for (let i = 1; i < hexColor.length; i += 2) {
    rgbColor.push(parseInt('0x' + hexColor.slice(i, i + 2)));
  }
  return `rgb(${rgbColor.join(',')})`;
}

/**
 * 随机颜色
 * @param mode 默认 `all`；`all` 全部颜色中随机，`light` 随机亮色，`dark` 随机暗色
 * @param type 默认 `hex`；`hex` 十六进制，`rgb` RGB
 */
export function randomColor(mode: Mode = 'all', type: Type = 'hex') {
  if (type === 'hex') {
    return randomHexColor(mode);
  }
  if (type === 'rgb') {
    return randomRgbColor(mode);
  }
  throw new Error('`type` 必须是 `hex` | `rgb`');
}
