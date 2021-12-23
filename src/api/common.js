import request from '../utils/request'

// 手机登录
export const logInWithPhone = ({ phone, password }) => request.get('/login/cellphone', { params: { phone, password } })

// banner
export const getBanner = () => request.get('/banner', { params: { type: 0 } })