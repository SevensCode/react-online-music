import React from 'react'
import './index.scss'

function Play({ className, onClick }) {
    return (
        <div onClick={ onClick } className={ [ 'audioStatus', 'play', className ].join(' ') }>
            <i className="iconfont icon-bofang1"/>
        </div>
    )
}

export default Play