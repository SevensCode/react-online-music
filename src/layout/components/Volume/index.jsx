import React from 'react'
import { Slider, Tooltip } from 'antd'
import './index.scss'

function Volume(props) {
    return (
        <div className="volume-container">
            <Tooltip placement="top" title="音量">
                <i className="iconfont icon-yinliang"/>
            </Tooltip>
            <Slider defaultValue={ 30 } className="volume-progressBar"/>
        </div>
    )
}

export default Volume