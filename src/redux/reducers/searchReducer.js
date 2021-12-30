import { SEARCH_SONG } from "../constants"

const initialState = {
    valueInput: ''
}
const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_SONG:
            return state = action.value
        default: return state
        }
}

export default searchReducer