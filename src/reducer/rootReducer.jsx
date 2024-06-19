import todoReducer from "./reducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    todoApp: todoReducer,
});

export default rootReducer;