import { createSlice } from '@reduxjs/toolkit'
import { getUserinfoCookie, removeUserinfoCookie, setUserinfoCookie } from '../../utils/cookies'

const initialState = {
    userinfo: getUserinfoCookie()
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserinfo(state, { payload }) {
            setUserinfoCookie(payload)
            state.userinfo = payload
        },
        removeUserinfo(state) {
            removeUserinfoCookie()
            state.userinfo = undefined
        }
    }
})
export const { setUserinfo, removeUserinfo } = userSlice.actions

export default userSlice.reducer