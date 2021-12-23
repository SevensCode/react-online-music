import React from 'react'
import './index.scss'

function Paused({ className }) {
    return (
        <div className={ [ 'audioStatus', 'paused', className ].join(' ') }>
            <i className="iconfont icon-zanting2"/>
        </div>
    )
}

export default Paused