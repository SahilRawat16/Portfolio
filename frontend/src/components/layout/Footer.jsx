import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiArrowUp,
  HiSparkles,
  HiHeart
} from 'react-icons/hi'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaWhatsapp,
  FaTelegram,
  FaLaptopCode
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'E-commerce',
    'API Development',
    'Consulting'
  ]

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/SahilRawat16', 
      icon: FaGithub, 
      color: 'hover:text-gray-900',
      bgColor: 'hover:bg-gray-800'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/sahil-rawat-094212289/', 
      icon: FaLinkedin, 
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-600'
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/_rawatsahil_', 
      icon: FaTwitter, 
      color: 'hover:text-sky-400',
      bgColor: 'hover:bg-sky-500'
    },
    { 
      name: 'WhatsApp', 
      url: 'https://www.instagram.com/_rawatsahil_/', 
      icon: FaWhatsapp, 
      color: 'hover:text-green-400',
      bgColor: 'hover:bg-green-500'
    }
  ]

  const contactInfo = [
    {
      icon: HiMail,
      text: 'rawatsahil863@gmail.com',
      link: 'mailto:rawatsahil863@gmail.com'
    },
    {
      icon: HiPhone,
      text: '+91 9646715446',
      link: 'tel:+91 9646715446'
    },
    {
      icon: HiLocationMarker,
      text: 'Chandigarh, India',
      link: '#'
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

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-20 h-20 sm:w-40 sm:h-40 bg-primary-500/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-20 h-20 sm:w-40 sm:h-40 bg-purple-500/10 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:40px_40px]" />
      </div>

      <div className="container-custom relative z-10 ">
        {/* Floating CTA - Responsive positioning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center w-full my-9 mb-6 sm:mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-primary-500 to-purple-500 text-center text-white px-4 sm:px-6 py-3 rounded-full shadow-2xl shadow-primary-500/25 flex items-center justify-center space-x-2 sm:space-x-3 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
              >
                <HiSparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-medium whitespace-nowrap">Ready to start?</span>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-primary-600 px-3 sm:px-4 py-1.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Get Quote
                </button>
              </motion.div>
            </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {/* Brand & Description */}
            <motion.div 
              variants={itemVariants} 
              className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6"
            >
              {/* Logo */}
              <div className="flex justify-center sm:justify-start">
                <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="relative"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                      <FaLaptopCode className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-purple-400 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10"
                    />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      SahilR.dev
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 font-medium">Professional Full-Stack Developer</span>
                  </div>
                </Link>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 max-w-2xl text-center sm:text-left text-sm sm:text-base leading-relaxed mx-auto sm:mx-0">
                Creating beautiful, functional, and user-centered digital experiences that 
                drive results and exceed expectations. Let's build something amazing together.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3 flex flex-col items-center sm:items-start">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-colors group text-sm sm:text-base"
                  >
                    <contact.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3 pt-2 sm:pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 ${social.color} ${social.bgColor} transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600/50 flex-shrink-0`}
                    title={social.name}
                  >
                    <social.icon className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-semibold text-white flex items-center justify-center sm:justify-start space-x-2">
                <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 flex-shrink-0" />
                <span>Navigation</span>
              </h3>
              <ul className="space-y-2 sm:space-y-3 flex flex-col items-center sm:items-start">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-full text-center sm:text-left"
                  >
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm flex items-center space-x-2 group w-full justify-center sm:justify-start"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"></span>
                      <span className="whitespace-nowrap">{link.name}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-semibold text-white text-center sm:text-left">
                Services
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-1 sm:gap-2 justify-items-center sm:justify-items-start">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm py-1 px-2 sm:py-1 sm:px-3 bg-gray-800/30 rounded hover:bg-gray-700/50 cursor-default border border-gray-700/50 hover:border-gray-600/50 text-center w-full max-w-[120px] sm:max-w-none"
                  >
                    {service}
                  </motion.div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="pt-2 sm:pt-4">
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 text-center sm:text-left">
                  Stay Updated
                </h4>
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2 justify-center sm:justify-start">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-800/50 border border-gray-600/50 rounded text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors text-center sm:text-left w-full"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded text-xs sm:text-sm font-medium shadow-lg hover:shadow-primary-500/25 transition-all duration-300 whitespace-nowrap"
                  >
                    Join
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 py-6 sm:py-8 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0 text-center lg:text-left">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-400 text-xs sm:text-sm order-2 lg:order-1"
            >
              <span>© {currentYear} SahilR.dev.</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <HiHeart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 animate-pulse flex-shrink-0" />
                <span>by Sahil Rawat</span>
              </span>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center space-x-3 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm gap-1 sm:gap-0 order-3 lg:order-2"
            >
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:underline whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:underline whitespace-nowrap">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:underline whitespace-nowrap">
                Cookies
              </a>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group order-1 lg:order-3 mb-2 sm:mb-0"
            >
              <span className="text-xs sm:text-sm hidden sm:block">Back to top</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800/50 border border-gray-600/50 rounded flex items-center justify-center group-hover:bg-primary-500/20 group-hover:border-primary-500/50 transition-all duration-300">
                <HiArrowUp className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer