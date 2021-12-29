import { ACTIVE_SONG, PLAY_SONG_WHEN_CLICK } from "../constants"

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