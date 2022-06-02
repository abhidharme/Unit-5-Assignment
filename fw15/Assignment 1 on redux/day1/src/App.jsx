import {useDispatch , useSelector} from "react-redux"
import { addCouunt } from "./Redux/Counter/action";
function App() {

  const dispatch = useDispatch();
  const {count} = useSelector((store)=>store.count);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>dispatch(addCouunt(1))} >ADD</button>
    </div>
  )
}

export default App
