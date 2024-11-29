import './App.css';
import About from './Components/About';
import Galerie from './Components/Galerie';
import Home from './Components/Home';
import Programs from './Components/Programs';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Programs />
      <Services />
      <Galerie />
    </div>
  );
}

export default App;
