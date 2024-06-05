import type { BackgroundState, FontState, ElementState, IconState, Constants } from '../../../types/themeSlice'

export const constants: Constants = {
    iconSizeSmall: 14,
    iconSizeMed: 23,
    iconSizeLarge: 32,
    fontSizeSmall: 12,
    fontSizeMed: 14,
    fontSizeLarge: 22,
    fontWeightLight: 300,
    fontWeightMed: 400,
    fontWeightHeavy: 700,
    roundnessLight: 3,
    roundnessMed: 5,
    roundnessHeavy: 10,
}

export const defaultBackgroundState: BackgroundState = {
    mainColor: '#FFFFFF',
    accentColor: '#000000',
    accentColor2: '#538cff',
    accentColor3: '#a2c5fe',
    iconColor: '#B4CCB9',
    hoverColor: '#e1e1e1',
    headerColor: '#ffffff',
    editorColor: '#FFFFFF',
}

export const defaultFontState: FontState = {
    // editorFont: '"Fira code", "Fira Mono", monospace',
    editorFont: "Segoe UI, Helvetica, Apple Color Emoji, Arial, sans-serif, Segoe UI Emoji, Segoe UI Symbol",
    editorFontSize: constants.fontSizeLarge,
    contentFontSize: constants.fontSizeSmall,
    contentColor: '#444444',
    contentFont: 'Roboto, sans-serif',
    contentFontWeight: constants.fontWeightLight,
    headerFontWeight: constants.fontWeightHeavy,
    responseFontWeight: constants.fontWeightHeavy,
}

export const defaultUIState: ElementState = {
    elementBorderRadius: constants.roundnessLight,
    menuButtonBorderRadius: constants.roundnessLight,
    tabBorderRadius: constants.roundnessLight,
    searchBarBorderRadius: constants.roundnessMed,
    uiSpacing: 5,
    border: `1px solid ${defaultBackgroundState.hoverColor}`,
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
