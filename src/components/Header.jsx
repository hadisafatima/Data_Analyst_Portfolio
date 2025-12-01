import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl lg:mx-12 font-bold text-white">Hadisa's Portfolio</h1>
        <nav className="hidden md:flex lg:mx-12 space-x-2 text-lg">
          <a href="#hero" className="text-white/70 hover:bg-white/20 px-2.5 py-1.5 rounded-full hover:text-white transition-colors duration-500" onClick={(e) => {
            e.preventDefault();
            document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
          }}>Home</a>
          <a href="#skills" className="text-white/70 hover:bg-white/20 px-2.5 py-1.5 rounded-full hover:text-white transition-colors duration-500" onClick={(e) => {
            e.preventDefault();
            document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
          }}>Skills</a>
          <a href="#projects" className="text-white/70 hover:bg-white/20 px-2.5 py-1.5 rounded-full hover:text-white transition-colors duration-500" onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}>Projects</a>
          <a href="#experience" className="text-white/70 hover:bg-white/20 px-2.5 py-1.5 rounded-full hover:text-white transition-colors duration-500" onClick={(e) => {
            e.preventDefault();
            document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
          }}>Experience</a>
          <a href="#contact" className="text-white/70 hover:bg-white/20 px-2.5 py-1.5 rounded-full hover:text-white transition-colors duration-500" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>Contact</a>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden text-white cursor-pointer ${isOpen ? "rotate-0 hover:rotate-90 duration-500" : ""}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden px-7 pb-8 bg-gray-900 shadow-md">
          <a href="#hero" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10" onClick={(e) => {
            e.preventDefault();
            document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
          }}>Home</a>
          <a href="#skills" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10" onClick={(e) => {
            e.preventDefault();
            document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
          }}>Skills</a>
          <a href="#projects" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10" onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}>Projects</a>
          <a href="#experience" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10" onClick={(e) => {
            e.preventDefault();
            document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
          }}>Experience</a>
          <a href="#contact" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;