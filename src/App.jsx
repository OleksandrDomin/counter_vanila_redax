import { useSelector } from "react-redux"
import Accaunt from "./compounents/accaunt/Accaunt";
import { Switcher } from "./compounents/lengSwitcher/LengSwitcher";

function App() {
  const initLeng = useSelector(state => state.localeReducer.lang);
  return (
    <>
      <Switcher />
      <hr />
      <h3>Current leng: {initLeng}</h3>
      <Accaunt/>
      </>
  );
}

export default App;
