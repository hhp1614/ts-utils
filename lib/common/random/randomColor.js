'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.randomColor = void 0;
var randomNum_1 = require('./randomNum');
/**
 * 随机十六进制颜色
 * @param mode 随机模式
 */
function randomHexColor(mode) {
  var modeMap = {
    all: '0123456789abcabcdefdef',
    dark: '0123401234abcabcabcabc',
    light: '5678956789defdefdefdef'
  };
  if (!modeMap[mode]) {
    throw new Error('`mode` 必须是 `all` | `dark` | `light`');
  }
  var res = '#';
  for (var i = 0; i < 6; i++) {
    res += modeMap[mode][randomNum_1.randomNum(0, 21)];
  }
  return res;
}
/**
 * 随机 RGB 颜色
 * @param mode 随机模式
 */
function randomRgbColor(mode) {
  var hexColor = randomHexColor(mode);
  var rgbColor = [];
  for (var i = 1; i < hexColor.length; i += 2) {
    rgbColor.push(parseInt('0x' + hexColor.slice(i, i + 2)));
  }
  return 'rgb(' + rgbColor.join(',') + ')';
}
/**
 * 随机颜色
 * @param mode 默认 `all`；`all` 全部颜色中随机，`light` 随机亮色，`dark` 随机暗色
 * @param type 默认 `hex`；`hex` 十六进制，`rgb` RGB
 */
function randomColor(mode, type) {
  if (mode === void 0) {
    mode = 'all';
  }
  if (type === void 0) {
    type = 'hex';
  }
  if (type === 'hex') {
    return randomHexColor(mode);
  }
  if (type === 'rgb') {
    return randomRgbColor(mode);
  }
  throw new Error('`type` 必须是 `hex` | `rgb`');
}
exports.randomColor = randomColor;
//# sourceMappingURL=randomColor.js.map
