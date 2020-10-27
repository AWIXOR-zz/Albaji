import React from "react";
import Context from "./Context";

export default function Provider(props) {
  const state = {
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
    activeTag: "",
  };
  const methods = {
    setActiveTag: (tag) => {
      console.log(tag);
      // console.log(state);
      state.activeTag = tag;
    },
  };
  return (
    <Context.Provider value={{ state, methods }}>
      {props.children}
    </Context.Provider>
  );
}
