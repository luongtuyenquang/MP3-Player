import { SAVE_DURATION_TIME } from "../constants"

const initialState = []

const durationTimeReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_DURATION_TIME:
            const newState = [...state]
            newState.push(action.time)
            return newState
        default: return [...state]
        }
}

export default durationTimeReducer