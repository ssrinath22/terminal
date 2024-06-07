import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ThemeState } from '../../types/themeSlice'
import { initialState, darkModeState, coolLightState } from './configs'
// import { coolLightState } from './configs/coolLight'

/** Theme Slice */
export const themeSlice = createSlice({
    name: 'theme',
    initialState: coolLightState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeState>) => {
            return action.payload
        },
        toggleTheme: (state) => {
            if (state.mode === 'default') {
                return initialState
            } else {
                return darkModeState
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTheme, toggleTheme } = themeSlice.actions

export default themeSlice.reducer
