import { createSlice } from '@reduxjs/toolkit'
import { getUserinfoCookie, removeUserinfoCookie, setUserinfoCookie } from '../../utils/cookies'

const initialState = {
    userinfo: getUserinfoCookie(),
    likeIds: []
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
        },
        setLikeIds(state, { payload }) {
            state.likeIds = payload
        }
    }
})
export const { setUserinfo, removeUserinfo, setLikeIds } = userSlice.actions
export default userSlice.reducer