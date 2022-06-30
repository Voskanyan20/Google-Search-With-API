import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {autoCompleteSuccess, GET_AUTOCOMPLETE_SUCCESS} from "../store/actions/search";
import handleSearch from '../store/sagas/search'

function Values(props) {
    const dispatch = useDispatch()
    const [val , setVal] = useState([])
    useEffect((data)=>{
        dispatch()
    })
    return (
        <div>
            {/*<a href={`https://www.google.am/search?q=${totalValue}`} target={"_black"}>{totalValue}</a>*/}
        </div>
    );
}

export default Values;