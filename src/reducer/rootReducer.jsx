import todoApp from "./reducer";

import { combineReducers } from "redux"

const rootReducer = combineReducers({
    todoApp
});

export default rootReducer;