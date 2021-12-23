import React, { useCallback, useRef } from 'react'
import LazyLoad from 'react-lazyload'

function ImgLazy({
                     src,
                     defaultSrc = require('../../assets/svg/img_loading.svg').default,
                     errorSrc = require('../../assets/svg/img_error.svg').default,
                     className,
                     scrollContainer = '.layout'
                 }) {
    const imgRef = useRef()
    const onError = useCallback(({ target }) => {
        target.src = errorSrc
    }, [ errorSrc ])

    return (<LazyLoad offset={ 100 } throttle overflow scrollContainer={ scrollContainer } className={ className } scroll
                      placeholder={ <img className={ className } src={ defaultSrc } alt=""/> }>
            <img onError={ onError } ref={ imgRef } className={ className } src={ src } alt=""/>
        </LazyLoad>
    )
}

export default ImgLazy