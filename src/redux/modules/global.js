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

// 暂停
export const audioPause = createAsyncThunk('global/audioPause', (payload, { dispatch, getState }) => {
    const { global: { audioInstance } } = getState()
    audioInstance.pause()
    dispatch(setPlayStatus(0))
})

// 下一首
export const audioNextSong = createAsyncThunk('global/audioNextSong', (dispatch, getState) => {

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
            duration: undefined,
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
        isDrag: false,
        // 正在播放列表是否显示
        nowPlayingListDisplay: false
    },
    reducers: {
        // 设置音乐信息
        setMusicInfo(state, { payload }) {
            state.musicInfo = { ...payload, musicUrl: `https://music.163.com/song/media/outer/url?id=${ payload.id }.mp3` }
            state.startTime = { minute: 0, second: 0 }
        },
        // 覆盖播放列表
        overwritePlaylist(state, { payload }) {
            state.playList = payload
        },
        // 将音乐插入到播放列表
        insertMusicIntoThePlaylist(state, { payload }) {
            state.playList.songList.push(payload)
        },
        // 处理播放类型
        handlePlayType(state) {
            let num = 3
            if (state.playList.id) num = 4
            state.playTypeStatus === num ? state.playTypeStatus = 0 : state.playTypeStatus += 1
        },
        // 更新当前播放时间
        updateCurrentPlayTime(state, { payload }) {
            state.currentPlayTime = payload
        },
        // 更新进度条
        updateSchedule(state, { payload }) {
            state.schedule = payload
        },
        // 设置播放时长
        setDuration(state, { payload }) {
            state.duration = payload
        },
        // 设置是否拖拽进度条
        setHasDragProgressBar(state, { payload }) {
            state.isDrag = payload
        },
        // 设置播放状态
        setPlayStatus(state, { payload }) {
            state.playStatus = payload
        },
        // 设置正在播放列表是否显示
        setNowPlayingListDisplay(state, { payload }) {
            state.nowPlayingListDisplay = payload
        },
        // 清空音乐信息和歌单
        clearMusicInfoAndPlaylist(state) {
            state.musicInfo = {}
            state.playList.id = undefined
            state.playList.songList = []
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
    overwritePlaylist,
    handlePlayType,
    updateCurrentPlayTime,
    updateSchedule,
    setHasDragProgressBar,
    setDuration,
    setPlayStatus,
    insertMusicIntoThePlaylist,
    setNowPlayingListDisplay,
    clearMusicInfoAndPlaylist
} = userSlice.actions

export default userSlice.reducer