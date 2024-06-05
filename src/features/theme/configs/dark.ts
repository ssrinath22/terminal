import type { BackgroundState, FontState, ElementState, IconState, Constants } from '../../../types/themeSlice'

export const constants: Constants = {
    //icon sizes
    iconSizeSmall: 16,
    iconSizeMed: 22,
    iconSizeLarge: 32,
    //font sizes
    fontSizeSmall: 12,
    fontSizeMed: 14,
    fontSizeLarge: 16,
    //font weights
    fontWeightLight: 300,
    fontWeightMed: 400,
    fontWeightHeavy: 700,
    //roundness
    roundnessLight: 3,
    roundnessMed: 5,
    roundnessHeavy: 10,
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
    editorFontSize: constants.fontSizeMed,
    contentColor: darkModeBackground.accentColor,
    contentFont: 'Roboto, sans-serif',
    contentFontSize: constants.fontSizeSmall,
    contentFontWeight: constants.fontWeightLight,
    headerFontWeight: constants.fontWeightHeavy,
    responseFontWeight: constants.fontWeightHeavy,
}

export const darkUIState: ElementState = {
    elementBorderRadius: constants.roundnessLight,
    menuButtonBorderRadius: constants.roundnessMed,
    tabBorderRadius: constants.roundnessHeavy,
    searchBarBorderRadius: constants.roundnessHeavy,
    uiSpacing: 5,
    border: `1px solid ${darkModeBackground.hoverColor}`,
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
    iconSize: constants.iconSizeSmall,
    iconDescSize: constants.fontSizeSmall,
    iconDescColor: darkModeFont.contentColor,
    iconDescWeight: darkModeFont.contentFontWeight,
}

export const darkModeState = {
    background: darkModeBackground,
    font: darkModeFont,
    ui: darkUIState,
    icon: darkIconState,
    mode: 'dark',
}
