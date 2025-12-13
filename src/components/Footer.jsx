import { SiKaggle, SiGithub, SiLinkedin} from 'react-icons/si';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="mb-4">&copy; 2023 Hadisa Fatima Syed. All rights reserved.</p>
      <div className="flex justify-center items-center space-x-6">
        <a
          href="https://www.linkedin.com/in/hadisa-fatima-syed-85537a266/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white transition"
          aria-label="LinkedIn"
        >
          <SiGithub size={24} />
        </a>
        <a
          href="https://github.com/hadisafatima"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white transition"
          aria-label="GitHub"
        >
          <SiLinkedin size={24} />
        </a>
        <a
          href="https://www.kaggle.com/hadisasyed31"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white transition"
          aria-label="Kaggle"
        >
          <SiKaggle size={48} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;