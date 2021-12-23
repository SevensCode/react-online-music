/**
 * 时间戳转时间
 * @param {number} timestamp 时间戳
 * */
export const timestampToTime = (timestamp) => {
    const minute = Math.floor(timestamp / 1000 / 60)
    const second = Math.floor(timestamp / 1000) % 60
    return { minute, second }
}
/**
 * 格式化秒
 * @param {number} second 时间戳
 * */
export const formattedSeconds = (second) => {
    return { minute: Math.floor(second / 60), second: parseInt(second % 60) }
}
/**
 * 数字转换
 * @param {number} number
 * */
export const digitalConversion = (number) => {
    const numberStr = number.toString()
    const length = numberStr.length
    if (length > 4 && length <= 8) return numberStr.substring(0, length - 4) + '万'
    else if (length > 8) return numberStr.substring(0, length - 8) + '亿'
    return number
}

/**
 * 补零
 * @param {number} number
 * */
export const zeroPadding = (number) => {
    if (number === 0) return '00'
    else if (number < 10) return '0' + number
    return number
}