import React from "react";
import { Routes, Route } from "react-router-dom";
import CoinList from "./pages/CoinList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CoinList />} />
    </Routes>
  );
}

export default App;
