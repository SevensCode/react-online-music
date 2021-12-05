/* 独家放送 */
import request from '../utils/request'

// 独家放送(入口列表)
export const exclusiveBroadcastEntryList = () => request.get('/personalized/privatecontent')