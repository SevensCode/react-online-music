import { configureStore } from '@reduxjs/toolkit'
import user from './modules/user'
import global from './modules/global'

export default configureStore({
    reducer: {
        user,
        global
    },
    // 自定义中间件
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

