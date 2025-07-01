import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Abilities from './components/Abilities';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <main>
      <NavBar/>
      <Home/>
      <Skills/>
      <Abilities/>
      <Projects/>
      <Contacts />
      <ContactForm/>
    </main>
  );
}

export default App;
