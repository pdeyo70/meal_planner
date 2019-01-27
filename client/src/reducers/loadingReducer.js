import { LOADING, LOADED } from "../actions/loadingActions";

const initialState = {
  loading: true
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, { loading: true });
    case LOADED:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};
