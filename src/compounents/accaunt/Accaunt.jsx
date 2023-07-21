
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "../../redax/accauntSlice/AccauntSlice";
import { withdraw } from "../../redax/accauntSlice/AccauntSlice";
import { useState } from "react";


const Accaunt = () => {
    const dispatch = useDispatch();
    const currantBelase = useSelector(state => state.accauntReducer.balanse);
    
    const [inputValue, setinputValue] = useState("");

    function resetInput()
    {
        return setinputValue("");
    }

    return (
        <>
            <p>Balans: {currantBelase}</p>
            <div>
        <label>
            <input type="Number" placeholder="Namber..." value={inputValue} onChange={e => setinputValue(Number(e.target.value))}>
            </input> Enter your namber
        </label>
            </div>
            <button onClick={() => { dispatch(deposit(inputValue)); resetInput() }}>Deposit</button>
            <button onClick={() => { dispatch(withdraw(inputValue)); resetInput() }}>Withdraw</button>
        </>
    )
};

export default Accaunt;