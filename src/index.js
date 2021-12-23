import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './assets/css/index.scss'
import './animation/index.scss'
import App from './App'
import { HashRouter } from 'react-router-dom'
import localStore from 'store'
import { setDarkTheme, setLightTheme } from './theme'
import { Provider } from 'react-redux'
import store from './redux/store'

// 设置主题
localStore.get('theme') === 'dark' ? setDarkTheme() : setLightTheme()

ReactDOM.render(
    <Provider store={ store }>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)

