import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ThemeState } from '../../types/themeSlice'
import { lightState, darkState, coolLightState } from './configs'

/** Theme Slice */
export const themeSlice = createSlice({
    name: 'theme',
    initialState: lightState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeState>) => {
            return action.payload
        },
        toggleTheme: (state) => {
            if (state.mode === 'default') {
                return lightState
            } else {
                return darkState
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTheme, toggleTheme } = themeSlice.actions

export default themeSlice.reducer
