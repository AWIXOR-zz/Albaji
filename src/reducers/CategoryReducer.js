const CategoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        activeCategory: action.activeCategory,
      };

    default:
      return {
        state,
      };
  }
};

export default CategoryReducer;
