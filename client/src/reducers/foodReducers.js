export const getAllFoodsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALLFOODS_REQUEST":
      return {
        ...state,
      };
    case "GET_ALLFOODS_SUCCESS":
      return {
        foods: action.payload,
      };

    case "GET_ALLFOODS_FAILED":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
