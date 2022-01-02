import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
import indexReducer from "./indexReducer";
import searchReducer from "./searchReducer";
import durationTimeReducer from "./durationTimeReducer";

const reducer = combineReducers({
    musicReducer,
    indexReducer,
    searchReducer,
    durationTimeReducer
})

export default reducer
