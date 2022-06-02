import { useDispatch , useSelector } from "react-redux";
import { addCount } from "./Redux/action";

function App() {

  const dispatch = useDispatch();
  const count = useSelector((store)=> store.count);

  return (
    <div className="App">
      <h1>COunt:{count}</h1>
      <button onClick={()=>{
                dispatch(addCount(1));
            }}>
                ADD 1 
            </button>
    </div>
  )
}

export default App
