
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "../../redax/store";
import { Withdraw } from "../../redax/store";



const Accaunt = () => {
    const dispatch = useDispatch();
    const currantBelase = useSelector(state => state.balalse)
    return (
        <>
            <p>Balans: {currantBelase}</p>
            <button onClick={() => dispatch(deposit(10))}>Deposit</button>
            <button onClick={()=> dispatch(Withdraw(20))}>Withdraw</button>
        </>
    )
};

export default Accaunt;