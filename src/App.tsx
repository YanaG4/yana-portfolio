import './App.css';
import Home from './views/Home';
import Skills from './views/Skills/Skills';
import NavBar from './components/NavBar/NavBar';
import Projects from './views/Projects/Projects';
import Responsibilities from './views/Responsibilities/Responsibilities';
import Footer from './components/Footer/Footer';

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
      <Footer />
    </>
  );
}

export default App;
