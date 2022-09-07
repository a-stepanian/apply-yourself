import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/Navbar";
import List from "./components/List";
import Edit from "./components/Edit";
import Create from "./components/Create";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<List />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
