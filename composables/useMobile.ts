import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function useMobile() {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isMobile = breakpoints.smallerOrEqual('md')

  return { isMobile }
}
