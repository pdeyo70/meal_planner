import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt from "jsonwebtoken";

export const ERROR = "ERROR";
export const LOGGED_IN = "LOGGED_IN";
export const LOGGING_IN = "LOGGING_IN";
export const REGISTERED = "REGISTERED";
export const REGISTERING = "REGISTERING";
export const SET_CURR_USER = "SET_CURR_USER";
export const LOGOUT = "LOGOUT";

const token = localStorage.getItem("meal_planner_token");
const options = {
  headers: {
    authorization: token
  }
};

export const setCurrentUser = user => {
  return {
    type: SET_CURR_USER,
    payload: user
  };
};

// HTTP request for REGISTER
export const registerUser = user => {
  return dispatch => {
    dispatch({ type: REGISTERING, payload: "Registering User..." });

    axios
      .post("http://localhost:3030/api/register", { ...user })
      .then(res => {
        dispatch({ type: REGISTERED, payload: res.data });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const loginUser = user => {
  return dispatch => {
    dispatch({ type: LOGGING_IN, payload: "Logging In..." });

    axios
      .post("http://localhost:3030/api/auth/login", { user })
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("meal_planner_token", token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
        dispatch({ type: LOGGED_IN, payload: res.data });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });
  };
};
