import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { 
  HiMail, 
  HiLocationMarker, 
  HiPhone, 
  HiPaperAirplane,
  HiCheckCircle,
  HiExclamationCircle,
  HiSparkles,
  HiClock,
  HiChat,
  HiGlobe,
  HiDatabase,
  HiDownload,
  HiTrash,
  HiEye,
  HiEyeOff,
  HiSearch,
  HiFilter,
  HiX
} from 'react-icons/hi'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaDiscord,
  FaWhatsapp,
  FaTelegram,
  FaInstagram
} from 'react-icons/fa'
import Button from '../ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [submissions, setSubmissions] = useState([])
  const [showSubmissions, setShowSubmissions] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedSubmission, setSelectedSubmission] = useState(null)

  // Load submissions from localStorage on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('contactFormSubmissions')
    if (savedSubmissions) {
      try {
        setSubmissions(JSON.parse(savedSubmissions))
      } catch (error) {
        console.error('Error loading submissions:', error)
        // If corrupted, clear localStorage
        localStorage.removeItem('contactFormSubmissions')
      }
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const validateForm = () => {
    const { name, email, subject, message } = formData
    
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error('❌ Please fill in all required fields', {
        position: "top-right",
        autoClose: 3000,
      })
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('❌ Please enter a valid email address', {
        position: "top-right",
        autoClose: 3000,
      })
      return false
    }

    if (message.length < 10) {
      toast.error('❌ Message should be at least 10 characters long', {
        position: "top-right",
        autoClose: 3000,
      })
      return false
    }

    return true
  }

  const storeSubmission = (data) => {
    const newSubmission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...data,
      status: 'submitted',
      read: false,
      archived: false
    }
    
    const updatedSubmissions = [newSubmission, ...submissions].slice(0, 100) // Keep last 100 submissions
    setSubmissions(updatedSubmissions)
    
    // Save to localStorage
    localStorage.setItem('contactFormSubmissions', JSON.stringify(updatedSubmissions))
    
    return newSubmission
  }

  const exportSubmissions = () => {
    if (submissions.length === 0) {
      toast.info('No submissions to export', {
        position: "top-right",
        autoClose: 3000,
      })
      return
    }

    const dataStr = JSON.stringify(submissions, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    toast.success('📥 Submissions exported successfully!', {
      position: "top-right",
      autoClose: 3000,
    })
  }

  const clearSubmissions = () => {
    if (submissions.length === 0) {
      toast.info('No submissions to clear', {
        position: "top-right",
        autoClose: 3000,
      })
      return
    }

    if (window.confirm(`Are you sure you want to clear all ${submissions.length} submissions? This action cannot be undone.`)) {
      setSubmissions([])
      localStorage.removeItem('contactFormSubmissions')
      setShowSubmissions(false)
      toast.info('🗑️ All submissions cleared', {
        position: "top-right",
        autoClose: 3000,
      })
    }
  }

  const markAsRead = (id) => {
    const updatedSubmissions = submissions.map(sub => 
      sub.id === id ? { ...sub, read: true } : sub
    )
    setSubmissions(updatedSubmissions)
    localStorage.setItem('contactFormSubmissions', JSON.stringify(updatedSubmissions))
    
    toast.success('✅ Marked as read', {
      position: "top-right",
      autoClose: 2000,
    })
  }

  const markAllAsRead = () => {
    const updatedSubmissions = submissions.map(sub => ({ ...sub, read: true }))
    setSubmissions(updatedSubmissions)
    localStorage.setItem('contactFormSubmissions', JSON.stringify(updatedSubmissions))
    
    toast.success('✅ All messages marked as read', {
      position: "top-right",
      autoClose: 2000,
    })
  }

  const deleteSubmission = (id) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      const updatedSubmissions = submissions.filter(sub => sub.id !== id)
      setSubmissions(updatedSubmissions)
      localStorage.setItem('contactFormSubmissions', JSON.stringify(updatedSubmissions))
      
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null)
      }
      
      toast.success('🗑️ Submission deleted', {
        position: "top-right",
        autoClose: 2000,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Store the submission data
      const submission = storeSubmission(formData)
      
      toast.success('🎉 Message sent successfully! I\'ll get back to you soon.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: <HiCheckCircle className="text-green-500 text-xl" />
      })
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      toast.error('❌ Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: <HiExclamationCircle className="text-red-500 text-xl" />
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Filter and search submissions
  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = 
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.message.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = 
      filterStatus === 'all' || 
      (filterStatus === 'unread' && !submission.read) ||
      (filterStatus === 'read' && submission.read)
    
    return matchesSearch && matchesFilter
  })

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'rawatsahil863@gmail.com',
      description: 'Send me an email anytime',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      link: 'mailto:rawatsahil863@gmail.com'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+91 9646715446',
      description: 'Mon - Fri from 9am to 6pm',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      link: 'tel:+15551234567'
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Chandigarh, India',
      description: 'Available for remote work',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      link: '#'
    }
  ]

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/SahilRawat16', 
      icon: FaGithub, 
      color: 'hover:text-gray-900',
      bgColor: 'bg-gray-100 hover:bg-gray-200'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/sahil-rawat-094212289/', 
      icon: FaLinkedin, 
      color: 'hover:text-blue-600',
      bgColor: 'bg-blue-100 hover:bg-blue-200'
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/_rawatsahil_', 
      icon: FaTwitter, 
      color: 'hover:text-blue-400',
      bgColor: 'bg-sky-100 hover:bg-sky-200'
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/_rawatsahil_/', 
      icon: FaInstagram, 
      color: 'hover:text-pink-500',
      bgColor: 'bg-pink-100 hover:bg-pink-200'
    }
  ]

  const stats = [
    { icon: HiClock, value: '2h', label: 'Avg. Response Time' },
    { icon: HiChat, value: `${submissions.length}`, label: 'Total Submissions' },
    { icon: HiGlobe, value: 'Worldwide', label: 'Remote Work' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const unreadCount = submissions.filter(sub => !sub.read).length

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white to-gray-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-60 h-60 sm:w-80 sm:h-80 bg-primary-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Admin Panel */}
        {submissions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <HiDatabase className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold text-gray-900">
                    {submissions.length} Submission{submissions.length !== 1 ? 's' : ''}
                  </span>
                  {unreadCount > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {unreadCount} new
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setShowSubmissions(!showSubmissions)}
                  variant="outline"
                  size="small"
                  className="flex items-center space-x-2"
                >
                  {showSubmissions ? <HiEyeOff className="w-4 h-4" /> : <HiEye className="w-4 h-4" />}
                  <span>{showSubmissions ? 'Hide' : 'View'} Submissions</span>
                </Button>
                <Button
                  onClick={exportSubmissions}
                  variant="outline"
                  size="small"
                  className="flex items-center space-x-2"
                  disabled={submissions.length === 0}
                >
                  <HiDownload className="w-4 h-4" />
                  <span>Export</span>
                </Button>
                {unreadCount > 0 && (
                  <Button
                    onClick={markAllAsRead}
                    variant="outline"
                    size="small"
                    className="flex items-center space-x-2"
                  >
                    <HiCheckCircle className="w-4 h-4" />
                    <span>Mark All Read</span>
                  </Button>
                )}
                <Button
                  onClick={clearSubmissions}
                  variant="outline"
                  size="small"
                  className="flex items-center space-x-2 text-red-600 border-red-200 hover:bg-red-50"
                  disabled={submissions.length === 0}
                >
                  <HiTrash className="w-4 h-4" />
                  <span>Clear All</span>
                </Button>
              </div>
            </div>

            {/* Submissions List */}
            {showSubmissions && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 border-t pt-4"
              >
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <div className="relative flex-1">
                    <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search submissions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <HiX className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="all">All Messages</option>
                    <option value="unread">Unread Only</option>
                    <option value="read">Read Only</option>
                  </select>
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredSubmissions.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      No submissions found
                    </div>
                  ) : (
                    filteredSubmissions.map((submission) => (
                      <motion.div
                        key={submission.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                          submission.read 
                            ? 'bg-gray-50 border-gray-200 hover:bg-gray-100' 
                            : 'bg-blue-50 border-blue-200 hover:bg-blue-100'
                        } ${
                          selectedSubmission?.id === submission.id ? 'ring-2 ring-primary-500' : ''
                        }`}
                        onClick={() => setSelectedSubmission(submission)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-gray-900">{submission.name}</h4>
                              {!submission.read && (
                                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                                  New
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{submission.email}</p>
                            <p className="text-sm font-medium text-gray-900">{submission.subject}</p>
                          </div>
                          <div className="flex space-x-1 ml-2">
                            {!submission.read && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  markAsRead(submission.id)
                                }}
                                className="text-xs text-gray-500 hover:text-green-600 transition-colors"
                                title="Mark as read"
                              >
                                <HiCheckCircle className="w-4 h-4" />
                              </button>
                            )}
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                deleteSubmission(submission.id)
                              }}
                              className="text-xs text-gray-500 hover:text-red-600 transition-colors"
                              title="Delete submission"
                            >
                              <HiTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-2 line-clamp-2">{submission.message}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(submission.timestamp).toLocaleString()}
                        </p>
                      </motion.div>
                    ))
                  )}
                </div>

                {/* Selected Submission Detail */}
                {selectedSubmission && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-white border border-gray-200 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{selectedSubmission.name}</h3>
                        <p className="text-gray-600">{selectedSubmission.email}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(selectedSubmission.timestamp).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedSubmission(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <HiX className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Subject:</h4>
                      <p className="text-gray-700">{selectedSubmission.subject}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Message:</h4>
                      <p className="text-gray-700 whitespace-pre-wrap">{selectedSubmission.message}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Rest of the component remains the same */}
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 shadow-lg text-xs sm:text-sm"
          >
            <HiChat className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600" />
            <span className="font-medium text-gray-700">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Let's Work Together
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto px-4 sm:px-0"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 text-center shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary-600 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm sm:text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 font-medium group-hover:text-gray-700 transition-colors leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                I'm always excited to discuss new opportunities, whether it's a freelance project, 
                collaboration, or full-time position. Let's create something extraordinary together!
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    variants={cardVariants}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="block p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200/50 hover:border-gray-300 transition-all duration-300 group cursor-pointer bg-gradient-to-r from-white to-gray-50/50 hover:shadow-lg"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${info.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <info.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-sm sm:text-base truncate">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base truncate">
                          {info.value}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 sm:mt-1 truncate">
                          {info.description}
                        </p>
                      </div>
                      <HiPaperAirplane className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gray-200/50">
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center space-x-2 text-sm sm:text-base">
                  <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600" />
                  <span>Follow My Journey</span>
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={cardVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${social.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0`}
                      title={social.name}
                    >
                      <social.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary-200/30"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Currently Available</h4>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">Open for new projects and collaborations</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Send me a message</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Fill out the form below and I'll get back to you soon.</p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Name *
                    </label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                      {focusedField === 'name' && (
                        <motion.div
                          layoutId="inputFocus"
                          className="absolute inset-0 border-2 border-primary-500 rounded-lg sm:rounded-xl -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Email *
                    </label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                      {focusedField === 'email' && (
                        <motion.div
                          layoutId="inputFocus"
                          className="absolute inset-0 border-2 border-primary-500 rounded-lg sm:rounded-xl -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Subject *
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base"
                      placeholder="What's this about?"
                    />
                    {focusedField === 'subject' && (
                      <motion.div
                        layoutId="inputFocus"
                        className="absolute inset-0 border-2 border-primary-500 rounded-lg sm:rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Message *
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 placeholder-gray-400 text-sm sm:text-base resize-none"
                      placeholder="Tell me about your project, ideas, or how we can collaborate..."
                    />
                    {focusedField === 'message' && (
                      <motion.div
                        layoutId="inputFocus"
                        className="absolute inset-0 border-2 border-primary-500 rounded-lg sm:rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 text-sm sm:text-base"
                    size="large"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full mr-2 sm:mr-3"
                        />
                        Sending your message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center relative z-10">
                        <HiPaperAirplane className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </span>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />
                  </Button>
                </motion.div>

                <p className="text-xs text-gray-500 text-center">
                  I typically respond within 2 hours during business hours
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Bottom Padding */}
        <div className="h-4 sm:h-8 lg:h-12"></div>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default Contact