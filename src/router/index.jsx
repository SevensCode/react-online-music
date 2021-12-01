import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../layout'
import Login from '../views/Login'
import NotFound from '../views/NotFound'

function RouterConfig(props) {
    console.log(props)
    return (
        <Switch>
            <Route exact path={ '/login' } component={ Login }/>
            <Route path={ '/' } component={ Layout }/>
            <Route component={ NotFound }/>
        </Switch>
    )
}

export default RouterConfig