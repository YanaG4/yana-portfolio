import './App.css';
import Home from './views/Home';
import Skills from './views/Skills/Skills';
import Resume from './views/Resume/Resume';
import NavBar from './components/NavBar/NavBar';
import Projects from './views/Projects/Projects';

function App() {
  return (
    <>
      <NavBar />
      <div className='main-container'>
        <Home />
        <Projects />
        <Skills />
        <Resume />
      </div>
    </>
  );
}

export default App;
