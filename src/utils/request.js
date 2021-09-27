import axios from 'axios'
import { message as Message } from 'antd'

const server = axios.create({
    baseURL: 'http://localhost:8999/',
    timeout: 50000
})

server.interceptors.request.use(data => {
    // 防止 api 缓存
    const timestamp = new Date().getTime()
    if (data.method === 'post') data.url = data.url + '/' + timestamp
    if (data.method === 'get') data.params.timestamp = timestamp
    return data
}, error => {
    return Promise.reject(error)
})

server.interceptors.response.use(({ data }) => {
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