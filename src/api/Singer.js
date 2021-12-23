/*歌手*/
import request from '../utils/request'

// 热门歌手
export const hotSingers = ({ limit, page }) => request.get('/top/artists', { params: { limit, offset: (page - 1) * limit } })