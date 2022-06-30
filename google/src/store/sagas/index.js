import {all, fork} from 'redux-saga/effects';
import search from './search';


export default function* watchers(){
    yield all([
        search
    ].map(fork))
}
