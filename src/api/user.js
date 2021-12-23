import request from '../utils/request'

// 获取用户喜欢的音乐 id
export const getUserLikeMusicId = uid => request.get('/likelist', { params: { uid } })

// 是否喜欢音乐
export const isLikeMusic = (id, like) => request.get('/like', { params: { id, like } })