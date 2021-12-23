import React from 'react'
import './index.scss'
import ImgLazy from '../../../components/ImgLazy'
import { Tooltip } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import AuthorTags from '../../../components/AuthorTags'
import PlayType from '../../components/PlayType'
import Volume from '../../components/Volume'
import { useSelector } from 'react-redux'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Controller from '../Controller'

function MusicPlayer(props) {
    const musicInfo = useSelector(state => state.global.musicInfo)
    return (
        <div id="muiscPlayer">
            <ProgressBar className="muiscPlayer-progressBar"/>
            <div className="main musicPlayer">
                <div className="muiscPlayer-info">
                    <ImgLazy className="muiscPlayer-coverPicture"
                             src={ musicInfo.coverPicture + '?param=250y250' }/>
                    <div className="musicPlayer-content">
                        <p className="muiscPlayer-name text-oneLinesHide">{ musicInfo.name }</p>
                        <p className="muiscPlayer-author text-oneLinesHide"><AuthorTags data={ musicInfo.author }/></p>
                    </div>
                </div>
                <Controller className="musicPlayer-console"/>
                <div className="musicPlayer-otherAction">
                    <PlayType/>
                    <Volume/>
                    <Tooltip placement="top" title="下载">
                        <i className="iconfont icon-xiazai"/>
                    </Tooltip>
                    <Tooltip placement="top" title="播放列表">
                        <i className="iconfont icon-bofangliebiao"/>
                    </Tooltip>
                    <DownOutlined/>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer