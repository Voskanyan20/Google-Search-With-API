export const GET_AUTOCOMPLETE_REQUEST = "GET_AUTOCOMPLETE_REQUEST";
export const GET_AUTOCOMPLETE_SUCCESS = "GET_AUTOCOMPLETE_SUCCESS";
export const GET_AUTOCOMPLETE_FAIL = "GET_AUTOCOMPLETE_FAIL";
export const GET_TOTAL_VALUE = "GET_TOTAL_VALUE";

export function autoCompleteRequest(search){
    return {
        type:  GET_AUTOCOMPLETE_REQUEST,
        payload: {
            search
        }
    }
}
export function autoCompleteSuccess(data){
    return{
        type:GET_AUTOCOMPLETE_SUCCESS,
        payload:{
            data
        }
    }
}
export function setTotalValue(data){
    return {
        type:  GET_TOTAL_VALUE,
        payload: {
           data
        }
    }
}