import { call, put, takeLatest } from "redux-saga/effects";

function* getPostSaga( ) {
    yield takeLatest("get/post", function* (action) {
        try {
            yield put({ type: "postSlice/pending" });
            const getPostResponse = yield call(
                async () =>
                    await (await fetch(`http://api.alquran.cloud/v1/page/${action.pageNo}/en.asad`)).json()
            );
            if (getPostResponse) {
                yield put({
                    type: "postSlice/fulfilled",
                    payload: getPostResponse
                });
            }

        } catch (error) {
            yield put({
                type: "postSlice/reject"
            })
        }
    })
}

export const postSagas = [
    getPostSaga()
]