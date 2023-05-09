import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Router,
} from "react-router-dom";
import Home from "./page/home";
import Daily from "./components/Daily";
import FetchData from "./utils/FetchData";

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
