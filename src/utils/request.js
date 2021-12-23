import axios from 'axios'
import { message as Message } from 'antd'

const server = axios.create({
    baseURL: 'http://localhost:8999/',
    timeout: 50000,
    withCredentials: true
})

server.interceptors.request.use(data => {
    // 防止 api 缓存
    const timestamp = new Date().getTime()
    if (data.method === 'post') {
        data.url = data.url + '/' + timestamp
    } else {
        if (data.params) {
            data.params.timestamp = timestamp
        } else {
            data.params = { timestamp }
        }
    }
    return data
}, error => {
    return Promise.reject(error)
})

server.interceptors.response.use(({ data }) => {
    if (data.code === 301) {
        Message.error('无权限访问')
        return { error: true }
    } else if (data.code !== 200) {
        Message.error('系统错误')
        return { error: true }
    }
    return data
}, error => {
    let { message } = error
    if (message === 'Network Error') {
        message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
        message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
        message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    Message.error(message, 3).then(r => r)
    return Promise.reject(error)
})

export default server