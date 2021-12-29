import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
import indexReducer from "./indexReducer";

const reducer = combineReducers({
    musicReducer,
    indexReducer
})

export default reducer
