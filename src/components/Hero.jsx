import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center hero-bg">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center px-4"
    >
      <motion.img
        src="./Hadisa.jpeg"
        alt="Hadisa Fatima Syed"
        className="w-32 h-32 md:w-50 md:h-50 object-cover rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Hi, I'm Hadisa Fatima Syed</h2>
      <p className="text-xl font-medium text-purple-100 mb-5">
        Data Analyst | Insights • Strategy • Impact
      </p>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 mx-auto max-w-4xl leading-relaxed">
        I transform data into meaningful insights through analysis, visualization, and
        predictive modeling. Experienced with Python, SQL, and BI tools — passionate
        about turning raw information into actionable decisions.
      </p>
      <h3 className="text-lg text-purple-200 mt-2 mb-8 tracking-wide">
        Empowering decisions through data-driven storytelling
      </h3>
      <a
        href="./Hadisa_Syed_DataAnalyst_Resume.pdf"
        download
        className="cursor-pointer text-white group px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-900 transition-colors inline-flex items-center"
      >
        <Download size={20} className="mr-2 group-hover:translate-y-1 duration-500" />
        Download Resume
      </a>

    </motion.div>
  </section>
);

export default Hero;