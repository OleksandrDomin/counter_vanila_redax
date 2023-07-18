import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initualState = {
    balalse: 0,
}


function rootReducer(state = initualState, action) {

    switch (action.type) {
        case "accaunt/deposit":
            return {
                ...state,
                balalse: state.balalse + action.pyload
            }
        case "accaunt/withdraw":
              return {
                ...state,
                balalse: state.balalse - action.pyload
            }
            default: return state;
    };
   
}
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);


 export function deposit (value) {
    return {
        type: "accaunt/deposit",
        pyload: value,

    }
};

 export function Withdraw(value) {
    return {
        type: "accaunt/withdraw",
        pyload: value,
    }
}

