import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

function NavBar(props) {
    const [navList] = useState([
        {
            path: '/find',
            label: '发现'
        },
        {
            path: '/leaderboard',
            label: '排行榜'
        },
        {
            path: '/singer',
            label: '歌手'
        }, {
            path: '/mv',
            label: 'Mv'
        }
    
    ])
    const click = () => {
        console.log(11)
    }
    return (
        <div className={ 'navBar' }>
            { navList.map(item => <NavLink onClick={ click } key={ item.path } to={ item.path }>{ item.label }</NavLink>) }
            <span className="activeLine"/>
        </div>
    )
}

export default NavBar