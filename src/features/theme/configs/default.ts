import type { BackgroundState, FontState, ElementState, IconState, SizeOptions } from '../../../types/themeSlice'

export const sizeOptions: SizeOptions = {
    iconSizeSmall: 16,
    iconSizeMed: 22,
    iconSizeLarge: 32,
    fontSizeSmall: 12,
    fontSizeMed: 14,
    fontSizeLarge: 16,
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
    editorFont: '"Fira code", "Fira Mono", monospace',
    editorFontSize: sizeOptions.fontSizeSmall,
    contentFontSize: sizeOptions.fontSizeSmall,
    contentColor: '#515151',
    contentFont: 'Roboto, sans-serif',
    contentFontWeight: 300,
    headerFontWeight: 700,
    responseFontWeight: 800,
}

export const defaultUIState: ElementState = {
    elementBorderRadius: 3,
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
    iconSize: sizeOptions.iconSizeMed,
    iconDescSize: defaultFontState.contentFontSize,
    iconDescColor: defaultFontState.contentColor,
}

export const initialState = {
    background: defaultBackgroundState,
    font: defaultFontState,
    ui: defaultUIState,
    icon: defaultIconState,
    mode: 'default',
}
