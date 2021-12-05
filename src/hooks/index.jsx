import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { debounce, throttle } from 'lodash/function'

/**
 * 点击其他元素改变状态
 * @param {document} ref - 元素实例
 * */
export const useClickOnOtherElementsToChangeState = (ref) => {
    const [ isShow, changeState ] = useState(false)
    const callback = useCallback((e) => {
        changeState(ref.contains(e.target))
    }, [ ref ])
    useMemo(() => {
        isShow ?
            document.addEventListener('click', callback, false) :
            document.removeEventListener('click', callback, false)
    }, [ isShow, callback ])
    useEffect(() =>
            () => document.removeEventListener('click', callback, false)
        , [ callback ])
    return [ isShow, changeState ]
}

/**
 * 给 useState 加回调函数
 * @param initialState
 * */
export const useStateWithCallbackLazy = initialState => {
    const callbackRef = useRef(null)
    const [ state, setState ] = useState(initialState)
    useMemo(async () => {
        if (callbackRef.current) {
            await callbackRef.current(state)
            callbackRef.current = null
        }
    }, [ state ])
    const setValueWithCallback = (newState, callback) => {
        callbackRef.current = callback
        setState(newState)
    }
    return [ state, setValueWithCallback ]
}

/**
 * 防抖 hook
 * @param {function} callback - 回调函数
 * @param {number} wait - 毫秒
 * */
export const useDebounce = (callback, wait) => useCallback(debounce(callback, wait), []) // eslint-disable-line react-hooks/exhaustive-deps
/**
 * 节流 hook
 * @param {function} callback - 回调函数
 * @param {number} wait - 毫秒
 * */
export const useThrottle = (callback, wait) => useCallback(throttle(callback, wait), []) // eslint-disable-line react-hooks/exhaustive-deps
