import React from "react";
import "./style.css";
 import {useSelector,useDispatch} from 'react-redux'
export default function App() {
  const counter= useSelector(state=> state.counter);
    const dispatch=useDispatch();
  return (
    

    <div>
      <h1>counter: {counter}</h1>
   <button onClick={(()=>dispatch({type:"INCREMENT"}))}> INCREMENT </button>
   <button onClick={(()=>dispatch({type:"DECREMENT"}))}> DECREMENT </button>

    </div>
  );
}
