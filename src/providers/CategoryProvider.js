import React, { useReducer, useContext, createContext } from "react";
import CategoryReducer from "../reducers/CategoryReducer";

const initialState = {
  activeCategory: "",
  categories: ["فقه", "شريعة", "اصول", "قانون"],
  eps: [
    {
      id: 1,
      title: "محاضرة 1",
      tag: "فقه",
    },
    {
      id: 1,
      title: "محاضرة 2",
      tag: "فقه",
    },
    {
      id: 1,
      title: "محاضرة 3",
      tag: "شريعة",
    },
    {
      id: 1,
      title: "محاضرة 4",
      tag: "شريعة",
    },
  ],
};

const CategoryContext = createContext();
const CategoryDispatchContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  return (
    <CategoryDispatchContext.Provider value={{ dispatch }}>
      <CategoryContext.Provider value={{ state }}>
        {children}
      </CategoryContext.Provider>
    </CategoryDispatchContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
export const useDispatchCategory = () => useContext(CategoryDispatchContext);
