import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

/** Types */
export interface BackgroundState {
    mainColor: string
    accentColor: string
    accentColor2: string
    editorColor: string
    iconColor: string
    hoverColor: string
}
export interface IconState {
    iconColorMain: string
    iconColorSecondary: string
    iconColorTertiary: string
    iconSize:number
    iconDescSize:number
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
    uiSpacing:number
    border:string
    boxShadow: string
    tabSelectColor:string
}
export interface ThemeState {
    background: BackgroundState
    font: FontState
    ui: ElementState
    icon: IconState
    mode: 'default' | 'dark'
}
/** Default Values */
const sizeOptions: SizeOptions = {
    iconSizeSmall: 16,
    iconSizeMed: 22,
    iconSizeLarge: 32,
    fontSizeSmall: 12,
    fontSizeMed: 14,
    fontSizeLarge: 16,
}
const defaultBackgroundState: BackgroundState = {
    mainColor: '#FFFFFF',
    accentColor: '#000000',
    accentColor2: '#DD5746',
    iconColor: '#B4CCB9',
    hoverColor: '#E0E0E0',
    // editorColor: '#f3f3f3',
    editorColor: '#FFF',

}
const defaultFontState: FontState = {
    editorFont:  '"Fira code", "Fira Mono", monospace',
    editorFontSize: sizeOptions.fontSizeLarge,
    contentColor: '#3C3633',
    contentFont: 'Roboto, sans-serif',
    contentFontSize: sizeOptions.fontSizeMed,
    contentFontWeight: 400,
    headerFontWeight: 700,
    responseFontWeight: 800,
}
const defaultElementState = {
    elementBorderRadius: 10,
    uiSpacing: 5,
    // border: `1px solid ${defaultBackgroundState.hoverColor}`,
    border: ``,
    // boxShadow: `${defaultBackgroundState.accentColor}FF 0px 0px 1px`,
    boxShadow: ``,
    tabSelectColor: defaultBackgroundState.hoverColor,
}
const defaultIconState = {
    iconColorMain: '#B4CCB9',
    iconColorSecondary: '#45AAB8',
    iconColorTertiary: '#F9EBB2',
    iconSize: sizeOptions.iconSizeMed,
    iconDescSize: sizeOptions.fontSizeMed,
    iconDescColor: defaultFontState.contentColor,
}
const initialState: ThemeState = {
    background: defaultBackgroundState,
    font: defaultFontState,
    ui: defaultElementState,
    icon: defaultIconState,
    mode: 'default'
}

const darkModeBackground: BackgroundState = {
    mainColor: '#313131',
    accentColor: '#faf7f7',
    accentColor2: '#F9EBB2',
    iconColor: '#B4CCB9',
    hoverColor: '#5e5d5d',
    editorColor: '#282828',
}
const darkModeFont: FontState = {
    editorFont:  '"Fira code", "Fira Mono", monospace',
    editorFontSize: sizeOptions.fontSizeMed,
    contentColor: '#c2bdbd',
    contentFont: 'Roboto, sans-serif',
    contentFontSize: sizeOptions.fontSizeMed,
    contentFontWeight: 400,
    headerFontWeight: 700,
    responseFontWeight: 800,
}
const darkUIState = {
    elementBorderRadius: 5,
    uiSpacing: 5,
    border: `1px solid ${darkModeBackground.hoverColor}`,
    boxShadow: `${darkModeBackground.accentColor}FF 0px 0px 1px`,
    tabSelectColor: darkModeBackground.hoverColor,
}

const darkIconState = {
    iconColorMain: '#b8b4cc',
    iconColorSecondary: '#F76D57',
    iconColorTertiary: '#F9EBB2',
    iconSize: sizeOptions.iconSizeMed,
    iconDescSize: sizeOptions.fontSizeMed,
    iconDescColor: darkModeFont.contentColor,
}

const darkModeState: ThemeState = {
    background: darkModeBackground,
    font: darkModeFont,
    ui: darkUIState,
    icon: darkIconState,
    mode: 'dark',
}

/** Theme Slice */
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeState>) => {
            state = action.payload
        },
        toggleTheme: (state) => {
            if (state.mode === 'default') {
                return darkModeState
            } else {
                return initialState
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTheme, toggleTheme } = themeSlice.actions

export default themeSlice.reducer
