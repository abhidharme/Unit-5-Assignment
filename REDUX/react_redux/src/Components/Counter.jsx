import { store } from "../Redux/store"
import { useDispatch , useSelector } from "react-redux";
import { addCount } from "../Redux/action";




export const Counter = ()=>{
// console.log(store.  getState());
const dispatch = useDispatch();

const count = useSelector((store)=> store.count);
    return(
        <div>
            <h3>Counter:{count}</h3>
            <button onClick={()=>{
                // Add 1
                dispatch(addCount(1));
                  //dispatch multiple things ex:
                // dispatch(mulCount(1));
                // dispatch(subCount(1));
            }}>
                ADD 1 
            </button>
        </div>

        
    )
}