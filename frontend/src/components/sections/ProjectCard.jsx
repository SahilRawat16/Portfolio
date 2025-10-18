import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HiExternalLink, 
  HiCode, 
  HiX,
  HiCheck,
  HiTag,
} from 'react-icons/hi'
import { 
  FaGithub, 
  FaReact,
  FaNodeJs,
  FaPython
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiGraphql,
  SiStripe,
  SiFirebase,
  SiChartdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFramer
} from 'react-icons/si'
import Modal from '../ui/Modal'

const ProjectCard = ({ project, isHovered = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Icon mapping for technologies
  const techIcons = {
    'React': FaReact,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'Node.js': FaNodeJs,
    'MongoDB': SiMongodb,
    'Express': SiExpress,
    'Tailwind CSS': SiTailwindcss,
    'Python': FaPython,
    'Stripe': SiStripe,
    'Firebase': SiFirebase,
    'Chart.js': SiChartdotjs,
    'Next.js': SiNextdotjs,
    'GraphQL': SiGraphql,
    'HTML5': SiHtml5,
    'CSS3': SiCss3,
    'Framer Motion': SiFramer,
  }

  const renderTechnologies = (technologies) => (
    <div className="flex flex-wrap gap-1.5">
      {technologies.map((tech, idx) => {
        const IconComponent = techIcons[tech]
        return (
          <span
            key={idx}
            className="flex items-center space-x-1 px-2 py-1 bg-primary-100 text-primary-700 rounded-md text-xs font-medium border border-primary-200/50"
          >
            {IconComponent && <IconComponent className="w-3 h-3" />}
            <span>{tech}</span>
          </span>
        )
      })}
    </div>
  )

  return (
    <>
      <motion.div
        layout
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200/50 group cursor-pointer h-full flex flex-col"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 flex items-center space-x-1 shadow-lg">
              <HiTag className="w-3 h-3" />
              <span>{project.category}</span>
            </span>
          </div>
          
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-4"
          >
            <span className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              Click to view details
            </span>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="mb-4">
              {renderTechnologies(project.technologies.slice(0, 3))}
              {project.technologies.length > 3 && (
                <div className="mt-2 text-xs text-gray-500">
                  +{project.technologies.length - 3} more technologies
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200/50">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsModalOpen(true)
              }}
              className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors flex items-center space-x-1 group/btn"
            >
              <HiCode className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              <span>View Details</span>
            </button>
            <div className="flex space-x-2">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-600 transition-colors p-1.5 hover:bg-primary-50 rounded-lg"
                  title="Live Demo"
                  onClick={(e) => e.stopPropagation()}
                >
                  <HiExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-600 transition-colors p-1.5 hover:bg-primary-50 rounded-lg"
                  title="Source Code"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6 space-y-6 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
              <p className="text-primary-600 font-semibold mt-1 flex items-center space-x-2">
                <HiTag className="w-4 h-4" />
                <span>{project.category}</span>
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-lg"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>
          
          {/* Project Image */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          {/* Project Overview */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
              <HiCode className="w-5 h-5 text-primary-500" />
              <span>Project Overview</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
              <HiCheck className="w-5 h-5 text-primary-500" />
              <span>Key Features</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <HiCheck className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
              <HiTag className="w-5 h-5 text-primary-500" />
              <span>Technologies Used</span>
            </h3>
            {renderTechnologies(project.technologies)}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4 border-t border-gray-200">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <HiExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-gray-300 text-gray-700 text-center py-3 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <FaGithub className="w-4 h-4" />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProjectCard