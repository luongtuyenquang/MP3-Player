import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
import indexReducer from "./indexReducer";
import searchReducer from "./searchReducer";
import durationTimeReducer from "./durationTimeReducer";
import darkModeReducer from "./darkModeReducer";

const reducer = combineReducers({
    musicReducer,
    indexReducer,
    searchReducer,
    durationTimeReducer,
    darkModeReducer
})

export default reducer
