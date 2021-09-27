import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './assets/css/index.scss'
import App from './App'
import { HashRouter } from 'react-router-dom'
import store from 'store'
import { setDarkTheme, setLightTheme } from './theme'

store.get('theme') === 'dark' ? setDarkTheme() : setLightTheme()

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('root')
)

