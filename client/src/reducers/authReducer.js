import {
  ERROR,
  LOGGED_IN,
  LOGGING_IN,
  REGISTERING,
  REGISTERED,
  SET_CURR_USER,
  LOGOUT
} from "../actions/authActions";

const initialState = {
  logging_in: false,
  logged_in: false,
  registering: false,
  registered: false,
  current_user_id: "",
  error: null,
  message: "",
  current_user: []
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return Object.assign({}, state, {
        logged_in: false,
        current_user: [],
        message: "Logged Out Successfully"
      });
    case SET_CURR_USER:
      return Object.assign({}, state, {
        logged_in: true,
        current_user: action.payload
      });
    case REGISTERING:
      return Object.assign({}, state, {
        registering: true,
        registered: false,
        message: action.payload
      });
    case REGISTERED:
      return Object.assign({}, state, {
        registering: false,
        registered: true,
        message: ""
      });
    case LOGGED_IN:
      return Object.assign({}, state, {
        logged_in: true,
        logging_in: false,
        current_user_id: action.payload.id,
        message: "Logged in successful."
      });
    case LOGGING_IN:
      return Object.assign({}, state, {
        logged_in: false,
        logging_in: true,
        message: action.payload
      });
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
