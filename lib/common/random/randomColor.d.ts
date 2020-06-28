/**
 * 随机模式
 */
declare type Mode = 'all' | 'light' | 'dark';
/**
 * 随机颜色
 * TODO: 增加类型 type，可选十六进制和 rgb
 * @param mode 默认 `all`；`all` 全部颜色中随机，`light` 随机亮色，`dark` 随机暗色
 */
export declare function randomColor(mode?: Mode): string;
export {};
//# sourceMappingURL=randomColor.d.ts.map