import React from 'react'
import { PLAY_TYPE } from '../../constant'
import { handlePlayType } from '../../redux/modules/global'
import { Tooltip } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

function PlayType(props) {
    const dispatch = useDispatch()
    const playTypeStatus = useSelector(state => state.global.playTypeStatus)
    return (
        <Tooltip placement="top" title={ PLAY_TYPE[playTypeStatus].name }>
            <i onClick={ () => dispatch(handlePlayType()) }
               className={ [ 'iconfont', PLAY_TYPE[playTypeStatus].icon ].join(' ') }/>
        </Tooltip>
    )
}

export default PlayType