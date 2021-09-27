import React, { useState } from 'react'
import { Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './index.scss'
import { Link } from 'react-router-dom'

function User(props) {
    const [state, setState] = useState({ isShow: false })
    const moveIn = () => {
        setState({ isShow: true })
    }
    const moveOut = () => {
        setState({ isShow: false })
    }
    return (
        <div className="user" onMouseOut={ moveOut } onMouseMove={ moveIn }>
            <Avatar size={ 'large' } icon={ <UserOutlined/> }/>
            <div className={ ['user-no-login', state.isShow && 'fadeIn'].join(' ') }>
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
                    <Button><Link to={ '/Login' }>登录</Link></Button>
                    <Button>去注册</Button>
                </div>
            </div>
        </div>
    )
}

export default User