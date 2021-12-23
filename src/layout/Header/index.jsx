import React from 'react'
import NavBar from './NavBar'
import './index.scss'
import HSearch from './HSearch'
import { Switch } from 'antd'
import { setDarkTheme, setLightTheme } from '../../theme'
import store from 'store'
import User from './User'

function Header(props) {
    const onChange = (status) => {
        status ? setDarkTheme() : setLightTheme()
        store.set('theme', status ? 'dark' : 'light')
    }
    return (
        <div className={ 'header-container' }>
            <div className="left">
                {/*<img className={ 'logo' } src={ require('../../assets/image/logo.png').default } alt=""/>*/ }
                <NavBar/>
            </div>
            <div className="right">
                <HSearch/>
                <Switch
                    onChange={ onChange }
                    defaultChecked={ store.get('theme') === 'dark' }
                    className={ 'themeSwitching' }
                    checkedChildren={ <i style={ { color: '#FFB948' } } className={ 'iconfont icon-yueliang' }/> }
                    unCheckedChildren={ <i style={ { color: '#FFB948' } } className={ 'iconfont icon-icon-test' }/> }/>
                <User/>
            </div>
        </div>
    )
}

export default Header