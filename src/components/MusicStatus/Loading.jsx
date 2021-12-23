import React from 'react'
import './index.scss'
import { LoadingOutlined } from '@ant-design/icons'

function Loading({ className, onClick }) {
    return (
        <div onClick={ onClick } className={ [ 'audioStatus', 'loading', className ].join(' ') }>
            <LoadingOutlined/>
        </div>
    )
}

export default Loading