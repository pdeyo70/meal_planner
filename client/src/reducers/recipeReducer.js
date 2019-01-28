import {
  CREATE_OVERVIEW,
  CREATE_INGREDIENTS,
  CREATE_DIRECTIONS,
  ERROR,
  SET_CURR_RECIPE,
  INIT_RECIPE
} from "../actions/recipeActions";

const initialState = {
  init_recipe: false,
  create_overview: false,
  create_ingredients: false,
  create_directions: false,
  error: "",
  message: "",
  curr_recipe: []
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_OVERVIEW:
      return Object.assign({}, state, {
        create_overview: false,
        create_ingredients: true,
        create_directions: false,
        error: "",
        message: "",
        curr_recipe: action.payload
      });
    case CREATE_INGREDIENTS:
      return Object.assign({}, state, {
        create_overview: false,
        create_ingredients: false,
        create_directions: true,
        error: "",
        message: "",
        curr_recipe: action.payload
      });
    case CREATE_DIRECTIONS:
      return Object.assign({}, state, {
        create_overview: false,
        create_ingredients: false,
        create_directions: false,
        error: "",
        message: "",
        curr_recipe: action.payload
      });
    case SET_CURR_RECIPE:
      return Object.assign({}, state, {
        error: "",
        message: "",
        curr_recipe: action.payload
      });
    case INIT_RECIPE:
      return Object.assign({}, state, {
        initRecipe: true,
        create_overview: true
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        message: ""
      });
    default:
      return state;
  }
};
