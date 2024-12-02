import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DevPortfolio from "./components/DevPortfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DevPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
