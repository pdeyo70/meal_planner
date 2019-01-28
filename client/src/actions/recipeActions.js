export const CREATE_OVERVIEW = "CREATE_OVERVIEW";
export const CREATE_INGREDIENTS = "CREATE_INGREDIENTS";
export const CREATE_DIRECTIONS = "CREATE_DIRECTIONS";
export const ERROR = "ERROR";
export const SET_CURR_RECIPE = "SET_CURR_RECIPE";
export const INIT_RECIPE = "INIT_RECIPE";

export const initRecipe = () => {
  return dispatch => {
    dispatch({ type: INIT_RECIPE });
  };
};

export const createRecipe = (recipe, moment) => {
  return dispatch => {
    switch (moment) {
      case CREATE_OVERVIEW:
        dispatch({ type: CREATE_OVERVIEW, payload: recipe });
        break;
      case CREATE_INGREDIENTS:
        dispatch({ type: CREATE_INGREDIENTS, payload: recipe });
        break;
      case CREATE_DIRECTIONS:
        dispatch({ type: CREATE_DIRECTIONS, payload: recipe });
        break;
      default:
        dispatch({ type: SET_CURR_RECIPE, payload: recipe });
    }
  };
};
