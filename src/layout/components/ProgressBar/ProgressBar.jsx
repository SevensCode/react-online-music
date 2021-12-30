import React from 'react'
import { Slider } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setHasDragProgressBar, updateCurrentPlayTime, updateSchedule } from '../../../redux/modules/global'
import { formattedSeconds, zeroPadding } from '../../../utils'
import './index.scss'

function ProgressBar({ className }) {
    const schedule = useSelector(state => state.global.schedule)
    const audioInstance = useSelector(state => state.global.audioInstance)
    const duration = useSelector(state => state.global.duration)
    const dispatch = useDispatch()
    const onChange = (e) => {
        // 改拖拽为 true
        dispatch(setHasDragProgressBar(true))
        // 更新进度条
        dispatch(updateSchedule(e))
        // 更新播放显示时间
        dispatch(updateCurrentPlayTime(formattedSeconds(e)))
    }
    const onAfterChange = (value) => {
        // 更新audio播放时间
        audioInstance.currentTime = value
        // 改拖拽为 false
        dispatch(setHasDragProgressBar(false))
    }
    const tipFormatter = (value) => {
        const { minute, second } = formattedSeconds(value)
        return `${ zeroPadding(minute) }:${ zeroPadding(second) }`
    }
    return (
        <Slider onChange={ onChange } onAfterChange={ onAfterChange } className={ [ className, 'progressBar' ] } step={ 1 }
                tipFormatter={ tipFormatter }
                value={ schedule } max={ duration } min={ 0 } defaultValue={ 0 }/>
    )
}

export default ProgressBar
// Number((((minute * 60 + second) * 1000) / duration * 100).toFixed(2))