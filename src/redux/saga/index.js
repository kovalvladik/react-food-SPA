import {all} from 'redux-saga/effects'
import {CategoryWatcher} from "./catalogSaga";

export function* rootWatcher () {
    yield all( [CategoryWatcher()])
}