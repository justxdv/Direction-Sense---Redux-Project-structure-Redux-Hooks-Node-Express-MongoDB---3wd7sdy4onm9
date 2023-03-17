import React from 'react'
import '../styles/App.css';
import {useSelector,useDispatch} from "react-redux";
import { onNorth,onSouth,onEast,onWest } from '../actions/index.js';
const App = () => {
const direction = useSelector((state)=>state.tellDirection);
//code here

  return (
    <div id="main">
      
       
       <h1>Direction Sense  </h1>
       <div className='styles'><button onClick={} id='north'>N</button></div> 
        <button onClick={} id='west'>W</button>
        <input id='input' value={direction}/>
        <button onClick={} id='east'>E</button><br/>
        <div className='styles'><button onClick={} id='south'>S</button></div>


    </div>
  )
}


export default App;
