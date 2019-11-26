import { device } from './main';

const os = device.getOS();
const browser = device.getBrowser();

document.body.innerText = `
device type(设备型号): ${device.getModel()}
os(系统): ${os.type} ${os.version} ${os.platform}

browser engine(内核): ${browser.engine.type} ${browser.engine.version}
browser supporter(载体): ${browser.supporter.type} ${browser.supporter.version}
browser shell(外壳): ${browser.shell.type} ${browser.shell.version}

network(网络): ${device.getNetwork()}
orientation(横竖屏状态): ${device.getOrientationStatus()}
resolution(分辨率): ${device.getResolution()}
language(语言): ${device.getLanguage()}

userAgent: ${navigator.userAgent}
`;
