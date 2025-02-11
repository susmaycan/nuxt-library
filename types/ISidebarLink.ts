import type { HorizontalNavigationLink } from '#ui/types'

export interface ISidebarLink extends HorizontalNavigationLink {
  authenticated: boolean
  placement: 'left' | 'right'
}
