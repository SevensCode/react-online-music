import React, { useCallback, useEffect, useRef } from 'react'
import './index.scss'
import { getBanner } from '../../../api/common'
import { useStateWithCallbackLazy } from '../../../hooks'

function Banner(props) {
    const immutableState = useRef({
        // 当前激活的索引
        active: 0,
        // 下个
        next: 1,
        // 上个
        prve: 1,
    })
    const [ state, setState ] = useStateWithCallbackLazy({
        banners: [],
        // 当前激活的索引
        active: 0,
        // 下个
        next: 1,
        // 上个
        prve: 1,
        time: null
    })
    const auto = (state) => {
        const length = state.banners.length - 1
        const { current } = immutableState
        state.time = setInterval(() => {
            setState({
                ...state,
                active: current.active === length ? current.active = 0 : current.active += 1,
                next: current.next === length ? current.next = 0 : current.next += 1,
                prve: current.prve === length ? current.prve = 0 : current.prve += 1
            })
        }, 3000)
    }
    const actionSlider = useCallback((type, state) => {
        if (type === 'auto') {
            auto(state)
            return true
        }
        setState(({ active, next, prve, banners }) => {
            const length = banners.length - 1
            clearInterval(state.time)
            switch (type) {
                case 'next':
                    clearInterval(state.time)
                    active = active === length ? 0 : active + 1
                    next = next === length ? 0 : next + 1
                    prve = prve === length ? 0 : prve + 1
                    break
                case 'prve':
                    active = active === 0 ? length : active - 1
                    next = next === 0 ? length : next - 1
                    prve = prve === 0 ? length : prve - 1
                    break
                default:
            }
            immutableState.current.active = active
            immutableState.current.next = next
            immutableState.current.prve = prve
            return { ...state, active, next, prve }
        }, () => auto(state))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        getBanner().then(({ banners }) => {
            console.log(banners)
            setState({ ...state, banners, prve: banners.length - 1 }, state => {
                immutableState.current.prve = banners.length - 1
                actionSlider('auto', state)
            })
        })
        return () => clearInterval(state.time)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleButPrevious = () => {
        actionSlider('prve', state)
    }
    const handleButNext = () => {
        actionSlider('next', state)
    }
    const handleImgMouseMove = () => {
        clearInterval(state.time)
    }
    const handleImgMouseOut = () => {
        auto(state)
    }
    const handleIndicatorMouseMove = (i) => {
        const length = state.banners.length - 1
        const { current } = immutableState
        clearInterval(state.time)
        setState({
            ...state,
            active: current.active = i,
            next: i === length ? current.next = 0 : current.next = i + 1,
            prve: current.prve = i - 1
        })
    }
    const handleIndicatorMouseOut = () => {
        auto(state)
    }
    const matchClassName = i => {
        switch (i) {
            case state.active:
                return 'active'
            case state.next:
                return 'next'
            case state.prve:
                return 'previous'
            default:
        }
    }
    return (
        <div className="slider-container ">
            <div className="slider-box">
                <div className="slider-content">
                    { state.banners.map((item, i) => <div className={ [ 'slider', matchClassName(i) ].join(' ') }
                                                          key={ i }>
                        <img onMouseMove={ handleImgMouseMove } onMouseOut={ handleImgMouseOut }
                             src={ item.imageUrl }
                             alt=""/>
                    </div>) }
                </div>
                <span onClick={ handleButPrevious } className={ 'icon-previous' }><i
                    className={ 'iconfont icon-shangyiye' }/></span>
                <span onClick={ handleButNext } className={ 'icon-next' }><i
                    className={ 'iconfont icon-xiayiye' }/></span>
            </div>
            <div className="indicator">
                { state.banners.map((value, index) => <i
                    className={ state.active === index ? 'active' : '' }
                    onMouseMove={ () => handleIndicatorMouseMove(index) }
                    onMouseOut={ () => handleIndicatorMouseOut(index) }
                    key={ index }/>) }
            </div>
        </div>
    )
}


export default Banner