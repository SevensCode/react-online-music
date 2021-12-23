import React, { useState } from 'react'
import './index.scss'
import { useSelector } from 'react-redux'

function Playing({ className, onClick }) {
    const playStatus = useSelector(state => state.global.playStatus)
    const [ isShow, change ] = useState(false)
    const mouseOut = () => {
        if (playStatus === 3) return false
        console.log(1)
        change(false)
    }
    const mouseOver = () => {
        console.log(1)
        change(true)
    }
    return (
        <div onClick={ onClick } className={ [ 'audioStatus', 'playing', className ].join(' ') } onMouseOut={ mouseOut }
             onMouseOver={ mouseOver }>
            {
                isShow ? <i className="pause iconfont icon-zanting2"/>
                    : <React.Fragment>
                        <i className="playing-line"/>
                        <i className="playing-line"/>
                        <i className="playing-line"/>
                    </React.Fragment>
            }

        </div>
    )
}

export default Playing