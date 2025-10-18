import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiMenu, 
  HiX, 
  HiHome, 
  HiUser, 
  HiBriefcase, 
  HiMail,
  HiChevronDown,
  HiSparkles
} from 'react-icons/hi'
import { 
  FaCode,
  FaLaptopCode
} from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isTablet, setIsTablet] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navItems = [
    { 
      name: 'Home', 
      href: '#home', 
      icon: HiHome,
      badge: null
    },
    { 
      name: 'About', 
      href: '#about', 
      icon: HiUser,
      badge: null
    },
    { 
      name: 'Projects', 
      href: '#projects', 
      icon: HiBriefcase,
      badge: '6'
    },
    { 
      name: 'Contact', 
      href: '#contact', 
      icon: HiMail,
      badge: null
    }
  ]

  const scrollToSection = (href) => {
    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  }

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-primary-100/30 border-b border-gray-100/60' 
          : 'bg-transparent'
      }`}
    >
      {/* Premium accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500"></div>
      
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo - Responsive */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 no-underline">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-all duration-300">
                  <FaLaptopCode className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-primary-400 to-purple-400 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-br from-primary-700 to-primary-900 bg-clip-text text-transparent leading-tight">
                  SahilR.dev
                </span>
                <span className="text-xs text-gray-500 font-medium hidden sm:block">Professional Developer</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Enhanced for Tablet */}
          <div className="hidden md:flex items-center space-x-0 lg:space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center space-x-1 lg:space-x-2 px-3 lg:px-4 py-2 rounded-lg lg:rounded-xl font-medium transition-all duration-300 group relative ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary-600 bg-primary-50 shadow-sm'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  } ${isTablet ? 'text-sm' : ''}`}
                >
                  <item.icon className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-300 ${
                    activeSection === item.href.replace('#', '') ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  <span className="font-semibold whitespace-nowrap">{item.name}</span>
                  
                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center shadow-sm">
                      {item.badge}
                    </span>
                  )}
                  
                  {/* Active indicator */}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 border border-primary-200 rounded-lg lg:rounded-xl shadow-sm shadow-primary-100"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
            
            {/* CTA Button - Responsive */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="ml-2 lg:ml-4"
            >
              <a
                href="#contact"
                onClick={() => scrollToSection('#contact')}
                className="px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg lg:rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 flex items-center space-x-1 lg:space-x-2 group text-sm lg:text-base"
              >
                <HiSparkles className="w-3 h-3 lg:w-4 lg:h-4 group-hover:rotate-180 transition-transform duration-500" />
                <span className="whitespace-nowrap">{isTablet ? 'Hire' : 'Hire Me'}</span>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Enhanced for all mobile sizes */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-gray-700 rounded-full absolute top-1 sm:top-1"
              />
              <motion.div
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-gray-700 rounded-full absolute top-2.5 sm:top-3"
              />
              <motion.div
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-gray-700 rounded-full absolute top-4 sm:top-5"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu - Fully Responsive */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            />
            
            {/* Menu Panel - Responsive sizing */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden fixed top-16 left-2 right-2 sm:left-4 sm:right-4 bg-white/98 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl shadow-black/20 border border-gray-200/80 z-50 overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="p-4 sm:p-6 border-b border-gray-100 bg-gradient-to-r from-primary-50 to-purple-50/50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                    <FaLaptopCode className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">Navigation</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Explore my portfolio</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-3 sm:p-4 space-y-1 sm:space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    variants={mobileItemVariants}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full flex items-center space-x-3 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 group ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      activeSection === item.href.replace('#', '') 
                        ? 'text-white' 
                        : 'text-gray-400 group-hover:text-primary-500'
                    }`} />
                    <span className="font-semibold text-left flex-1 text-sm sm:text-base">{item.name}</span>
                    
                    {item.badge && (
                      <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold ${
                        activeSection === item.href.replace('#', '')
                          ? 'bg-white/20 text-white'
                          : 'bg-primary-100 text-primary-600'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    
                    <HiChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transform rotate-270 ${
                      activeSection === item.href.replace('#', '') ? 'text-white/80' : 'text-gray-400'
                    }`} />
                  </motion.button>
                ))}
                
                {/* Mobile CTA */}
                <motion.button
                  variants={mobileItemVariants}
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white p-3 sm:p-4 rounded-lg sm:rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 flex items-center justify-center space-x-2 mt-2 sm:mt-4 text-sm sm:text-base"
                >
                  <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Start a Project</span>
                </motion.button>
              </div>

              {/* Menu Footer */}
              <div className="p-3 sm:p-4 border-t border-gray-100 bg-gray-50/50">
                <div className="text-center text-xs text-gray-500">
                  Crafted with ❤️ for amazing experiences
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar