import request from '../utils/request'

// 获取每日推荐歌单(需要登录)
export const getRecommendedSonglist_login = () => request.post('/recommend/resource')

// 获取推荐歌单
export const getRecommendedSonglist = limit => request.get('/personalized', { params: { limit } })