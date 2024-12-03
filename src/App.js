import "./App.css";
import AboutPage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProgramsPage from "./Components/ProgramsPage";
import ServicesPage from "./Components/ServicesPage";
import GaleriePage from "./Components/GaleriePage";
import ContactPage from "./Components/ContactPage";

function App() {
  return (
    <Router>
      <div className="App text-yellow-900">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/programs" element={<ProgramsPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/galerie" element={<GaleriePage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
