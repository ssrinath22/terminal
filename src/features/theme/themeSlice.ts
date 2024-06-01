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
    iconSizeSmall: number
    iconSizeMed: number
    iconSizeLarge:  number
    iconDescSizeSmall: number
    iconDescSizeMed: number
    iconDescSizeLarge: number
    iconDescColor: string
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
const defaultBackgroundState: BackgroundState = {
    mainColor: '#FFFFFF',
    accentColor: '#000000',
    accentColor2: '#DD5746',
    iconColor: '#B4CCB9',
    hoverColor: '#E0E0E0',
    editorColor: '#F0F0F0',
}
const defaultFontState: FontState = {
    editorFont: 'Inconsolata, monospace',
    editorFontSize: 13,
    contentColor: '#3C3633',
    contentFont: 'Roboto, sans-serif',
    contentFontSize: 12,
    contentFontWeight: 300,
    headerFontWeight: 500,
    responseFontWeight: 800,
}
const defaultElementState = {
    elementBorderRadius: 5,
    uiSpacing: 5,
    border: `1px solid ${defaultBackgroundState.hoverColor}`,
    boxShadow: `${defaultBackgroundState.accentColor}44 0px 0px 3px`,
    tabSelectColor: defaultBackgroundState.mainColor,
}

const defaultIconState = {
    iconColorMain: '#B4CCB9',
    iconColorSecondary: '#45AAB8',
    iconColorTertiary: '#F9EBB2',
    iconSizeSmall: 16,
    iconSizeMed: 22,
    iconSizeLarge: 32,
    iconDescSizeSmall: 12,
    iconDescSizeMed: 14,
    iconDescSizeLarge: 16,
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
    editorFont: 'Inconsolata, monospace',
    editorFontSize: 13,
    contentColor: '#c2bdbd',
    contentFont: 'Roboto, sans-serif',
    contentFontSize: 12,
    contentFontWeight: 500,
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
    iconSizeSmall: 16,
    iconSizeMed: 22,
    iconSizeLarge: 32,
    iconDescSizeSmall: 12,
    iconDescSizeMed: 14,
    iconDescSizeLarge: 16,
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
    initialState:darkModeState,
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
