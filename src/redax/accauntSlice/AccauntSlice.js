
const initualStateBalence = {
    balanse: 0,
};

 function accauntReducer (state = initualStateBalence, action) {

    switch (action.type) {
        case "accaunt/deposit":
            return {
                ...state,
                balanse: state.balanse + action.pyload
            }
        case "accaunt/withdraw":
              return {
                ...state,
                balanse: state.balanse - action.pyload
            }
            default: return state;
    };
   
};

 export function deposit (value) {
    return {
        type: "accaunt/deposit",
        pyload: value,

    }
};

 export function withdraw(value) {
    return {
        type: "accaunt/withdraw",
        pyload: value,
    }
};

export default accauntReducer; 