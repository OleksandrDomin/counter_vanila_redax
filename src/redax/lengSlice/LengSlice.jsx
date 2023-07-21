const initualStateLocal = {
    lang: "ua",
};


export function localeReducer(state = initualStateLocal, action) {
    
    switch (action.type) {

    case "leng/changeLang":
        return {
            ...state,
            lang: action.pyload
        }
    default:
 return state;
}  
};

export function changeLeng(newLeng) {
    return {
        type: "leng/changeLang",
        pyload: newLeng,
    }
}
