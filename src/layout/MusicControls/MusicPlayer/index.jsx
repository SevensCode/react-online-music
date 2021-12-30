import React from 'react'
import './index.scss'
import ImgLazy from '../../../components/ImgLazy'
import { Tooltip } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import AuthorTags from '../../../components/AuthorTags'
import PlayType from '../../components/PlayType'
import Volume from '../../components/Volume'
import { useDispatch, useSelector } from 'react-redux'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Controller from '../Controller'
import { setNowPlayingListDisplay } from '../../../redux/modules/global'

function MusicPlayer(props) {
    const musicInfo = useSelector(state => state.global.musicInfo)
    const nowPlayingListDisplay = useSelector(state => state.global.nowPlayingListDisplay)
    const dispatch = useDispatch()
    const handleNowPlayingList = () => dispatch(setNowPlayingListDisplay(!nowPlayingListDisplay))

    return (
        <div id="muiscPlayer">
            <ProgressBar className="muiscPlayer-progressBar"/>
            <div className="main musicPlayer">
                {
                    musicInfo && <div className="muiscPlayer-info">
                        <ImgLazy className="muiscPlayer-coverPicture"
                                 src={ musicInfo.coverPicture + '?param=250y250' }/>
                        <div className="musicPlayer-content">
                            <p className="muiscPlayer-name text-oneLinesHide">{ musicInfo.name }</p>
                            <p className="muiscPlayer-author text-oneLinesHide"><AuthorTags data={ musicInfo.author }/></p>
                        </div>
                    </div>
                }
                <Controller className="musicPlayer-console"/>
                {
                    musicInfo.id && <div className="musicPlayer-otherAction">
                        <PlayType/>
                        <Volume/>
                        <Tooltip placement="top" title="下载">
                            <i className="iconfont icon-xiazai"/>
                        </Tooltip>
                        <Tooltip placement="top" title="播放列表">
                            <i onClick={ handleNowPlayingList }
                               className={ [ 'iconfont icon-bofangliebiao', nowPlayingListDisplay ? 'active' : '' ].join(' ') }/>
                        </Tooltip>
                        <DownOutlined/>
                    </div>
                }
            </div>
        </div>
    )
}

export default MusicPlayer