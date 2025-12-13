import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
    {
        title: 'Google Data Analytics Professional Certificate',
        issuer: 'Google',
        date: '1 Dec, 2023',
        image: 'public/Google_Data_Analytics_Career_Certitficate.png',
    },
    {
        title: 'Data Visualization (Remote Intern)',
        issuer: 'Excelerate',
        date: '1 July, 2025',
        image: 'public/Excelerate_Internship_Certificate.png',
    },
];

const Certifications = () => (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            >
                Certifications
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                    >
                        {cert.image ? (
                            <a
                                href={cert.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mb-4"
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="mx-auto rounded-lg object-cover hover:scale-105 transition-transform cursor-pointer"
                                />
                            </a>
                        ) : (
                            <Award size={48} className="text-gray mx-auto mb-4" />
                        )}
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                        <p className="text-gray-400 mb-4">{cert.issuer} - {cert.date}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Certifications;