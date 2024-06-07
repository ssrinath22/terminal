import { fontDir } from '@tauri-apps/api/path'
import type { BackgroundState, FontState, ElementState, IconState, Constants } from '../../../types/themeSlice'

export const constants: Constants = {
    iconSizeSmall: 14,
    iconSizeMed: 23,
    iconSizeLarge: 32,

    fontSizeSmall: 12,
    fontSizeMed: 14,
    fontSizeLarge: 22,

    fontWeightLight: 400,
    fontWeightMed: 500,
    fontWeightHeavy: 700,

    roundnessLight: 3,
    roundnessMed: 5,
    roundnessHeavy: 15,

    fontColorMain: '#d2d2d2',
    fontColorSecondary: '#e0e0e0',

    mainColor: '#2c2c2c',
    accentColor: '#faf7f7',
    accentColor2: '#078efd',
    accentColor3:'#078efd',
    accentColor4: '#B4CCB9',
}
export const darkModeBackground: BackgroundState = {
    appColor: constants.mainColor,
    hoverColor: constants.accentColor,
    menuColor: constants.mainColor,
    searchBarColor: constants.accentColor,
    headerColor: constants.mainColor,
    editorColor: constants.mainColor,
    editorContainerColor: constants.mainColor,
    renderedColor: constants.mainColor,
    lineColor: constants.accentColor4,
    tabColor: constants.accentColor,
    tabAreaColor: constants.mainColor,
    settingsColor: constants.mainColor,
}

export const darkModeFont: FontState = {
    editorFont: '"Fira code", "Fira Mono", monospace',
    editorFontColor: constants.fontColorSecondary,
    editorFontSize: constants.fontSizeMed,
    contentColor: constants.fontColorMain,
    contentFont: 'Roboto, sans-serif',
    contentFontSize: constants.fontSizeSmall,
    contentFontWeight: constants.fontWeightLight,
    headerFontWeight: constants.fontWeightHeavy,
    responseFontWeight: constants.fontWeightHeavy,
}

export const darkUIState: ElementState = {
    elementBorderRadius: constants.roundnessLight,
    menuButtonBorderRadius: constants.roundnessLight,
    tabBorderRadius: constants.roundnessLight,
    searchBarBorderRadius: constants.roundnessHeavy,
    uiSpacing: 5,
    border: `1px solid ${darkModeBackground.hoverColor}`,
    boxShadow: ``,
    tabSelectColor: darkModeBackground.hoverColor,
}

export const darkIconState: IconState = {
    iconOutlineColor: '#818181',
    iconColorMain: '#52c5fa',
    iconColorSecondary: '#9886fa',
    iconColorTertiary: '#fcbabd',
    iconColorQuaternary: '#fc000d',
    iconColorQuinary: '#00ff22',
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
