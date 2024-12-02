import './App.css';
import About from './Components/About';
import FooterContact from './Components/FooterContact';
import Galerie from './Components/Galerie';
import Home from './Components/Home';
import Programs from './Components/Programs';
import Services from './Components/Services';

function App() {
  return (
    <div className="App text-yellow-900">
      <Home />
      <About />
      <Programs />
      <Services />
      <Galerie />
      <FooterContact />
    </div>
  );
}

export default App;
