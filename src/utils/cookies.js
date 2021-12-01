import Cookies from 'js-cookie'

// 储存用户信息
export const setUserinfoCookie = (userinfo) => Cookies.set('userinfo', JSON.stringify(userinfo))

// 删除用户信息
export const removeUserinfoCookie = () => Cookies.remove('userinfo')

// 获取用户信息
export const getUserinfoCookie = () => Cookies.get('userinfo') && JSON.parse(Cookies.get('userinfo'))

// 记住手机号
export const setPhoneCookie = (phone) => Cookies.set('phone', phone)

// 获取手机号
export const getPhoneCookie = () => Cookies.get('phone')

// 删除手机号
export const removePhoneCookie = (phone) => Cookies.remove('phone', phone)