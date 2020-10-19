import React from "react";
// import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Header from "../components/Header/Header";

function SimpleLayout({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

export default SimpleLayout;
