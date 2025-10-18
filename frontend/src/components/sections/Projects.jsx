import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiStar, 
  HiCode, 
  HiExternalLink, 
  HiFilter,
  HiSparkles,
  HiEye,
  HiClock
} from 'react-icons/hi'
import { FaGithub, FaLaptopCode, FaMobile } from 'react-icons/fa'
import ProjectCard from './ProjectCard'
import projectsData from '../../assets/data/projects.json'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const categories = [
    { id: 'all', name: 'All Projects', count: projectsData.length, icon: HiStar },
    { id: 'Full Stack', name: 'Full Stack', count: projectsData.filter(p => p.category === 'Full Stack').length, icon: FaLaptopCode },
    { id: 'Frontend', name: 'Frontend', count: projectsData.filter(p => p.category === 'Frontend').length, icon: HiCode },
    { id: 'Mobile', name: 'Mobile', count: projectsData.filter(p => p.category === 'Mobile').length, icon: FaMobile },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const filterVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white to-gray-50/30 relative overflow-hidden">
      {/* Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-primary-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        {/* Grid Pattern - Responsive */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px] md:bg-[size:60px_60px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 shadow-lg mx-auto"
          >
            <HiCode className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">My Work</span>
          </motion.div>
          
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            A collection of projects that showcase my skills in creating innovative digital solutions
          </p>
        </motion.div>

        {/* Projects Stats - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto"
        >
          {[
            { icon: HiEye, value: '20+', label: 'Projects Completed' },
            { icon: FaGithub, value: '20k+', label: 'Lines of Code' },
            { icon: HiClock, value: '2+', label: 'Years Experience' },
            { icon: HiSparkles, value: '95%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-600 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 font-medium group-hover:text-gray-700 transition-colors leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Tabs - Responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              variants={filterVariants}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 group relative ${
                activeFilter === category.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:text-primary-600 hover:bg-white hover:shadow-lg border border-gray-200/50'
              }`}
            >
              <category.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${
                activeFilter === category.id ? 'text-white' : 'text-gray-400 group-hover:text-primary-500'
              }`} />
              <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">{category.name}</span>
              <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold ${
                activeFilter === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-primary-100 text-primary-600'
              }`}>
                {category.count}
              </span>
              
              {/* Active indicator */}
              {activeFilter === category.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 border border-primary-400 sm:border-2 rounded-lg sm:rounded-xl shadow-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Responsive */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative"
              >
                <ProjectCard 
                  project={project} 
                  isHovered={hoveredProject === project.id}
                />
                
                {/* Hover overlay effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl pointer-events-none transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State - Responsive */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="text-center py-12 sm:py-16"
            >
              <HiFilter className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-1 sm:mb-2">No projects found</h3>
              <p className="text-sm sm:text-base text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-primary-200/30 max-w-2xl mx-auto">
            <HiSparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md mx-auto leading-relaxed">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative design.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 flex items-center space-x-1.5 sm:space-x-2 w-full xs:w-auto justify-center text-sm sm:text-base"
              >
                <HiExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Start a Project</span>
              </button>
              <a
                href="https://github.com/SahilRawat16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 sm:space-x-2 text-gray-600 hover:text-primary-600 font-medium transition-colors group text-sm sm:text-base w-full xs:w-auto justify-center"
              >
                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span>View all on GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        .bg-size-200 {
          background-size: 200% 200%;
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Extra small devices */
        @media (min-width: 475px) {
          .xs\\:flex-row {
            flex-direction: row !important;
          }
          .xs\\:w-auto {
            width: auto !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects