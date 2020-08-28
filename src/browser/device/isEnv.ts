import { getUA } from './getUA'

/**
 * 是否为Windows环境
 */
export const isWin = () => /windows|win32|win64|wow32|wow64/i.test(getUA())

/**
 * 是否为Linux环境
 */
export const isLinux = () => /x11/i.test(getUA())

/**
 * 是否为Mac环境
 */
export const isMac = () => /macintosh|macintel|darwin/i.test(getUA())

/**
 * 是否为iOS环境
 */
export const isIOS = () => /ios|iphone|ipad|ipod|iwatch/i.test(getUA())

/**
 * 是否为Android环境
 */
export const isAndroid = () => /android|adr/i.test(getUA())

/**
 * 是否为微信环境
 */
export const isWeChat = () => /micromessenger/i.test(getUA())

/**
 * 是否为微信PC环境
 */
export const isWeChatPC = () => /WindowsWechat/i.test(getUA())

/**
 * 是否为手机微信环境
 */
export const isWeChatMobile = () => isWeChat() && !isWeChatPC()

/**
 * 是否为iOS微信环境
 */
export const isWeChatIOS = () => isWeChat() && !isWeChatPC() && isIOS()

/**
 * 是否为Android微信环境
 */
export const isWeChatAndroid = () => isWeChat() && !isWeChatPC() && isAndroid()

/**
 * 是否为移动端环境
 */
export const isMobile = () => isAndroid() || isIOS() || /mobile/i.test(getUA())

/**
 * 是否为PC端环境
 */
export const isPC = () => isWin() || isLinux() || isMac()
