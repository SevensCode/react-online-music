import React from 'react'
import ImgLazy from '../ImgLazy'
import './index.scss'

function SingerCard({ src, name }) {
    return (
        <div className="singerCard">
            <div className="singerCard-coverPicture-container">
                <ImgLazy src={ src + '?param=150y150' } className="singerCard-coverPicture"/>
            </div>
            <p className="singerCard-name">{ name }</p>
        </div>
    )
}

export default SingerCard