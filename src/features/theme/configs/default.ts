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
    roundnessLight: 0,
    roundnessMed: 5,
    roundnessHeavy: 20,
    fontColorMain: '#676767',
    fontColorSecondary: '#484848',
    mainColor: '#fefefe',
    accentColor: '#eff1fb',
    accentColor2: '#4e87f9',
    accentColor3: '#0c0043',
    accentColor4: '#c2ffce',
}

export const defaultBackgroundState: BackgroundState = {
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

export const defaultFontState: FontState = {
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

export const defaultUIState: ElementState = {
    elementBorderRadius: constants.roundnessLight,
    menuButtonBorderRadius: constants.roundnessLight,
    tabBorderRadius: constants.roundnessLight,
    searchBarBorderRadius: constants.roundnessHeavy,
    uiSpacing: 5,
    border: `1px solid ${constants.accentColor3}`,
    boxShadow: ``,
    tabSelectColor: defaultBackgroundState.hoverColor,
}

export const defaultIconState: IconState = {
    iconOutlineColor: '#394240',
    iconColorMain: '#99cefa',
    iconColorSecondary: '#e9e9e9',
    iconColorTertiary: '#fffff2',
    iconColorQuaternary: '#f298ac',
    iconColorQuinary: '#86f5ba',
    iconSize: constants.iconSizeSmall,
    iconDescSize: defaultFontState.contentFontSize,
    iconDescColor: defaultFontState.contentColor,
    iconDescWeight: defaultFontState.contentFontWeight,
}

export const initialState = {
    background: defaultBackgroundState,
    font: defaultFontState,
    ui: defaultUIState,
    icon: defaultIconState,
    mode: 'default',
}
