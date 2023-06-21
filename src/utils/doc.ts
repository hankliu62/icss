// 定义移动设备最大宽度
const MOBILE_MAX_WIDTH = 1023;

/**
 * 是否为浏览器环境
 */
export function isBrowser() {
  return (
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
  );
}

/**
 * 是否全屏
 */
export function isFullScreen() {
  if (!isBrowser()) return false;
  if (typeof document !== 'object') return false;
  return !!(
    (document as any).fullScreen ||
    (document as any).webkitIsFullScreen ||
    (document as any).mozFullScreen ||
    (document as any).msFullscreenElement ||
    document.fullscreenElement
  );
}

/**
 * 是否为Safari浏览器
 */
export function isSafari(): boolean {
  if (!isBrowser()) return false;

  const ua = navigator.userAgent;
  return /Safari/.test(ua) && !/Chrome/.test(ua);
}

/**
 * 是否为IE浏览器
 */
export function isIE(): boolean {
  if (typeof window !== 'object') return false;
  return 'ActiveXObject' in window;
}

/**
 * 是否为IOS系统
 */
export function isiOS(): boolean {
  if (!isBrowser()) return false;

  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

// 检测当前环境是否为手机端
export function isMobile(): boolean {
  if (!isBrowser()) return false;

  const userAgent = navigator.userAgent;
  return (
    /(ipad|ipod|mobile|android|iphone|windows phone)/gi.test(userAgent) &&
    /mobile/gi.test(userAgent)
  );
}

/**
 * 获得浏览器文档宽度
 */
export function getDocumentWidth(): number {
  if (!isBrowser()) return 0;

  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

/**
 * 根据页面宽度判断当时是否为移动设备
 * @returns true || false
 */
export function isMobilePage() {
  return getDocumentWidth() <= MOBILE_MAX_WIDTH;
}
