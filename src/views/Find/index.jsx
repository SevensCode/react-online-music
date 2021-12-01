import React from 'react'
import Banner from './Banner'
import RecommendSongList from './RecommendSongList'

function Find(props) {
    return (
        <div className="view-container">
            {/*banner*/ }
            <Banner/>
            {/*推荐歌单*/ }
            <RecommendSongList/>
        </div>
    )
}

export default Find