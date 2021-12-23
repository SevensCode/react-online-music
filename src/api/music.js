/*音乐*/
import request from '../utils/request'

// 新歌速递
export const newSongExpress = type => request.get('/top/song', { params: type })

// 推荐新音乐
export const recommendNewMusic = limit => request.get('/personalized/newsong', { params: { limit } })

// 获取音乐url
export const getMusicUrl = id => request.get('/song/url', { params: { id: id instanceof Array ? id.toString() : id } })

// 获取音乐详情
export const getMusicDetails = ids => request.get('/song/detail', { params: { ids: ids instanceof Array ? ids.toString() : ids } })