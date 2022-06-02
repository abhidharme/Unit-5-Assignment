import { useDispatch, useSelector } from "react-redux"
import { addCount, reduceCount } from "./Redux/action";

function App() {

  const dispatch = useDispatch();
const count = useSelector((store)=>store.count)
  return (
    <div className="App">
    <h2>Count:{count}</h2>
    <button onClick={()=>dispatch( addCount(1) )}  >ADD</button>   
    <button onClick={()=>dispatch(reduceCount(1) )} >REDUCE</button>  
    </div>
  )
}

export default App
