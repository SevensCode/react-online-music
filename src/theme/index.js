import store from 'store'


const darkTheme = {
    textColor: '#F5F6F7',
    subTextColor: '#d6d7d7',
    backgroundColor: '#242526',
    subBackgroundColor: '#2e3236',
    scrollColor: 'rgba(255, 255, 255, 0.5)',
    transparent: 'rgba(255, 255, 255, 0.1)',
    transparentBackground: 'rgba(36,37,38,.7)',
}
const lightTheme = {
    textColor: '#333333',
    subTextColor: '#606770',
    backgroundColor: '#ffffff',
    subBackgroundColor: '#f2f2f2',
    scrollColor: 'rgba(0, 0, 0, 0.5)',
    transparent: 'rgba(0, 0, 0, 0.1)',
    transparentBackground: 'rgba(255,255,255,.7)',
}
const { style } = document.querySelector('body')

// 切换主题
export const switchTheme = () => {
    store.get('theme') === 'light' ? setDarkTheme() : setLightTheme()
}
// 设置黑暗主题
export const setDarkTheme = () => {
    for (let darkThemeKey in darkTheme) style.setProperty(`--${ darkThemeKey }`, darkTheme[darkThemeKey])
}
// 设置明亮主题
export const setLightTheme = () => {
    for (let lightThemeKey in lightTheme) style.setProperty(`--${ lightThemeKey }`, lightTheme[lightThemeKey])
}