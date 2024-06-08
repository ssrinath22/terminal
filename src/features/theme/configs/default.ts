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
    roundnessHeavy: 20,
    fontColorMain: '#666666',
    fontColorSecondary: '#404040',
    mainColor: '#ffffff',
    accentColor: '#f2f2f2',
    accentColor2: '#4e87f9',
    accentColor3: '#0c0043',
    accentColor4: '#cdf1ff',
}

export const lightBackground: BackgroundState = {
    appColor: constants.mainColor,
    hoverColor: constants.accentColor,
    menuColor: constants.mainColor,
    searchBarColor: constants.accentColor4,
    headerColor: constants.mainColor,
    editorColor: constants.mainColor,
    editorContainerColor: constants.mainColor,
    renderedColor: constants.mainColor,
    lineColor: constants.accentColor4,
    tabColor: constants.accentColor,
    tabAreaColor: constants.mainColor,
    settingsColor: constants.mainColor,
}

export const lightFont: FontState = {
    // editorFont: '"Fira code", "Fira Mono", monospace',
    editorFont: "Segoe UI, Helvetica, Apple Color Emoji, Arial, sans-serif, Segoe UI Emoji, Segoe UI Symbol",
    editorFontColor: constants.fontColorSecondary,
    editorFontSize: constants.fontSizeMed,
    contentFontSize: constants.fontSizeSmall,
    contentColor: constants.fontColorMain,
    contentFont: 'Roboto, sans-serif',
    contentFontWeight: constants.fontWeightLight,
    headerFontWeight: constants.fontWeightMed,
    responseFontWeight: constants.fontWeightHeavy,
}

export const lightUI: ElementState = {
    elementBorderRadius: constants.roundnessLight,
    menuButtonBorderRadius: constants.roundnessLight,
    tabBorderRadius: constants.roundnessLight,
    searchBarBorderRadius: constants.roundnessHeavy,
    uiSpacing: 5,
    // border: `1px solid ${constants.accentColor3}`,
    border: '',
    boxShadow: ``,
    tabSelectColor: lightBackground.hoverColor,
}

export const lightIcon: IconState = {
    iconOutlineColor: '#394240',
    iconColorMain: '#99cefa',
    iconColorSecondary: '#e9e9e9',
    iconColorTertiary: '#fffff2',
    iconColorQuaternary: '#f298ac',
    iconColorQuinary: '#86f5ba',
    iconSize: constants.iconSizeSmall,
    iconDescSize: lightFont.contentFontSize,
    iconDescColor: lightFont.contentColor,
    iconDescWeight: lightFont.contentFontWeight,
}

export const lightState = {
    background: lightBackground,
    font: lightFont,
    ui: lightUI,
    icon: lightIcon,
    mode: 'default',
}
