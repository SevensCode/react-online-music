import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

/**
 * 播放逻辑
 *      1、页面加载完成后创建 audio Dom
 *      2、
 * */
export const audioPlay = createAsyncThunk('global/audioPlay', (payload, { dispatch, getState }) => {
    const { global: { audioInstance, musicInfo } } = getState()
    if (audioInstance.src !== musicInfo.musicUrl) audioInstance.src = musicInfo.musicUrl
    dispatch(setPlayStatus(1))
    console.log(audioInstance.duration)
    // 音频可以播放了
    audioInstance.addEventListener('canplay', () => {
        dispatch(setDuration(audioInstance.duration))
    })
    audioInstance.addEventListener('timeupdate', () => {
        const { global: { isDrag } } = getState()
        if (isDrag) return false
        const currentTime = Math.floor(audioInstance.currentTime)
        const minute = Math.floor(currentTime / 60)
        const second = currentTime % 60
        // 更新播放时间
        dispatch(updateCurrentPlayTime({ minute, second }))
        // 更新进度条
        dispatch(updateSchedule(currentTime))
    })
    audioInstance.play().then((e) => dispatch(setPlayStatus(2)))
})

export const audioPause = createAsyncThunk('global/audioPause', (payload, { dispatch, getState }) => {
    const { global: { audioInstance } } = getState()
    audioInstance.pause()
    dispatch(setPlayStatus(0))
})

const userSlice = createSlice({
    name: 'global',
    initialState: {
        // 音乐信息
        musicInfo: {
            name: undefined,
            coverPicture: undefined,
            author: undefined,
            musicUrl: undefined,
            id: undefined
        },
        duration: 0,
        // 播放列表
        playList: {
            id: undefined,
            songList: []
        },
        // 播放状态 0未播 1加载中 2播放中
        playStatus: 0,
        // 播放类型状态 0
        playTypeStatus: 0,
        // 音量
        volume: 0,
        currentPlayTime: {
            minute: 0,
            second: 0
        },
        schedule: 0,
        audioInstance: new Audio(),
        // 是否拖拽进度条
        isDrag: false
    },
    reducers: {
        setMusicInfo(state, { payload }) {
            state.musicInfo = { ...payload, musicUrl: `https://music.163.com/song/media/outer/url?id=${ payload.id }.mp3` }
            state.startTime = { minute: 0, second: 0 }
        },
        setSongList(state, { payload }) {
            state.songList = payload
        },
        handlePlayType(state) {
            state.playTypeStatus === 4 ? state.playTypeStatus = 0 : state.playTypeStatus += 1
        },
        updateCurrentPlayTime(state, { payload }) {
            state.currentPlayTime = payload
        },
        updateSchedule(state, { payload }) {
            state.schedule = payload
        },
        setDuration(state, { payload }) {
            state.duration = payload
        },
        setDrag(state, { payload }) {
            state.isDrag = payload
        },
        setPlayStatus(state, { payload }) {
            state.playStatus = payload
        }
    },
    extraReducers: {
        [audioPlay.rejected](state, action) {
            console.log(state)
            console.log(action)
        }
    }
})


export const {
    setMusicInfo,
    setSongList,
    handlePlayType,
    updateCurrentPlayTime,
    updateSchedule,
    setDrag,
    setDuration,
    setPlayStatus
} = userSlice.actions

export default userSlice.reducer