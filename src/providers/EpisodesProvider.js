import React, { useReducer, useContext, createContext } from "react";
import EpisodesReducer from "../reducers/EpisodesReducer";

const initialState = {
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

const EpisodesContext = createContext();
const EpisodesDispatchContext = createContext();

export const EpisodesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EpisodesReducer, initialState);

  return (
    <EpisodesDispatchContext.Provider value={{ dispatch }}>
      <EpisodesContext.Provider value={{ state }}>
        {children}
      </EpisodesContext.Provider>
    </EpisodesDispatchContext.Provider>
  );
};

export const useEpisodes = () => useContext(EpisodesContext);
export const useDispatchEpisodes = () => useContext(EpisodesDispatchContext);
