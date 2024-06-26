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
    fontColorMain: '#3e3e3e',
    fontColorSecondary: '#484848',
    mainColor: '#f4f9fd',
    accentColor: '#fceeff',
    accentColor2: '#460087',
    accentColor3: '#fcfdff',
    accentColor4: '#f2ff5f',
    accentColor5: '#f7f7f7',
}

export const clBackground: BackgroundState = {
    appColor: constants.mainColor,
    hoverColor: constants.accentColor,
    menuColor: constants.mainColor,
    searchBarColor: constants.accentColor,
    headerColor: constants.mainColor,
    editorColor: constants.accentColor3,
    editorContainerColor: constants.accentColor3,
    renderedColor: constants.accentColor3,
    lineColor: constants.accentColor4,
    tabColor: constants.accentColor,
    tabAreaColor: constants.accentColor3,
    settingsColor: constants.mainColor,
}

export const clFont: FontState = {
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

export const clUI: ElementState = {
    elementBorderRadius: constants.roundnessLight,
    menuButtonBorderRadius: constants.roundnessLight,
    tabBorderRadius: constants.roundnessLight,
    searchBarBorderRadius: constants.roundnessHeavy,
    uiSpacing: 5,
    border: `1px solid ${constants.accentColor2}`,
    // border: '',
    boxShadow: `${constants.accentColor2}44 0px 0px 2px`,
    tabSelectColor: clBackground.hoverColor,
}

export const clIcon: IconState = {
    iconOutlineColor: '#003228',
    iconColorMain: '#99cefa',
    iconColorSecondary: '#e9e9e9',
    iconColorTertiary: '#292928',
    iconColorQuaternary: '#f298ac',
    iconColorQuinary: '#86f5ba',
    iconSize: constants.iconSizeSmall,
    iconDescSize: clFont.contentFontSize,
    iconDescColor: clFont.contentColor,
    iconDescWeight: clFont.contentFontWeight,
}

export const coolLightState = {
    background: clBackground,
    font: clFont,
    ui: clUI,
    icon: clIcon,
    mode: 'cool light',
}
