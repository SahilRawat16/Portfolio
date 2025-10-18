import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiSparkles, HiCode, HiServer, HiStar } from 'react-icons/hi'
import { FaReact, FaNodeJs, FaPython, FaAws, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMongodb, SiNextdotjs } from 'react-icons/si'
import Button from '../ui/Button'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const techStack = [
    { icon: FaReact, name: 'React', color: 'text-blue-500', category: 'frontend' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600', category: 'language' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-700', category: 'framework' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500', category: 'backend' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-600', category: 'database' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-500', category: 'styling' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/SahilRawat16', color: 'hover:text-gray-900', name: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sahil-rawat-094212289/', color: 'hover:text-blue-600', name: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/_rawatsahil_/', color: 'hover:text-pink-600', name: 'Instagram' },
    { icon: FaTwitter, href: 'https://x.com/_rawatsahil_', color: 'hover:text-blue-400', name: 'Twitter' },
  ]

  const stats = [
    { number: '3+', label: 'Years Experience', icon: HiStar },
    { number: '50+', label: 'Projects Completed', icon: HiCode },
    { number: '25+', label: 'Happy Clients', icon: HiSparkles },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-purple-50/20 pt-16 md:pt-20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Responsive Gradient Orbs */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-100/40 to-purple-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-blue-100/30 to-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
          />

          {/* Responsive Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] lg:bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_10%,transparent_90%,black_100%)]" />
        </div>

        {/* Floating Tech Icons - Responsive Positioning */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {techStack.map((tech, index) => {
            const mobilePositions = [
              { top: '15%', left: '5%' },
              { top: '80%', left: '85%' },
              { top: '25%', left: '90%' },
              { top: '85%', left: '10%' },
              { top: '12%', left: '50%' },
              { top: '90%', left: '55%' },
            ]
            
            const desktopPositions = [
              { top: '25%', left: '8%' },
              { top: '75%', left: '88%' },
              { top: '35%', left: '92%' },
              { top: '82%', left: '12%' },
              { top: '18%', left: '52%' },
              { top: '88%', left: '58%' },
            ]
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className={`absolute ${tech.color} text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-20 hidden sm:block`}
                style={desktopPositions[index]}
              >
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <tech.icon />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center px-4 sm:px-6 lg:px-8"
          >
            {/* Enhanced Badge - Responsive */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 shadow-lg shadow-primary-100/20 hover:shadow-primary-100/30 transition-all duration-300 cursor-pointer group mx-auto"
              onClick={() => scrollToSection('projects')}
            >
              <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors whitespace-nowrap">
                Available for new projects
              </span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
            </motion.div>

            {/* Main Heading - Fully Responsive Typography */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6 lg:mb-8">
              <motion.h1 
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="block text-gray-900 font-light text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4">
                  Hello, I'm
                </span>
                <span className="block bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text text-transparent bg-size-200 animate-gradient font-bold">
                  Sahil Rawat
                </span>
              </motion.h1>
            </motion.div>
            
            {/* Enhanced Subtitle - Responsive */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed font-light px-2"
            >
              A passionate <span className="font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-lg">Full-Stack Developer</span> crafting 
              digital experiences that merge <span className="font-medium">innovative design</span> with <span className="font-medium">cutting-edge technology</span>.
            </motion.p>

            {/* Tech Stack Preview - Responsive */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12"
            >
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-lg border border-gray-200/50 max-w-2xl mx-auto">
                <span className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">Tech Stack:</span>
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className={`flex items-center space-x-1 sm:space-x-1.5 bg-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-sm border border-gray-200/70 ${tech.color} group hover:shadow-md hover:scale-105 transition-all duration-300 cursor-help`}
                      title={tech.name}
                    >
                      <tech.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 hidden xs:inline">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons with Social Links - Responsive */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 lg:mb-16"
            >
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                <Button 
                  size="large" 
                  onClick={() => scrollToSection('projects')}
                  className="group relative overflow-hidden shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 w-full xs:w-auto text-sm sm:text-base"
                >
                  <span className="flex items-center space-x-1 sm:space-x-2 relative z-10">
                    <HiCode className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                    <span>View My Work</span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="large" 
                  onClick={() => scrollToSection('contact')}
                  className="group border-2 hover:border-primary-300 hover:bg-primary-50/50 w-full xs:w-auto text-sm sm:text-base"
                >
                  <span className="flex items-center space-x-1 sm:space-x-2">
                    <HiServer className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    <span>Get In Touch</span>
                  </span>
                </Button>
              </div>

              {/* Social Links - Responsive */}
              <div className="flex items-center gap-2 sm:gap-3 pt-2 sm:pt-0 sm:pl-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Stats Bar - Responsive */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-8 sm:mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="text-center group cursor-pointer"
                  onClick={() => scrollToSection('about')}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-lg border border-gray-200/50 hover:shadow-xl hover:border-primary-200/50 transition-all duration-300">
                    <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary-500 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 font-medium group-hover:text-gray-700 transition-colors leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Scroll Indicator - Responsive */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex flex-col items-center space-y-2 sm:space-y-3"
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center space-y-2 sm:space-y-3 cursor-pointer group"
                onClick={() => scrollToSection('about')}
              >
                <span className="text-xs sm:text-sm my-9 text-gray-500 font-medium group-hover:text-primary-600 transition-colors flex items-center space-x-1 sm:space-x-2">
                  <span>Explore my journey</span>
                  <HiArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Smooth Transition to Next Section */}
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

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
          .xs\\:inline {
            display: inline !important;
          }
          .xs\\:w-auto {
            width: auto !important;
          }
        }
      `}</style>
    </>
  )
}

export default Hero