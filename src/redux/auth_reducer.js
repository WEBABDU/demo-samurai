import { stopSubmit } from "redux-form";
import { AuthAPI } from "../api/api";

const SET_DATA_USER = "samurai-network/auth/SET_DATA_USER";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

export const setUserAuthData = (userId, email, login, isAuth) => ({
  type: SET_DATA_USER,
  payload: { userId, email, login, isAuth },
});

export const getLogin = () => async (dispatch) => {
  const data = await AuthAPI.me();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setUserAuthData(id, email, login, true));
  }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await AuthAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getLogin());
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};
export const logout = () => async (dispatch) => {
  const data = await AuthAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setUserAuthData(null, null, null, false));
  }
};

export default authReducer;
