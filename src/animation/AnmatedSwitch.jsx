import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function AnmatedSwitch(props) {
    const { children } = props
    return (
        <Route render={ ({ location }) =>
            <TransitionGroup component={ null }>
                <CSSTransition key={ location.pathname } classNames={ 'page' } timeout={ 300 }>
                    <Switch location={ location }>{ children }</Switch>
                </CSSTransition>
            </TransitionGroup>
        }/>
    )
}

export default AnmatedSwitch