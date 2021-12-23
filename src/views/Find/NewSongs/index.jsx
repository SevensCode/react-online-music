import React, { useEffect, useState } from 'react'
import './index.scss'
import { recommendNewMusic } from '../../../api/music'
import MusicCell from '../components/MusicCell'

function NewSongs(props) {
    const [ list, setList ] = useState([])
    useEffect(() => {
        recommendNewMusic(12).then(({ result, error }) => {
            if (error) return true
            setList(result)
        })
    }, [])

    return (
        <div className={ 'newSongs' }>
            <span className="module-title">新歌推送></span>
            <div className="newSongs-cellGroup">
                { list.map((value, i) => i < 12 && <MusicCell data={ value } key={ value.id }/>) }
            </div>
        </div>
    )
}

export default NewSongs