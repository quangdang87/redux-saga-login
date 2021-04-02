// add sagas for this login page according to the actions triggered.
// import {loggedIn} from "../actions/loginActions";
import actionTypes from "../actions/actionTypes";
import {LOGIN_SUCCESS} from "../actions/actionTypes";
import {call, cancel, cancelled, fork, put, take} from "redux-saga/effects";
import {loggedIn} from "../actions/loginActions";

export function* loginFlow() {
  while (1) {
    let credentials = yield take("LOGIN_REQUEST");
    let task = yield fork(authorize, credentials.user, credentials.password);
    let authorizeForkMock = yield take(["LOGOUT", "LOGIN_ERROR"]);
    if (authorizeForkMock.type === "LOGOUT") yield cancel(task);

    yield put({type: "DELETE_TOKEN"});
  }
}

export function* logActions() {}
export function* fakeAuthorize(user, password) {
  yield loggedIn();
}
export function* authorize(user, password) {
  while (1) {
    try {
      let token = yield call(fakeAuthorize, user, password);
      yield put({type: "LOGIN_SUCCESS"});
      yield put({type: "SAVE_TOKEN", token});
      let check = yield cancelled();
      console.log("check: ", check);
      if (check) yield put({type: "LOGIN_CANCELLED"});
    } catch (error) {
      yield put({type: "LOGIN_ERROR", error});
    }
  }
}
