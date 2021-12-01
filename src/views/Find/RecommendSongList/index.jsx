import React, { useEffect, useState } from 'react'
import GraphicCard from '../../../components/GraphicCard'
import { getRecommendedSonglist } from '../../../api/find'
import './index.scss'

function RecommendSongList(props) {
    const [ songList, setSongList ] = useState([])
    useEffect(() => {
        const recommendedSonglist = async () => {
            const { result, error } = await getRecommendedSonglist()
            if (error) return
            setSongList(result)
        }
        recommendedSonglist()
    }, [])

    return (<div>
        <span className="module-title">推荐歌单></span>
        <div className="cardGroup">
            { songList.map(value => <GraphicCard
                key={ value.id }
                title={ value.name }
                imgUrl={ value.picUrl }
                playVolume={ value.playCount }
            />) }
        </div>
    </div>)
}

export default RecommendSongList