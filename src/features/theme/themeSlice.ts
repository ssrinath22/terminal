import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
/** Types */
export interface BackgroundState {
    mainColor: string
    accentColor: string
    accentColor2: string
    hoverColor: string
}

export interface FontState {
    contentColor: string
    contentFont: string
    contentFontSize: number
    contentFontWeight: number
    headerFontWeight: number
    responseFontWeight: number
    menuIconSize: number
    menuIconColor?: string
}
export interface UIState {
    elementBorderRadius: string
    uiSpacing:string
    border:string
}
export interface ThemeState {
    background: BackgroundState
    font: FontState
    ui: UIState
}

/** Default Values */
const defaultBackgroundState: BackgroundState = {
    mainColor: '#FFFFFF',
    accentColor: '#000000',
    accentColor2: '#DD5746',
    hoverColor: '#E0E0E0',
}

const darkModeBackground: BackgroundState = {
    mainColor: '#31363F',
    accentColor: '#91C8E4',
    accentColor2: '#3887BE',
    hoverColor: '#E0E0E0',
}

const defaltFontState: FontState = {
    contentColor: '#3C3633',
    contentFont: 'Inconsolata, monospace',
    contentFontSize: 14,
    contentFontWeight: 400,
    headerFontWeight: 500,
    responseFontWeight: 800,
    menuIconSize: 2,
}

const darkModeFont: FontState = {
    contentColor: '#EEEEEE',
    contentFont: 'Inconsolata, monospace',
    contentFontSize: 16,
    contentFontWeight: 400,
    headerFontWeight: 500,
    responseFontWeight: 800,
    menuIconSize: 2,
}

const defaultUIState = {
    elementBorderRadius: '5px',
    uiSpacing: '5px',
    border: '1px solid #E0E0E0',
}

const initialState: ThemeState = {
    background: defaultBackgroundState,
    font: defaltFontState,
    ui: defaultUIState,
}


/** Theme Slice */
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeState>) => {
            state = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer