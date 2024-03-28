/**
 * 获取路由前缀
 * @returns
 */
export function getRoutePrefix(): string {
  // @ts-ignore
  return process.env.ROUTE_PREFIX || "";
}