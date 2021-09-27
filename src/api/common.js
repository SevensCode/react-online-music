import request from '../utils/request'

// 手机登录
export const logInWithPhone = ({ phone, password }) => request.post('/login/cellphone', { phone, password })