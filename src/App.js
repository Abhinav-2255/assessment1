import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Add from "./components/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="fakenav"></div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
