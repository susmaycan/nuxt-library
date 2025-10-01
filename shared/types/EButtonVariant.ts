export enum EButtonVariant {
  solid = 'solid',
  outline = 'outline',
  link = 'link',
  ghost = 'ghost'
}

export type IButtonVariant = keyof typeof EButtonVariant
