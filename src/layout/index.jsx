import React, { useEffect, useRef } from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'
import Find from '../views/Find'
import Header from './Header'
import Footer from './Footer'
import NotFound from '../views/NotFound'
import './index.scss'
import Leaderboard from '../views/Leaderboard'
import { useSelector } from 'react-redux'
import { message } from 'antd'
import AnmatedSwitch from '../animation/AnmatedSwitch'


function Layout(props) {
    const authPath = useRef([ '/user' ])
    const userinfo = useSelector(state => state.user.userinfo)
    const history = useHistory()
    useEffect(() => {
        if (authPath.current.includes(props.location.pathname) && !userinfo) {
            message.info('登录后可访问！')
            history.push('/login')
        }
    }, [ props.location, userinfo, history ])
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
        </div>
    )
}

export default Layout
