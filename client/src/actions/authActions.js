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
export const registerUser = obj => {
  const { password, password2, firstName, lastName, username, email } = obj;
  const user = { username, firstName, lastName, email, password };
  return dispatch => {
    dispatch({ type: REGISTERING, payload: "Registering User..." });
    // verify passwords are the same
    if (password === password2) {
      axios
        .post("http://localhost:3030/api/auth/register", { user })
        .then(res => {
          dispatch({ type: REGISTERED, payload: res.data });
        })
        .catch(err =>
          dispatch({ type: ERROR, payload: "Please check the form for errors" })
        );
    } else {
      dispatch({ type: ERROR, payload: "Passwords do not match" });
    }
  };
};

export const loginUser = user => {
  const { username, password } = user;
  return dispatch => {
    dispatch({ type: LOGGING_IN, payload: "Logging In..." });

    if (username && password.length > 7) {
      axios
        .post("http://localhost:3030/api/auth/login", { user })
        .then(res => {
          const token = res.data.token;
          localStorage.setItem("meal_planner_token", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(jwt.decode(token)));
          dispatch({ type: LOGGED_IN, payload: res.data });
        })
        .catch(err =>
          dispatch({ type: ERROR, payload: "username/password incorrect" })
        );
    } else {
      dispatch({ type: ERROR, payload: "username/password format incorrect." });
    }
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });
  };
};
