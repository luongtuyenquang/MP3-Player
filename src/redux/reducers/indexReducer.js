import { ACTIVE_SONG } from "../constants"

const initialState = {
    indexCurrent: ''
}
const indexReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIVE_SONG:
            return state = action.index
        default: return state
    }
}

export default indexReducer