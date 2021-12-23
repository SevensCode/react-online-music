import React from 'react'
import { formattedSeconds, zeroPadding } from '../../utils'
import { useSelector } from 'react-redux'

function Duration({ type, className }) {
    const global = useSelector(state => state.global)
    let duration
    if (type === 'end') {
        duration = formattedSeconds(global.duration)
    } else {
        duration = global.currentPlayTime
    }

    return (
        <span className={ className }>{ zeroPadding(duration.minute) }:{ zeroPadding(duration.second) }</span>
    )
}

export default Duration