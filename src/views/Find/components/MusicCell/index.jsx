import React from 'react'
import './index.scss'
import MvTab from '../../../../components/MvTab'
import ImgLazy from '../../../../components/ImgLazy'
import AuthorTags from '../../../../components/AuthorTags'
import Like from '../../../../components/Like'
import { useDispatch } from 'react-redux'
import { audioPause, audioPlay, insertMusicIntoThePlaylist, setMusicInfo } from '../../../../redux/modules/global'
import AudioStatus from '../../../../components/MusicStatus'

function MusicCell({ data }) {
    const dispatch = useDispatch()
    const play = async () => {
        const musicIofo = {
            name: data.name,
            coverPicture: data.picUrl,
            author: data.song.artists.map(item => ({ name: item.name, id: item.id })),
            duration: data.song.duration,
            id: data.id
        }
        dispatch(setMusicInfo(musicIofo))
        dispatch(insertMusicIntoThePlaylist(musicIofo))
        dispatch(audioPlay())
    }
    return (
        <div className="MusicCell">
            <div className="MusicCell-coverPictureContainer">
                <ImgLazy className="MusicCell-coverPicture" src={ data.picUrl + '?param=150y150' }/>
                <AudioStatus playOnClick={ play } pausedOnClick={ () => dispatch(audioPause()) } id={ data.id } className="MusicCell-play"/>
            </div>
            <div className="MusicCell-content">
                <div className="MusicCell-info">
                    <p className="MusicCell-name text-oneLinesHide">{ data.name }{ data.song.alias.map(item => `（${ item }）`) }</p>
                    <p className="MusicCell-album text-oneLinesHide">《{ data.song.album.name }》</p>
                    <p className="MusicCell-author text-oneLinesHide">{ !!data.song.mvid && <MvTab/> }
                        <AuthorTags data={ data.song.artists.map(item => ({ name: item.name, id: item.id })) }/>
                    </p>
                </div>
                <div className="MusicCell-action">
                    <Like size="26px" id={ data.id }/>
                </div>
            </div>
        </div>
    )
}

export default MusicCell