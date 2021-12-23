import React, { useEffect, useState } from 'react'
import './index.scss'
import { Button, Input, message } from 'antd'
import { Link } from 'react-router-dom'
import { logInWithPhone } from '../../api/common'
import store from 'store'
import { setDarkTheme, setLightTheme } from '../../theme'
import { useDispatch } from 'react-redux'
import { removeUserinfo, setUserinfo } from '../../redux/modules/user'
import Checkbox from 'antd/es/checkbox/Checkbox'
import { getPhoneCookie, removePhoneCookie, setPhoneCookie } from '../../utils/cookies'
import { CSSTransition } from 'react-transition-group'

const Login = (props) => {
    const { history } = props
    const dispatch = useDispatch()
    const [ form, setForm ] = useState({ phone: getPhoneCookie(), password: undefined })
    const [ status, setStatus ] = useState({
        theme: store.get('theme') === 'dark',
        loading: false,
        isRememberMobileNumber: store.get('isRememberMobileNumber')
    })
    useEffect(() => {
        // 首次进入登录页删除用户信息
        dispatch(removeUserinfo())
    }, [ dispatch ])
    !getPhoneCookie() && store.set('isRememberMobileNumber', false)
    const setTheme = () => {
        if (status.theme) {
            setStatus({ ...status, theme: false })
            setLightTheme()
        } else {
            setStatus({ ...status, theme: true })
            setDarkTheme()
        }
    }
    // 是否记住电话号码
    const isRememberPhoneNumber = (e) => setStatus({ ...status, isRememberMobileNumber: e.target.checked })
    const login = async () => {
        const { phone, password } = form
        const reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        if (!phone) return message.error('请输入手机号！')
        if (!password) return message.error('请输入密码！')
        if (!reg.test(phone)) return message.error('请输入规范的手机号！')
        setStatus({ ...status, loading: true })
        const { profile, code } = await logInWithPhone(form).finally(() => setStatus({ ...status, loading: false }))
        if (code !== 200) return message.error('账号或密码错误！')
        // setAuthCookie(cookie)
        // 储存 用户信息
        dispatch(setUserinfo(profile))
        // 判断是否记住手机号
        if (status.isRememberMobileNumber) {
            store.set('isRememberMobileNumber', true)
            setPhoneCookie(phone)
        } else {
            store.set('isRememberMobileNumber', false)
            removePhoneCookie()
        }
        message.success('登录成功！')
        history.push({ pathname: '/find' })
    }
    return (
        <div className={ 'login' }>
            <CSSTransition appear in timeout={ 300 } classNames={ 'enter' }>
                <div className="login-container">
                    <div className="reveal">
                        <h1>Seven Music</h1>
                    </div>
                    <div className="form-container">
                        <h1>Login</h1>
                        <div className="form">
                            <Input defaultValue={ form.phone }
                                   onChange={ e => setForm({ ...form, phone: e.target.value }) }
                                   className={ 'numberInput' }
                                   placeholder={ '请输入手机号' }/>
                            <Input.Password onChange={ e => setForm({ ...form, password: e.target.value }) }
                                            className={ 'passwordInput' } placeholder={ '请输入密码' }/>
                            <div className={ 'rememberPhoneNumber' }>
                                记住手机号
                                <Checkbox
                                    className={ 'check' }
                                    defaultChecked={ status.isRememberMobileNumber }
                                    onChange={ isRememberPhoneNumber }/>
                            </div>
                            <Button
                                onClick={ login }
                                loading={ status.loading }
                                className={ 'loginBtn' }
                                block>登录</Button>
                        </div>
                        <div className={ 'iconArea' }>
                            <i onClick={ history.goBack } className={ 'iconfont icon-rollback' }/>
                            <Link to={ '/' }><i className={ 'iconfont icon-zhuye' }/></Link>
                            {
                                status ?
                                    <i onClick={ setTheme } style={ { color: '#FFB948' } }
                                       className={ 'iconfont icon-yueliang' }/> :
                                    <i onClick={ setTheme } style={ { color: '#FFB948' } }
                                       className={ 'iconfont icon-icon-test' }/>
                            }
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Login