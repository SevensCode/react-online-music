import React from 'react'
import RecommendSongList from './RecommendSongList'
import NewSongs from './NewSongs'
import Banner from './Banner'
import ExclusiveBroadcast from './ExclusiveBroadcast'
import HotSinger from './HotSinger'


function Find(props) {
    return (
        <div className="view-container">
            {/*banner*/ }
            <Banner/>
            {/*/!*推荐歌单*/ }
            <RecommendSongList/>
            {/*/!*独家放送*/ }
            <ExclusiveBroadcast/>
            {/*/!*新歌*/ }
            <NewSongs/>
            {/*推荐歌手*/ }
            <HotSinger/>
        </div>
    )
}

export default Find