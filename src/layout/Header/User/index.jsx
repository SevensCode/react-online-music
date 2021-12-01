import React, { useRef } from 'react'
import { Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './index.scss'
import '../../../animation/index.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useClickOnOtherElementsToChangeState } from '../../../hooks'
import { CSSTransition } from 'react-transition-group'


function User(props) {
    const userRef = useRef()
    const [ isShow, change ] = useClickOnOtherElementsToChangeState(userRef.current)
    const userinfo = useSelector(state => state.user.userinfo)
    const moveIn = () => !userinfo && change(true)
    return (
        <div className="user" ref={ userRef } onMouseMove={ moveIn }>
            <Avatar size={ 'large' } src={ userinfo && userinfo.avatarUrl } icon={ <UserOutlined/> }/>
            <div className={ 'user-nickname' }>{ userinfo && userinfo.nickname }</div>
            <CSSTransition in={ isShow } unmountOnExit classNames="zoomFade" timeout={ 300 }>
                <div className="user-no-login">
                    <p className={ 'title' }>- 登录后可专享 -</p>
                    <div className="user-info-intro">
                        <div className="item">
                            <i className={ 'iconfont icon-bofangjilu' }/>
                            <span>试听记录同步</span>
                        </div>
                        <div className="item">
                            <i className={ 'iconfont icon-pinglun2' }/>
                            <span>发表评论</span>
                        </div>
                        <div className="item">
                            <i className={ 'iconfont icon-yinle' }/>
                            <span>下载音乐</span>
                        </div>
                    </div>
                    <div className="user-info-action">
                        <Button><Link to={ '/login' }>登录</Link></Button>
                        <Button>去注册</Button>
                    </div>
                </div>
            </CSSTransition>
            <ul className="dropDownMenu">
                <li>个人中心</li>
                <li>退出登录</li>
            </ul>
        </div>
    )
}

export default User