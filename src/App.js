import React from "react";
import "./App.css";
import Home from "./views/Home";
import "tailwindcss/dist/base.css";
import "./styles/globalStyles.css";
import { CategoryProvider } from "./providers/CategoryProvider";
import { EpisodesProvider } from "./providers/EpisodesProvider";
// import Context from './Context';
import { DefaultLayout } from "./layouts";

function App() {
  return (
    <CategoryProvider>
      <EpisodesProvider>
        {/* <Context.Consumer> */}
        <DefaultLayout>
          <Home />
        </DefaultLayout>
        {/* </Context.Consumer> */}
      </EpisodesProvider>
    </CategoryProvider>
  );
}

export default App;
