/**
 * 随机模式
 */
declare type Mode = 'all' | 'dark' | 'light';
/**
 * 颜色类型
 */
declare type Type = 'hex' | 'rgb';
/**
 * 随机颜色
 * @param mode 默认 `all`；`all` 全部颜色中随机，`light` 随机亮色，`dark` 随机暗色
 * @param type 默认 `hex`；`hex` 十六进制，`rgb` RGB
 */
export declare function randomColor(mode?: Mode, type?: Type): string;
export {};
//# sourceMappingURL=randomColor.d.ts.map