import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";

import Chips from "./Chips";
import Candy from "./Candy";
import Water from "./Water";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route Expact path="/" elements={<VendingMachine />} />
          <Route Expact path="/water" elements={<Water />} />
          <Route Expact path="/chips" elements={<Chips />} />
          <Route Expact path="/candy" elements={<Candy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;