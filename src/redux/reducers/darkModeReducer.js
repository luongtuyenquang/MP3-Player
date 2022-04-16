import { CHECKED_DARKMODE } from "../constants"

const initialState = {
    isChecked: false
}
const darkModeReducer = (state = initialState, action) => {
    switch(action.type){
        case CHECKED_DARKMODE:
            return state = action.checked
        default: return state
        }
}

export default darkModeReducer