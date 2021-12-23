import Cookies from 'js-cookie'
import { PHONE_COOKIE, PLAY_TYPE_COOKIE, USERINFO_COOKIE, VOLUME_COOKIE } from '../constant'


// 储存用户信息
export const setUserinfoCookie = (userinfo) => Cookies.set(USERINFO_COOKIE, JSON.stringify(userinfo))

// 删除用户信息
export const removeUserinfoCookie = () => Cookies.remove(PHONE_COOKIE)

// 获取用户信息
export const getUserinfoCookie = () => Cookies.get(USERINFO_COOKIE) && JSON.parse(Cookies.get(USERINFO_COOKIE))

// 记住手机号
export const setPhoneCookie = (phone) => Cookies.set(PHONE_COOKIE, phone)

// 获取手机号
export const getPhoneCookie = () => Cookies.get(PHONE_COOKIE)

// 删除手机号
export const removePhoneCookie = (phone) => Cookies.remove(PHONE_COOKIE, phone)

// 设置播放类型
export const setPlayType = type => Cookies.set(PLAY_TYPE_COOKIE, type)

// 获取播放类型
export const getPlayType = () => Cookies.get(PLAY_TYPE_COOKIE)

// 删除播放类型
export const removePlayType = () => Cookies.remove(PLAY_TYPE_COOKIE)

// 设置音量
export const setVolume = volume => Cookies.set(VOLUME_COOKIE, volume)

// 获取音量
export const getVolume = () => Cookies.get(VOLUME_COOKIE)

// 删除音量
export const removeVolume = () => Cookies.remove(VOLUME_COOKIE)