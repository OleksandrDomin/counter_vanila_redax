import { useSelector, useDispatch } from "react-redux"
import { changeLeng } from "../../redax/lengSlice/LengSlice";


export const Switcher = () => {
    const initLeng = useSelector(state => state.localeReducer.lang);
  
    const dispatch = useDispatch();

    return (
    <select value={initLeng} onChange={(evt)=> dispatch(changeLeng(evt.target.value))}>
            <option value="en">EN</option>
            <option value="ua">UA</option>
            <option value="cz">CZ</option>
    </select>

    )
}