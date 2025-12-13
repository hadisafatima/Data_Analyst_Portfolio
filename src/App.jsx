import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certification from './components/Certifications';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;