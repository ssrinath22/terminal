import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
/** Types */

export interface UserInfo {
    username: string
    name: string
    email: string
    token: string
    cli_delimiter?: string
    cli_ending?: string
}
export interface UserState {
    userInfo: UserInfo
}

const defaultUserInfo: UserInfo = {
    username: 'sidharthsrinath',
    name: 'Sidharth Srinath',
    email: 'sid@sidharthsrinath.com',
    token: '1234567890',
    cli_delimiter: '>>',
    cli_ending: ' $ ',
}

/** Default Values */
const initialState: UserState = {
    userInfo: defaultUserInfo,
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
            state.userInfo.token = action.payload
        }

    },
})

export const { setUser, setToken } = userSlice.actions

export default userSlice.reducer