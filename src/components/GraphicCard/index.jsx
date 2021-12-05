import React from 'react'
import './index.scss'
import ImgLazy from '../ImgLazy'

// 图文卡片
function GraphicCard({ title, playCount, imgUrl }) {
    return (
        <div className={ 'graphicCard' }>
            <div className={ 'graphicCard-imageArea' }>
                <ImgLazy className={ 'graphicCard-image' } src={ imgUrl }/>
                {
                    playCount &&
                    <div className="graphicCard-playVolume">
                        <i className="iconfont icon-24gl-play"/>
                        <span>{ playCount }</span>
                    </div>
                }

                <div className="graphicCard-playBtn">
                    <i className="iconfont icon-bofang1"/>
                </div>
            </div>
            <p className="graphicCard-title text-twoLinesHide">{ title }</p>
        </div>
    )
}

export default GraphicCard