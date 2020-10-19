import React from "react";
import "./App.css";
import Home from "./views/Home";
import "tailwindcss/dist/base.css";
import "./styles/globalStyles.css";
import { DefaultLayout } from "./layouts";

function App() {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
}

export default App;
