import { all } from "redux-saga/effects";
import { postSagas } from "./post.saga";

// export default function* rootSaga() {
// 	yield all([
// 		postSagas()
// 	]);
// }

// this is use for single saga is passing
export default function* rootSaga() {
	yield all(postSagas);
}