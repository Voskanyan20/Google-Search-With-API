import {GET_AUTOCOMPLETE_SUCCESS, GET_TOTAL_VALUE} from "../actions/search";

const initialState = {
    totalValue: "",
    data:[]
}
export default function reducer(state = initialState , action){
    switch (action.type){
        case GET_TOTAL_VALUE:{
            return {
                ...state,
                totalValue: action.payload.data
            }
        }
        case GET_AUTOCOMPLETE_SUCCESS:{
            return {
                ...state,
                data: action.payload.data
            }
        }
        default: {
            return state
        }
    }
}