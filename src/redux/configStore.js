import {createStore, combineReducers} from "redux";
import contents from "./modules/contents"

const rootReducer = combineReducers({contents});

const store = createStore(rootReducer);

export default store;