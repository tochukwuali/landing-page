import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/company" exact element={<Company />} />
        <Route path="/discover" exact element={<Discover />} />
        <Route path="/contact" exact element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
