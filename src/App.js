import "./App.css";

import HeaderComp from "./components/HeaderComp";
import HomeComp from "./components/HomeComp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckoutComp from "./components/CheckoutComp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/checkout"
            element={[<HeaderComp />, <CheckoutComp />]}
          ></Route>
          <Route path="/" element={[<HeaderComp />, <HomeComp />]}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
