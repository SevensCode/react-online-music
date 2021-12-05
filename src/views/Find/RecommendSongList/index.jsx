import React, { useEffect, useState } from 'react'
import GraphicCard from '../../../components/GraphicCard'
import { getRecommendedSonglist } from '../../../api/songList'
import './index.scss'

function RecommendSongList(props) {
    const [ list, setList ] = useState([])

    useEffect(() => {
        // 获取推荐歌单
        getRecommendedSonglist().then(({ result, error }) => {
            if (error) return
            setList(result)
        })
    }, [])

    return (<div className={ 'recommendSongList' }>
        <span className="module-title">推荐歌单></span>
        <div className="songList-cardGroup">
            { list.map(({ id, name, picUrl, playCount }) => <GraphicCard
                key={ id }
                title={ name }
                imgUrl={ picUrl }
                playCount={ playCount }
            />) }
        </div>
    </div>)
}

export default RecommendSongList