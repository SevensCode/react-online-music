import React, { useCallback, useEffect, useRef } from 'react'
import { useThrottle } from '../../hooks'

function ImgLazy(
    {
        src,
        defaultSrc = require('../../assets/svg/img_loading.svg').default,
        errorSrc = require('../../assets/svg/img_error.svg').default
    }) {
    const imgRef = useRef()
    const onError = useCallback(({ target }) => {
        target.src = errorSrc
    }, [ errorSrc ])
    const isLoaded = useThrottle(() => {
        const viewHeight = document.body.clientHeight //获取可视区高度
        const rect = imgRef.current.getBoundingClientRect()
        if (rect.top < viewHeight) {
            imgRef.current.src = src
            window.removeEventListener('scroll', isLoaded, true)
            // 只监听一次异常，避免图片无限加载
            imgRef.current.addEventListener('error', onError, { once: true })
        }
    }, 300)
    useEffect(() => {
        isLoaded()
        window.addEventListener('scroll', isLoaded, true)
        return () => window.removeEventListener('scroll', isLoaded, true)
    }, [ isLoaded ])

    return (
        <img ref={ imgRef } style={ { background: '#333333' } } className="imgLazy"
             src={ defaultSrc } alt=""/>
    )
}

export default ImgLazy