import { motion } from 'framer-motion';
import { title } from 'framer-motion/client';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Custom Knowledge ChatBot',
    description: 'Built an AI-powered knowledge chatbot that answers queries using Excel and text-based data through semantic search and retrieval. Implemented embeddings with a vector database (FAISS/Pinecone) for context-aware responses and developed an interactive Streamlit interface featuring file upload, chat functionality, and history tracking.',
    tech: ['Python', 'Pandas', 'OpenAI API', 'Streamlit', 'LLM', 'Vector Database'],
    repoLink: 'https://github.com/hadisafatima/Custom-Knowledge-Chatbot-Excel-Text-Based-'
  },
  {
    title: 'AI Email outreach Agent',
    description: 'Built an AI-powered email outreach automation system using n8n to manage leads, generate personalized emails with LLMs, and automate sending, reply tracking, and follow-ups through Gmail API/SMTP. Streamlined outreach workflows for 100+ leads per campaign, reducing manual effort by over 80%.',
    tech: ['N8N', 'OpenAI API', 'LLM', 'Google Sheets'],
    repoLink: 'https://github.com/hadisafatima/AI-Email-Outreach-Agent-Automation-Project-'
  },
  {
    title: 'Ashes Matches Analysis (1882 - 2023)',
    description: 'An interactive Streamlit app that explores historical Ashes Test match data using dynamic visualizations and insights. It features a Random Forest–based prediction model to forecast match outcomes using contextual match attributes.',
    tech: ['Streamlit, Numpy, Plotly, Sciket-learn, Pandas, R Language'],
    liveLink: 'https://ashesanalysis.streamlit.app/',
    repoLink: 'https://github.com/hadisafatima/Ashes-Cricket-Analysis',
  },
  {
    title: 'Netflix Data Analysis',
    description: 'This Netflix movies analysis project reflects my hands-on experience with data wrangling, exploratory analysis, and insightful visualization to extract meaningful entertainment industry insights.',
    tech: ['Python, Seaborn, Matplotlib, Numpy, Pandas'],
    repoLink: 'https://github.com/hadisafatima/Netflix-Movies-Data-Analysis-Project',
  },
  {
    title: 'Military Expenditure (1960 - 2018)',
    description: 'This analysis project is to analyze global military spending trends over time using historical expenditure data (1960–2018). The analysis aims to identify top-spending countries, regional patterns, year-over-year growth, and budget priorities.',
    tech: ['Spreadsheets, Tabulae, GitHub, Kaggle'],
    repoLink: 'https://github.com/hadisafatima/Military-Expenditure-Data-Analysis-Project',
  },
  {
    title: 'Bloom Watch',
    description: "A Hackathon project, an analysis on flowers' blooming patterns. It helps track when and where flowers bloom, offering insights into seasonal changes, climate impact, and ecological trends.",
    tech: ['Streamlit, Python, Pandas, Matplotlib, seaborn, sklearn, numpy, GitHub, Kaggle, VS Code'],
    liveLink: 'https://nasaprojectbloomwatch.streamlit.app/',
    repoLink: 'https://github.com/hadisafatima/NASA-Challenge_Bloom-Watch-Project_By_NebulaNexus',
  }
];

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Projects
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <h4 className="text-xl text-white font-bold mb-2">{project.title}</h4>
            <p className="text-white/70 mb-4">{project.description}</p>
            <p className="text-sm text-white mb-4">Tech: {project.tech.join(', ')}</p>
            <section className="flex flex-row space-x-3">
              {project?.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="text-white bg-white/30 px-4 py-1 rounded-full group hover:underline flex items-center"
                >
                  View Project
                  <ExternalLink size={16} className="ml-1 group-hover:translate-x-2 duration-500" />
                </a>
              )}
              {project?.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  className="text-white bg-white/30 px-4 py-1 rounded-full group hover:underline flex items-center"
                >
                  View Project Repository
                  <ExternalLink size={16} className="ml-1 group-hover:translate-x-2 duration-500" />
                </a>
              )}
            </section>

          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;