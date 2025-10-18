import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiCode, 
  HiLightBulb, 
  HiAcademicCap, 
  HiGlobe, 
  HiTrendingUp,
  HiCheckCircle,
  HiStar
} from 'react-icons/hi'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaAws,
  FaGitAlt,
  FaMobile
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiGraphql,
  SiAdobe,
  SiCanva
} from 'react-icons/si'
import skillsData from '../../assets/data/skills.json'

const About = () => {
  const techIcons = {
    'React': FaReact,
    'JavaScript': FaReact,
    'TypeScript': SiTypescript,
    'Node.js': FaNodeJs,
    'Adobe Photoshop': SiAdobe,
    'Canva': SiCanva,
    'Python': FaPython,
    'Tailwind CSS': SiTailwindcss,
    'MongoDB': SiMongodb,
    'Express': SiExpress,
    'AWS': FaAws,
    'Git': FaGitAlt,
    'Next.js': SiNextdotjs,
    'GraphQL': SiGraphql
  }

  const highlights = [
    {
      icon: HiCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable solutions'
    },
    {
      icon: HiLightBulb,
      title: 'Problem Solving',
      description: 'Creative approaches to complex challenges'
    },
    {
      icon: HiGlobe,
      title: 'Full-Stack',
      description: 'End-to-end development expertise'
    },
    {
      icon: HiTrendingUp,
      title: 'Performance',
      description: 'Optimized and efficient applications'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white to-gray-50/30 relative overflow-hidden">
      {/* Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-primary-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        {/* Grid Pattern - Responsive */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px] md:bg-[size:60px_60px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 shadow-lg mx-auto"
          >
            <HiAcademicCap className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">About Me</span>
          </motion.div>
          
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 bg-clip-text text-transparent bg-size-200 animate-gradient">
              My Journey
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start"
        >
          {/* Left Content - Story & Highlights */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            {/* Main Story - Responsive */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center space-x-2 justify-center sm:justify-start">
                <HiStar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                <span>My Story</span>
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg text-center sm:text-left">
                <p>
                  I'm <span className="font-semibold text-primary-600 bg-primary-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">Sahil Rawat</span>, 
                  a passionate <span className="font-semibold text-primary-600 bg-primary-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">Computer Science Engineering student</span> 
                  at Swami Vivekananda Institute of Engineering and Technology, Banur. My primary areas of interest lie in 
                  <span className="font-semibold text-primary-600 bg-primary-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">MERN stack web development</span> 
                  and <span className="font-semibold text-primary-600 bg-primary-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">graphic designing</span>.
                </p>
                <p>
                  I enjoy building clean, user-focused web applications and creating impactful visual designs that enhance 
                  digital experiences. My goal is to combine creativity with technology to craft innovative and functional 
                  solutions that make a difference.
                </p>
                <p>
                  Beyond coding and designing, I’m constantly exploring new tools, learning emerging technologies, and 
                  improving my problem-solving skills. I believe in continuous growth, curiosity, and using technology 
                  to create meaningful change in the world.
                </p>
              </div>
            </div>


            {/* Highlights Grid - Responsive */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={cardVariants}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <highlight.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{highlight.title}</h4>
                      <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Soft Skills - Responsive */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center space-x-2 justify-center sm:justify-start">
                <HiLightBulb className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                <span>What I Bring</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
                {skillsData.soft.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-2 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r from-primary-50 to-purple-50 text-primary-700 rounded text-xs sm:text-sm font-medium border border-primary-200/50 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default flex items-center space-x-1 whitespace-nowrap"
                  >
                    <HiCheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                    <span>{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Technical Skills */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            {/* Skills Header - Responsive */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Technical Expertise</h3>
              <p className="text-sm sm:text-base text-gray-600">Proficiency across modern technologies and frameworks</p>
            </div>

            {/* Skills Progress - Responsive */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200/50">
              <div className="space-y-4 sm:space-y-6">
                {skillsData.technical.map((skill, index) => {
                  const IconComponent = techIcons[skill.name]
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                          {IconComponent && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-primary-50 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                              <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-primary-600" />
                            </div>
                          )}
                          <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors text-sm sm:text-base truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-primary-600 bg-primary-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full whitespace-nowrap ml-2">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: index * 0.08,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-1.5 sm:h-2 rounded-full relative overflow-hidden group-hover:from-primary-600 group-hover:to-purple-600 transition-all duration-300"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                            animate={{ x: ['0%', '100%'] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              delay: index * 0.1
                            }}
                          />
                        </motion.div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">{skill.category}</span>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="text-xs text-gray-400"
                        >
                          {skill.level >= 90 && 'Expert'}
                          {skill.level >= 75 && skill.level < 90 && 'Advanced'}
                          {skill.level >= 60 && skill.level < 75 && 'Intermediate'}
                          {skill.level < 60 && 'Learning'}
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Skills Summary - Responsive */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200/50"
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                  <div className="bg-primary-50/50 rounded-lg p-2 sm:p-3">
                    <div className="text-base sm:text-lg font-bold text-primary-600">10+</div>
                    <div className="text-xs text-gray-600">Technologies</div>
                  </div>
                  <div className="bg-purple-50/50 rounded-lg p-2 sm:p-3">
                    <div className="text-base sm:text-lg font-bold text-purple-600">2+ Years</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary-200/30">
                <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Ready to collaborate?</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Let's build something amazing together</p>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto"
                >
                  Start a Project
                </button>
              </div>
            </motion.div>
          </motion.div>
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
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  )
}

export default About