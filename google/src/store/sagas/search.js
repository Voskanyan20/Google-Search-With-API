import {takeLatest, takeEvery, put, call} from "redux-saga/effects"
import {GET_AUTOCOMPLETE_FAIL, GET_AUTOCOMPLETE_REQUEST, GET_AUTOCOMPLETE_SUCCESS} from "../actions/search";
import Api from "../../Api";

export default function* watcher(){
    yield takeLatest(GET_AUTOCOMPLETE_REQUEST, handleSearch)
    //yield takeEvery(GET_AUTOCOMPLETE_REQUEST, handleSearch)
}


function* handleSearch(action){
    try{
        const  {search} = action.payload;
        const {data} = yield call(Api.autoComplete, search)
        console.log(data)
        yield put({
            type: GET_AUTOCOMPLETE_SUCCESS,
            payload: {
                data
            }
        })
    }catch (e) {
        console.warn(e)
        yield put({
            type: GET_AUTOCOMPLETE_FAIL,
            message: e.message
        })
    }
}
