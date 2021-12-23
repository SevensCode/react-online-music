import React from 'react'
import './index.scss'
import PlayButton from '../MusicStatus/Play'
import ImgLazy from '../ImgLazy'
import { digitalConversion } from '../../utils'

// 图文卡片
function GraphicCard({ title, playCount, imgUrl }) {
    return (
        <div className={ 'graphicCard' }>
            <div className={ 'graphicCard-imageArea' }>
                <ImgLazy src={ imgUrl + '?param=250y250' }/>
                {
                    playCount &&
                    <div className="graphicCard-playVolume">
                        <i className="iconfont icon-24gl-play"/>
                        <span>{ digitalConversion(playCount) }</span>
                    </div>
                }
                <PlayButton className="graphicCard-play"/>
            </div>
            <p className="graphicCard-title text-twoLinesHide">{ title }</p>
        </div>
    )
}

export default GraphicCard