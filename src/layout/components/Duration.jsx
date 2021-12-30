import React from 'react'
import { formattedSeconds, zeroPadding } from '../../utils'

function Duration({ className, duration }) {
    duration = formattedSeconds(duration / 1000)
    return (
        <span className={ className }>{ zeroPadding(duration.minute) }:{ zeroPadding(duration.second) }</span>
    )
}

export default Duration