import { createSlice } from "@reduxjs/toolkit"

export type AccessibilitySettingsState = {
    descriptions: boolean
}

export type SettingsState = {
    accessibility: AccessibilitySettingsState
}

const defaultAccessibilitySettingsState: AccessibilitySettingsState = {
    descriptions: true
}

const initialState: SettingsState = {
    accessibility: defaultAccessibilitySettingsState
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleDescriptions: (state) => {    
            state.accessibility.descriptions = !state.accessibility.descriptions
        }
    }
})

export const { toggleDescriptions } = settingsSlice.actions

export default settingsSlice.reducer