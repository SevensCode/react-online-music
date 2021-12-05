import React from 'react'
import Banner from './Banner'
import RecommendSongList from './RecommendSongList'
import ExclusiveBroadcast from './ExclusiveBroadcast'

function Find(props) {
    return (
        <div className="view-container">
            {/*banner*/ }
            <Banner/>
            {/*推荐歌单*/ }
            <RecommendSongList/>
            {/*独家放送*/ }
            <ExclusiveBroadcast/>
            {/*新歌*/ }
        </div>
    )
}

export default Find