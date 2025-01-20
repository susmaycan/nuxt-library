import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function useMobile() {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isMobile = computed(() => breakpoints.isSmallerOrEqual('md'))

  return { isMobile }
}
