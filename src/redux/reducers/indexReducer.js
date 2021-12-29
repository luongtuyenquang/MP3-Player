import { ACTIVE_SONG, PLAY_SONG_WHEN_CLICK } from "../constants"

const initialState = {
    indexCurrent: ''
}
const indexReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIVE_SONG:
            return state = action.index
        case PLAY_SONG_WHEN_CLICK:
            return state = action.index
            default: return state
        }
}

export default indexReducer