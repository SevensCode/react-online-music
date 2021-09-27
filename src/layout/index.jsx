import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Find from '../views/Find'
import Header from './Header'
import Footer from './Footer'
import NotFound from '../views/NotFound'
import './index.scss'

function Layout(props) {
    return (
        <div className={ 'layout' }>
            <Header/>
            <Switch>
                <Route path={ '/find' } component={ Find }/>
                <Redirect exact from={ '/' } to={ '/find' }/>
                <Route component={ NotFound }/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default Layout
