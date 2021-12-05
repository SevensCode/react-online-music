import Cookies from 'js-cookie'

// 用户信息
const USERINFO = 'm_userinfo'

// 手机号
const PHONE = 'm_phone'

// 授权 cookie
const AUTH_COOKIE = 'authCookie'

// 储存用户信息
export const setUserinfoCookie = (userinfo) => Cookies.set(USERINFO, JSON.stringify(userinfo))

// 删除用户信息
export const removeUserinfoCookie = () => Cookies.remove(USERINFO)

// 获取用户信息
export const getUserinfoCookie = () => Cookies.get(USERINFO) && JSON.parse(Cookies.get(USERINFO))

// 记住手机号
export const setPhoneCookie = (phone) => Cookies.set(PHONE, phone)

// 获取手机号
export const getPhoneCookie = () => Cookies.get(PHONE)

// 删除手机号
export const removePhoneCookie = (phone) => Cookies.remove(PHONE, phone)

// 设置授权 cookie
export const setAuthCookie = authCookie => Cookies.set(AUTH_COOKIE, authCookie)

// 获取授权 cookie
export const getAuthCookie = () => Cookies.get(AUTH_COOKIE)

// 删除授权 cookie
export const removeAuthCookie = () => Cookies.get(AUTH_COOKIE)