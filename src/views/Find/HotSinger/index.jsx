import React, { useEffect, useState } from 'react'
import './index.scss'
import { hotSingers } from '../../../api/Singer'
import SingerCard from '../../../components/SingerCard'

function HotSinger(props) {
    const [ list, setList ] = useState([])
    useEffect(() => {
        hotSingers({ limit: 30, page: 1 }).then(({ artists, error }) => {
            if (error) return true
            setList(artists)
        })
    }, [])

    return (<div className={ 'HotSinger' }>
        <span className="module-title">热门歌手></span>
        <div className="HotSinger-group">
            {
                list.map(({ picUrl, id, name }, index) => <SingerCard name={ name } key={ id } src={ picUrl }/>)
            }
        </div>
    </div>)
}

export default HotSinger