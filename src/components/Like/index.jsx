import React, { useCallback, useState } from 'react'
import { HeartFilled, HeartOutlined, SyncOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { getUserLikeMusicId, isLikeMusic } from '../../api/user'
import { message } from 'antd'
import { setLikeIds } from '../../redux/modules/user'

function Like({ id: musicId, size }) {
    const dispatch = useDispatch()
    const [ isLike, changeLike ] = useState(!!useSelector(state => state.user.likeIds).find(id => id === musicId))
    const userinfo = useSelector(state => state.user.userinfo)
    const [ isLoading, changeLoading ] = useState(false)
    const asyncChangeLike = useCallback(async (like) => {
        if (!userinfo) return message.warning('请先登录')
        changeLoading(true)
        const { error } = await isLikeMusic(musicId, like).finally(() => changeLoading(false))
        if (error) return message.error('好像有亿点问题，操作失败！！！')
        changeLike(like)
        like ? message.success('已添加到我喜欢的音乐') : message.success('取消喜欢成功')
        const { ids } = await getUserLikeMusicId(userinfo.userId)
        dispatch(setLikeIds(ids))
    }, [ dispatch, musicId, userinfo ])
    if (isLoading) {
        return <SyncOutlined spin/>
    }
    if (isLike) {
        return <HeartFilled onClick={ () => asyncChangeLike(false) } style={ { cursor: 'pointer', fontSize: size } } className="like"/>
    }
    return <HeartOutlined onClick={ () => asyncChangeLike(true) } style={ { cursor: 'pointer', fontSize: size } } className="notLike"/>
}

export default Like