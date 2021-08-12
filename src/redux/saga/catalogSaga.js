import {put,call,takeEvery} from 'redux-saga/effects'
import {API_URL} from "../../config";
import {FETCH_CATALOG, getCatalog} from "../reducers";

const fetchCategoryFromApi = () => fetch(API_URL +'categories.php' )

function* fetchCategoryWorker () {
    const data = yield call(fetchCategoryFromApi)
    const json = yield call(data.json())
    yield put(getCatalog(json))
}

 export function* CategoryWatcher () {
    takeEvery(FETCH_CATALOG,fetchCategoryWorker)
}