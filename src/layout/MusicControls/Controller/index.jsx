import React from 'react'
import { Tooltip } from 'antd'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { audioPause, audioPlay } from '../../../redux/modules/global'

function Controller({ className }) {
    const playStatus = useSelector(state => state.global.playStatus)
    const dispatch = useDispatch()
    const handle = () => {
        playStatus === 0 && dispatch(audioPlay())
        playStatus === 2 && dispatch(audioPause())
    }
    return (
        <div className={ [ 'controller', className ].join(' ') }>
            <Tooltip placement="top" title="上一首">
                <i className="iconfont icon-shangyishou prve"/>
            </Tooltip>
            <Tooltip placement="top" title={ playStatus === 2 ? '暂停' : '播放' }>
                <i onClick={ handle } className={ [ 'iconfont playing', playStatus === 0 ? 'icon-bofang1' : 'icon-zanting2' ].join(' ') }/>
            </Tooltip>
            <Tooltip placement="top" title="下一首">
                <i className="iconfont icon-xiayishou next"/>
            </Tooltip>
        </div>
    )
}

export default Controller