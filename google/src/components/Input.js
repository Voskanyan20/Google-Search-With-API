import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {autoCompleteRequest, setTotalValue} from "../store/actions/search";
import Values from "./Values";

let searchTimeOut;

function Input(props) {
    const  [value, setValue] = useState("");
    const totalValue = useSelector(state=>state.search.totalValue)
    const dispatch = useDispatch();

    const handleChange =(ev)=>{
        setValue(ev.target.value);
        clearTimeout((searchTimeOut))
        searchTimeOut = setTimeout(()=>{
            if(ev.target.value){
                dispatch((autoCompleteRequest(ev.target.value)))
            }
        }, 400)
    }
    // useEffect(()=>{
    //     if(value){
    //         dispatch(autoCompleteRequest(value))
    //     }
    //
    // })
    return (
        <div>
            <input type={"text"}
                   value={value}
                   placeholder={"Search"}
                   onChange={handleChange}/>
            <button onClick={()=>dispatch(setTotalValue(value))}>Search</button>
            <h1>{totalValue}</h1>
            <Values/>
        </div>
    );
}

export default Input;