import { ACTIVE_SONG, PLAY_SONG_WHEN_CLICK, SEARCH_SONG } from "../constants"

export const activeSong = index => {
    return {
        type: ACTIVE_SONG,
        index
    }
}

export const playSongWhenClick = index => {
    return {
        type: PLAY_SONG_WHEN_CLICK,
        index
    }
}

export const searchSong = value => {
    return {
        type: SEARCH_SONG,
        value
    }
}