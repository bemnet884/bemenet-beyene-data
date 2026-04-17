import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Workflow />
      </main>
      <Contact />
    </div>
  );
}

export default App;
