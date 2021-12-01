import React from 'react'
import './index.scss'

// 图文卡片
function GraphicCard({ title, playVolume, imgUrl }) {
    return (
        <div className={ 'graphicCard' }>
            <div className={ 'graphicCard-imageArea' }>
                <img className={ 'graphicCard-image' } src={ imgUrl } alt=""/>
                <span className="graphicCard-playVolume">
                    <i className="iconfont icon-24gl-play"/>
                    <span>{ playVolume }</span>
                </span>
                <div className="graphicCard-playBtn">
                    <i className="iconfont icon-bofang1"/>
                </div>
            </div>
            <p className="graphicCard-title text-twoLinesHide">{ title }</p>
        </div>
    )
}

export default GraphicCard