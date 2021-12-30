import React from 'react'
import './index.scss'
import { Button } from 'antd'
import { ClearOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import AuthorTags from '../../components/AuthorTags'
import Duration from '../components/Duration'
import { clearMusicInfoAndPlaylist } from '../../redux/modules/global'

function PlayList(props) {
    const { songList } = useSelector(state => state.global.playList)
    const dispatch = useDispatch()
    const clearTheList = () => dispatch(clearMusicInfoAndPlaylist())
    return (
        <div className="playList">
            <div className="sub-module-title">正在播放</div>
            <div className="playList-action-row">
                <span className="playList-total">共{ songList.length }首</span>
                <div className="playList-action-group">
                    <Button disabled={ !songList.length } onClick={ clearTheList } type="text" icon={ <ClearOutlined/> }>清空列表</Button>
                </div>
            </div>
            <div className="divder"/>
            <ul className="playList-list">
                {
                    songList.map(music =>
                        <li key={ music.id }>
                            <span className="name text-oneLinesHide">{ music.name }</span>
                            <AuthorTags className="author text-oneLinesHide" data={ music.author }/>
                            <Duration className="duration" duration={ music.duration }/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default PlayList