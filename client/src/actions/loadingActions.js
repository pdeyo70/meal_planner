export const LOADING = "LOADING";
export const LOADED = "LOADED";

export const isLoading = load => {
  return dispatch => {
    load ? dispatch({ type: LOADING }) : dispatch({ type: LOADED });
  };
};
