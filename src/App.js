import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Abilities from './components/Abilities';
import Expirience from './components/Expirience';
import Projects from './components/Projects';
import LightButton from './components/LightButton';
import About from './components/About';

function App() {
  return (
    <main>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Abilities/>
      <Expirience/>
      <Projects />
      <Contacts />
      
      <LightButton/>
    </main>
  );
}

export default App;
