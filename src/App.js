
import React from "react";
import AllMovies from "./components/AllMovies";

import "./App.css";

function App() {
  return (
    <React.Fragment>
        <AllMovies component={AllMovies} />
    </React.Fragment>
  );
}

export default App;
