/** Types */
export interface BackgroundState {
    mainColor: string
    accentColor: string
    accentColor2: string
    accentColor3: string
    editorColor: string
    headerColor: string
    iconColor: string
    hoverColor: string
}

export interface IconState {
    iconOutlineColor: string
    iconColorMain: string
    iconColorSecondary: string
    iconColorTertiary: string
    iconColorQuaternary: string
    iconColorQuinary: string
    iconSize: number
    iconDescSize: number
    iconDescColor: string
}

export interface SizeOptions {
    iconSizeSmall: number
    iconSizeMed: number
    iconSizeLarge: number
    fontSizeSmall: number
    fontSizeMed: number
    fontSizeLarge: number
}

export interface FontState {
    editorFont: string
    editorFontSize: number
    contentColor: string
    contentFont: string
    contentFontSize: number
    contentFontWeight: number
    headerFontWeight: number
    responseFontWeight: number
}

export interface ElementState {
    elementBorderRadius: number
    uiSpacing: number
    border: string
    boxShadow: string
    tabSelectColor: string
}

export interface ThemeState {
    background: BackgroundState
    font: FontState
    ui: ElementState
    icon: IconState
    mode: 'default' | 'dark'
}