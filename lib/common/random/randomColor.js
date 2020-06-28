"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomColor = void 0;
var randomNum_1 = require("./randomNum");
/**
 * 随机颜色
 * TODO: 增加类型 type，可选十六进制和 rgb
 * @param mode 默认 `all`；`all` 全部颜色中随机，`light` 随机亮色，`dark` 随机暗色
 */
function randomColor(mode) {
    if (mode === void 0) { mode = 'all'; }
    var modeMap = {
        all: '0123456789abcabcdefdef',
        light: '0123401234abcabcabcabc',
        dark: '5678956789defdefdefdef'
    };
    var res = '#';
    for (var i = 0; i < 6; i++) {
        res += modeMap[mode][randomNum_1.randomNum(0, 21)];
    }
    return res;
}
exports.randomColor = randomColor;
//# sourceMappingURL=randomColor.js.map