import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
import indexReducer from "./indexReducer";
import searchReducer from "./searchReducer";

const reducer = combineReducers({
    musicReducer,
    indexReducer,
    searchReducer
})

export default reducer
