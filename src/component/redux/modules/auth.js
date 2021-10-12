import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "component/Cookie";

const LOG_In = "LOG_In";

// action creators

const logIn = createAction(LOG_In, (info) => ({ info }));

// initialState
const initialState = {
  info: {
    id: "",
    name: "",
    age: 0,
    phone: "",
  },
};

// reducer
export default handleActions(
  {
    [LOG_IN]: () => {},
  },
  initialState
);

//action creator export

const actionCreators = {
  logOut,
  getUser,
};

export { actionCreators };
