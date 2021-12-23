import React from 'react'
import { useSelector } from 'react-redux'
import Play from './Play'
import Loading from './Loading'
import Playing from './Playing'

function AudioStatus({ id, className, playOnClick, pausedOnClick }) {
    const playStatue = useSelector(state => state.global.playStatus)
    const currentId = useSelector(state => state.global.musicInfo.id)
    if (playStatue === 1 && id === currentId) return <Loading className={ className }/>
    else if (playStatue === 2 && id === currentId) return <Playing onClick={ pausedOnClick } className={ className }/>
    return <Play onClick={ playOnClick } className={ className }/>
}

export default AudioStatus