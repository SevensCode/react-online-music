import React, { useEffect } from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'
import Find from '../views/Find'
import Header from './Header'
import Footer from './Footer'
import NotFound from '../views/NotFound'
import './index.scss'
import Leaderboard from '../views/Leaderboard'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'
import AnmatedSwitch from '../animation/AnmatedSwitch'
import { getUserLikeMusicId } from '../api/user'
import { setLikeIds } from '../redux/modules/user'
import MusicPlayer from './MusicControls/MusicPlayer'
import { CSSTransition } from 'react-transition-group'
import PlayList from './PlayList'
// 需要认证的 path
const authPath = [ '/user' ]

function Layout(props) {
    const userinfo = useSelector(state => state.user.userinfo)
    const musicInfo = useSelector(state => state.global.musicInfo)
    const nowPlayingListDisplay = useSelector(state => state.global.nowPlayingListDisplay)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        if (authPath.includes(props.location.pathname) && !userinfo) {
            message.info('登录后可访问！')
            history.push('/login')
        }
    }, [ props.location, userinfo, history ])
    useEffect(() => {
        if (userinfo) getUserLikeMusicId(userinfo.userId).then(({ ids, error }) => {
            if (error) message.error('??有问题')
            dispatch(setLikeIds(ids))
        })

    }, [ dispatch, userinfo ])
    return (
        <div className={ 'layout' }>
            <Header/>
            <div className="main">
                <AnmatedSwitch>
                    <Route path={ '/find' } component={ Find }/>
                    <Route path={ '/leaderboard' } component={ Leaderboard }/>
                    <Redirect exact from={ '/' } to={ '/find' }/>
                    <Route component={ NotFound }/>
                </AnmatedSwitch>
            </div>
            <Footer/>
            <CSSTransition unmountOnExit in={ nowPlayingListDisplay } classNames="rightZoomFade" timeout={ 300 }>
                <PlayList/>
            </CSSTransition>
            <CSSTransition unmountOnExit in={ !!musicInfo.id } classNames="bottomLineIn" timeout={ 300 }>
                <MusicPlayer/>
            </CSSTransition>
        </div>
    )
}

export default Layout
