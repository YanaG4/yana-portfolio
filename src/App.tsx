import './App.css';
import Home from './views/Home';
import Skills from './views/Skills/Skills';
import Resume from './views/Resume/Resume';
import NavBar from './components/NavBar/NavBar';
import Projects from './views/Projects/Projects';
import Responsibilities from './views/Responsibilities/Responsibilities';

function App() {
  return (
    <>
      <NavBar />
      <div className='main-container'>
        <Home />
        <Responsibilities />
        <Projects />
        <Skills />
      </div>
    </>
  );
}

export default App;
