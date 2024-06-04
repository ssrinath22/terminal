import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ThemeState } from '../../types/themeSlice'
import { initialState } from './configs/default'
import { darkModeState } from './configs/dark'

/** Theme Slice */
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeState>) => {
            return action.payload
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
