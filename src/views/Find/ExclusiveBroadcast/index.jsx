import React, { useEffect, useState } from 'react'
import GraphicCard from '../../../components/GraphicCard'
import './index.scss'
import { exclusiveBroadcastEntryList } from '../../../api/exclusiveBroadcast'
import { newSongExpress } from '../../../api/music'

function ExclusiveBroadcast(props) {
    const [ list, setList ] = useState([])
    useEffect(() => {
        newSongExpress(0)
        // 获取独家放送
        exclusiveBroadcastEntryList().then(({ result, error }) => {
            if (error) return true
            setList(result)
        })
    }, [])

    return (<div className={ 'exclusiveBroadcast' }>
        <span className="module-title">独家放送></span>
        <div className="exclusiveBroadcast-cardGroup">
            { list.map(({ id, name, sPicUrl }) => <GraphicCard
                key={ id }
                title={ name }
                imgUrl={ sPicUrl }
            />) }
        </div>
    </div>)
}

export default ExclusiveBroadcast