/** Types */
export interface Constants {
    iconSizeSmall: number
    iconSizeMed: number
    iconSizeLarge: number
    fontSizeSmall: number
    fontSizeMed: number
    fontSizeLarge: number
    fontWeightLight: number
    fontWeightMed: number
    fontWeightHeavy: number
    roundnessLight: number
    roundnessMed: number
    roundnessHeavy: number
    fontColorMain: string
    fontColorSecondary: string
    mainColor: string
    accentColor: string
    accentColor2: string
    accentColor3: string
    accentColor4: string
    accentColor5?: string
}

export interface BackgroundState {
    appColor: string
    menuColor: string
    editorColor: string
    editorContainerColor: string
    renderedColor: string
    lineColor: string
    searchBarColor: string
    headerColor: string
    hoverColor: string
    tabColor: string
    tabAreaColor: string
    settingsColor: string
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
    iconDescWeight: number
}

export interface FontState {
    editorFont: string
    editorFontSize: number
    editorFontColor: string
    contentColor: string
    contentFont: string
    contentFontSize: number
    contentFontWeight: number
    headerFontWeight: number
    responseFontWeight: number
}

export interface ElementState {
    elementBorderRadius: number
    menuButtonBorderRadius: number
    tabBorderRadius: number
    searchBarBorderRadius: number
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
