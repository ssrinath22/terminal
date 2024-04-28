import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
/** Types */

export interface UserState {
    username: string
    email: string
    token: string
    cli_delimiter?: string
    cli_ending?: string
}

/** Default Values */
const initialState: UserState = {
    username: 'sidharthsrinath',
    email: 'sid@sidharthsrinath.com',
    token: '1234567890',
    cli_delimiter: '>>',
    cli_ending: ' $ ',
}

/** Theme Slice */
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state = action.payload
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }

    },
})

export const { setUser, setToken } = userSlice.actions

export default userSlice.reducer