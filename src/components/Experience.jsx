import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Data Analytics Job Simualation',
    company: 'Tata | Deloitte',
    duration: '1 Day (28th Dec, 2025)',
    description: 'Analyzed industrial IoT data from 1,000+ device events to identify downtime patterns across 5+ factories. Built interactive Tableau dashboards to track unhealthy states, quantify 10–20 min downtime intervals, and enable factory-level drill-downs. Delivered insights that supported faster issue identification and improved operational visibility.',
    skillsGained: ['Data Visualization using Tableau, Data cleaning, pattern recognition, operational analytics.']
  },
  {
    role: 'Data Analyst (Hackathon)',
    company: 'NASA Challenge 2025',
    duration: '2 days (4 Oct - 5 Oct 2025)',
    description: 'Performed data cleaning and manipulation to prepare bloom datasets for analysis across different regions and seasons.Conducted Exploratory Data Analysis (EDA) to uncover seasonal variations, area-specific trends, and bloom patterns.Built and compared regression models to predict bloom intensity accurately, visualizing results through interactive charts.Developed an AI/ML-based prediction feature enabling users to estimate bloom areas for selected plants in specific regions and seasons.',
    skillsGained: ['Team Work, Data Cleaning, Storytelling Visualizations, Model Creation, Model Evaluation, Insights Presentation'],
  },
  {
    role: 'Data Scientist (Intern)',
    company: 'DevelopersHub Corporation',
    duration: '2 Months (June 2025 - July 2025)',
    description: 'Gained hands-on experience in the field of Data Science for the first time, working on real-world data problems.Built and evaluated basic predictive and classification models using popular datasets sourced from publicly available platforms.Applied fundamental techniques in data cleaning, exploration, and visualization to extract meaningful insights from datasets.Learned practical workflow of model building, from data preprocessing to performance evaluation.',
    skillsGained: ['Python, Data Preprocessing, Exploratory Data Analysis (EDA), Machine Learning Basics, Model Evaluation, Data Visualization.']
  },
  {
    role: 'Data Analyst (Intern)',
    company: 'Excelerate',
    duration: '1 Month (June 2025)',
    description: 'Led a small team of 4 members, working collaboratively throughout the internship to analyze marketing data.Gathered, cleaned, and explored datasets to extract actionable insights for business decisions.Motivated and coordinated team members to maintain productivity and ensure timely delivery of insights.Presented findings to stakeholders in an online meeting, recommending which marketing campaigns to cut, which to expand, and identifying optimal areas and seasons for marketing investment.Learned practical teamwork, project management, and effective communication in a real-world business context.',
    skillsGained: ['Team Collaboration, Data Cleaning, Data Visualization, Insight Generation, Stakeholder Communication, Marketing Analytics.']
  },
  {
    role: 'Data Visualization Job Simualation',
    company: 'Tata | Forage',
    duration: '1 Day (19th April, 2025)',
    description: 'Defined the scope and objectives for data analysis to ensure insights met executive requirements. Evaluated and selected the most effective visual formats to represent complex data trends clearly. Synthesized data findings into professional visuals to facilitate high-level decision-making.',
    skillsGained: ['Data Visualization, Stakeholder Communication, Analytics Communication, Insight Generation, Insights Presentation']
  },
];

const Experience = () => (
  <section id="experience" className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Experience
      </motion.h3>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="border-l-4 border-white pl-6"
          >
            <h4 className="text-xl text-white font-semibold">{exp.role} at {exp.company}</h4>
            <p className="text-white/50">{exp.duration}</p>
            <ul className="mt-2 list-disc list-inside text-white/80 space-y-1">
              {exp.description
                .split('.')
                .map((sentence, i) => sentence.trim())
                .filter(Boolean)
                .map((sentence, i) => (
                  <li key={i}>{sentence}.</li>
                ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-4">
              {exp.skillsGained[0]
                .split(', ')
                .map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-400 text-white rounded-full text-sm font-medium shadow-md hover:bg-purple-950 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill.trim()}
                  </span>
                ))}
            </div>


          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;