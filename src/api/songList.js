import request from '../utils/request'

// 获取每日推荐歌单(需要登录)
export const getRecommendedSonglist_login = () => request.post('/recommend/resource')

// 获取每日歌曲推荐(需要登录)
export const getRecommendedSongs_login = () => request.get('/recommend/songs')

// 获取推荐歌单
export const getRecommendedSonglist = limit => request.get('/personalized', { params: { limit } })