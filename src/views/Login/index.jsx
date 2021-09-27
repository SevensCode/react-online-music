import React, { useState } from 'react'
import './index.scss'
import { Button, Input, message } from 'antd'
import { Link } from 'react-router-dom'
import { logInWithPhone } from '../../api/common'
import store from 'store'
import { setDarkTheme, setLightTheme } from '../../theme'

function Login(props) {
    const { history } = props
    
    const [form, setForm] = useState({ phone: undefined, password: undefined })
    const [status, setStatus] = useState(store.get('theme') === 'dark')
    const setTheme = () => {
        if (status) {
            setStatus(false)
            setLightTheme()
        } else {
            setStatus(true)
            setDarkTheme()
        }
    }
    const login = async () => {
        const { phone, password } = form
        const reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        if (!phone) return message.error('请输入手机号！')
        if (!password) return message.error('请输入密码！')
        if (!reg.test(phone)) return message.error('请输入规范的手机号！')
        const { profile, code } = await logInWithPhone(form)
        if (code !== 200) return message.error('账号或密码错误！')
    }
    return (
        <div className={ 'login' }>
            <div className="login-container">
                <div className="reveal">
                    <h1>Seven Music</h1>
                </div>
                <div className="form-container">
                    <h1>Login</h1>
                    <div className="form">
                        <Input onChange={ e => setForm({ ...form, phone: e.target.value }) } className={ 'numberInput' } placeholder={ '请输入手机号' }/>
                        <Input.Password onChange={ e => setForm({ ...form, password: e.target.value }) } className={ 'passwordInput' } placeholder={ '请输入密码' }/>
                        <Button onClick={ login } className={ 'loginBtn' } block>登录</Button>
                    </div>
                    <div className={ 'iconArea' }>
                        <i onClick={ history.goBack } className={ 'iconfont icon-rollback' }/>
                        <Link to={ '/' }><i className={ 'iconfont icon-zhuye' }/></Link>
                        {
                            status ?
                                <i onClick={ setTheme } style={ { color: '#FFB948' } } className={ 'iconfont icon-yueliang' }/> :
                                <i onClick={ setTheme } style={ { color: '#FFB948' } } className={ 'iconfont icon-icon-test' }/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login