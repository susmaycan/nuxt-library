import type { NavigationMenuItem } from '#ui/types'

export interface ISidebarLink extends NavigationMenuItem {
  authenticated: boolean
  placement: 'left' | 'right' | 'center'
}
