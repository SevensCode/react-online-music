import React, { useEffect, useRef, useState } from 'react'
import './index.scss'

function HSearch(props) {
    const [state, setState] = useState({ isShow: false })
    const hSearch = useRef(null)
    const onFocus = () => setState({ isShow: true })
    const switchState = (e) => hSearch.current.contains(e.target) ? setState({ isShow: true }) : setState({ isShow: false })
    useEffect(() => {
        state.isShow ?
            document.body.addEventListener('click', switchState) :
            document.body.removeEventListener('click', switchState)
        return () => document.body.removeEventListener('click', switchState)
    }, [state.isShow])
    // 去搜索
    const goSearch = (e) => {
        e.stopPropagation()
        setState({ isShow: false })
    }
    return (
        <div ref={ hSearch } className={ 'hSearch' }>
            <input type="text" onFocus={ onFocus } placeholder={ '搜索歌曲、歌手、Mv' }/>
            <i className={ 'iconfont icon-sousuo search_icon' }/>
            <div className={ ['pullDownList', state.isShow && 'fadeIn'].join(' ') }>
                <ul className="hotRecommended">
                    <h3 className={ 'hotRecommended_title' }><i className={ 'iconfont icon-fire hotRecommended_icon' }/>热门推荐 </h3>
                    <li onClick={ goSearch }><span className={ 'hotRecommended_index' }>1</span><p className={ 'hotRecommented_name' }>周杰伦</p></li>
                    <li><span className={ 'hotRecommended_index' }>2</span><p className={ 'hotRecommented_name' }>大苏打是打赏</p></li>
                    <li><span className={ 'hotRecommended_index' }>3</span><p className={ 'hotRecommented_name' }>大苏打是打赏</p></li>
                    <li><span className={ 'hotRecommended_index' }>4</span><p className={ 'hotRecommented_name' }>大苏打是打赏</p></li>
                    <li><span className={ 'hotRecommended_index' }>5</span><p className={ 'hotRecommented_name' }>大苏打是打赏</p></li>
                    <li><span className={ 'hotRecommended_index' }>6</span><p className={ 'hotRecommented_name' }>大苏打是打赏</p></li>
                    <li><span className={ 'hotRecommended_index' }>7</span><p className={ 'hotRecommented_name' }>大苏打是打赏</p></li>
                    <li><span className={ 'hotRecommended_index' }>8</span><p className={ 'hotRecommented_name' }>大苏打是打赏</p></li>
                    <li><span className={ 'hotRecommended_index' }>9</span><p className={ 'hotRecommented_name' }>大苏打是打赏</p></li>
                    <li><span className={ 'hotRecommended_index' }>10</span><p className={ 'hotRecommented_name' }>大苏打是打赏</p></li>
                </ul>
                <div className="searchHistory">
                    <h3 className={ 'searchHistory_title' }><span>搜索历史</span><span>清空 <i className={ 'iconfont icon-top searchHistory_icon' }/></span></h3>
                    <div className={ 'searchHistory_list' }>
                        <span onClick={ goSearch } className={ 'searchHistory_item' }>周杰伦</span>
                        <span className={ 'searchHistory_item' }>sS ad a as </span>
                        <span className={ 'searchHistory_item' }>5161</span>
                        <span className={ 'searchHistory_item' }>5161</span>
                        <span className={ 'searchHistory_item' }>s撒旦阿斯顿撒是</span>
                        <span className={ 'searchHistory_item' }>5161</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HSearch