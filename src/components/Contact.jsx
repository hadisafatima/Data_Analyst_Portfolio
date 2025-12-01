import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4 text-center">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
      >
        Contact Me
      </motion.h3>
      <div className="flex text-white/80 justify-center space-x-8">
        <div className="flex items-center">
          <Mail size={24} className="text-white mr-2" />
          <span>hadisaasyed@gmail.com</span>
        </div>
        <div className="flex items-center">
          <Phone size={24} className="text-white mr-2" />
          <span>0300-2067562</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;