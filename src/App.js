import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Service from "./routes/Service.js";
import Order from "./routes/Order.js";
import Wheater from "./routes/Wheater.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/order" element={<Order />} />
        <Route path="/wheater" element={<Wheater />} />
      </Routes>
    </div>
  );
}

export default App;
