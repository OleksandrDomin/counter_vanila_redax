import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import accauntReducer from "./accauntSlice/AccauntSlice";
import { localeReducer } from "./lengSlice/LengSlice"


const rootReducer = combineReducers({
accauntReducer,
localeReducer,
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);



