import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:userId" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
