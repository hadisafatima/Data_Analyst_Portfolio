import { motion } from 'framer-motion';
import { BarChart3, Database, Code, Filter, LineChart, FileCode2, ChartSpline, LayoutDashboard } from 'lucide-react';

const skills = [
  { name: 'Python', icon: <Code size={40} />, level: 90 },
  { name: 'SQL', icon: <Database size={40} />, level: 85 },
  { name: 'Tableau', icon: <BarChart3 size={40} />, level: 80 },
  { name: 'Data Cleaning & Wrangling', icon: <Filter size={40}/>, level: 60},
  { name: 'Data Visualization', icon: <LineChart size={40}/>, level: 80},
  { name: 'R Programming', icon: <FileCode2 size={40}/>, level: 30},
  { name: 'Exploratory Data Analysis', icon: <ChartSpline size={40}/>, level: 70},
  { name: 'Power BI', icon: <LayoutDashboard size={40}/>, level: 60},
];

const Skills = () => (
  <section id="skills" className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Skills
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md"
          >
            <section className='flex flex-row space-x-3 items-center mb-4'>
              <div className="text-white/70">{skill.icon}</div>
              <h4 className="text-xl text-white/80 font-semibold">{skill.name}</h4>
            </section>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-purple-300 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;