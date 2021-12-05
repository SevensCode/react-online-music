/*音乐*/
import request from '../utils/request'

// 新歌速递
export const newSongExpress = type => request.get('/top/song', { params: type })