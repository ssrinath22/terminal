import type { BackgroundState, FontState, ElementState, IconState, SizeOptions } from '../../../types/themeSlice'

export const sizeOptions: SizeOptions = {
    iconSizeSmall: 16,
    iconSizeMed: 22,
    iconSizeLarge: 32,
    fontSizeSmall: 12,
    fontSizeMed: 14,
    fontSizeLarge: 16,
}
export const darkModeBackground: BackgroundState = {
    mainColor: '#353131',
    accentColor: '#faf7f7',
    accentColor2: '#078efd',
    accentColor3: '#4e5569',
    iconColor: '#B4CCB9',
    hoverColor: '#5e5d5d',
    headerColor: '#353131',
    editorColor: '#353131',
}

export const darkModeFont: FontState = {
    editorFont: '"Fira code", "Fira Mono", monospace',
    editorFontSize: sizeOptions.fontSizeMed,
    contentColor: darkModeBackground.accentColor,
    contentFont: 'Roboto, sans-serif',
    contentFontSize: sizeOptions.fontSizeSmall,
    contentFontWeight: 300,
    headerFontWeight: 700,
    responseFontWeight: 800,
}

export const darkUIState: ElementState = {
    elementBorderRadius: 3,
    uiSpacing: 5,
    border: `1px solid ${darkModeBackground.hoverColor}`,
    // boxShadow: `${darkModeBackground.accentColor}FF 0px 0px 1px`,
    boxShadow: ``,
    tabSelectColor: darkModeBackground.hoverColor,
}

export const darkIconState: IconState = {
    iconOutlineColor: '#393939',
    iconColorMain: '#cff0ff',
    iconColorSecondary: '#c2b7ff',
    iconColorTertiary: '#fdfdfd',
    iconColorQuaternary: '#fa757c',
    iconColorQuinary: '#75fa86',
    iconSize: sizeOptions.iconSizeSmall,
    iconDescSize: sizeOptions.fontSizeSmall,
    iconDescColor: darkModeFont.contentColor,
}

export const darkModeState = {
    background: darkModeBackground,
    font: darkModeFont,
    ui: darkUIState,
    icon: darkIconState,
    mode: 'dark',
}
