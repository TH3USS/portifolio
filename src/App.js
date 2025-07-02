import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Abilities from './components/Abilities';
import Expirience from './components/Expirience';
import Project2 from './components/Project2';

function App() {
  return (
    <main>
      <NavBar/>
      <Home/>
      <Skills/>
      <Abilities/>
      <Expirience/>
      <Projects/>
      <Contacts />
      <Project2 />
    </main>
  );
}

export default App;
