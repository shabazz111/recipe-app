import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavouritePages from "./pages/FavouritePages";

const App = () => {
  return (
    <div className="flex">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<FavouritePages />} />
        </Routes>
    </div>
  );
};

export default App;
