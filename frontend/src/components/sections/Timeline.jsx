import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiBriefcase, 
  HiAcademicCap, 
  HiBadgeCheck, 
  HiCalendar, 
  HiLocationMarker, 
  HiCheck, 
  HiCode,
  HiSparkles,
  HiDownload,
  HiArrowRight,
  HiScale
} from 'react-icons/hi';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaAws,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaGithub
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiGraphql,
  SiWordpress,
  SiPhp,
  SiAdobe,
  SiCanva,
  SiFigma
} from 'react-icons/si';
import { toast } from 'react-toastify';

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [hoveredItem, setHoveredItem] = useState(null);

  // Icon mapping for technologies
  const techIcons = {
    'React': FaReact,
    'TypeScript': SiTypescript,
    'Next.js': SiNextdotjs,
    'Node.js': FaNodeJs,
    'MongoDB': SiMongodb,
    'Express': SiExpress,
    'GraphQL': SiGraphql,
    'Tailwind CSS': SiTailwindcss,
    'AWS': FaAws,
    'JavaScript': FaReact,
    'HTML5': FaHtml5,
    'CSS3': SiTailwindcss,
    'WordPress': SiWordpress,
    'PHP': SiPhp,
    'Python': FaPython,
    'Java': FaJava,
    'Machine Learning': FaPython,
    'Data Structures': HiCode,
    'Algorithms': HiCode,
    'UX Research': HiAcademicCap,
    'Database Systems': SiMongodb,
    'Software Engineering': HiBriefcase,
    'Git': FaGitAlt,
    'GitHub': FaGithub,
    'Adobe Photoshop': SiAdobe,
    'Adobe Illustrator': SiAdobe,
    'Canva': SiCanva,
    'Figma': SiFigma,
    'Postman': HiCode
  };

  const experienceData = [
  {
    id: 1,
    title: "Full Stack Development Intern",
    company: "Pinnacle Labs",
    period: "May 2024 - July 2024",
    location: "Remote",
    description:
      "Worked on developing and optimizing full-stack web applications using the MERN stack. Contributed to building user interfaces and integrating APIs for real-world client projects.",
    achievements: [
      "Developed and deployed responsive web applications using React.js and Node.js",
      "Integrated RESTful APIs for smooth data flow between frontend and backend",
      "Enhanced user interface components improving usability and performance",
      "Collaborated in an agile team environment for project delivery",
      "Improved code structure and debugging efficiency through modularization"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git", "Postman"],
    type: "internship",
    icon: HiBriefcase
  },
  {
    id: 2,
    title: "Web Development Intern",
    company: "CodeAlpha",
    period: "January 2024 - March 2024",
    location: "Remote",
    description:
      "Focused on building interactive frontend web applications and learning best practices of modern web development using React.js and Tailwind CSS.",
    achievements: [
      "Created multiple frontend projects including a Counter App and Restaurant Menu Viewer",
      "Improved project responsiveness and UI design using Tailwind CSS",
      "Learned to manage application state and handle user interactions efficiently",
      "Practiced integrating RESTful APIs and reusable components",
      "Contributed to clean, maintainable, and scalable project structures"
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "GitHub"],
    type: "internship",
    icon: HiCode
  },
  {
    id: 3,
    title: "Graphic Design Intern",
    company: "InAmigos Foundation",
    period: "June 2024 - August 2024",
    location: "Remote",
    description:
      "Created impactful digital and print designs to support marketing campaigns and brand communication for social initiatives.",
    achievements: [
      "Designed promotional posters, social media creatives, and digital campaign visuals",
      "Maintained brand consistency across all visual assets",
      "Worked closely with the marketing team to enhance public engagement",
      "Developed creative concepts for awareness and donation campaigns",
      "Improved overall design quality using Adobe and Canva tools"
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"],
    type: "internship",
    icon: HiSparkles
  }
];


  const educationData = [
  {
    id: 1,
    title: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Swami Vivekananda Institute of Engineering and Technology (SVIET)",
    period: "Aug 2023 - Jul 2027",
    location: "Banur, Punjab, India",
    description:
      "Pursuing a strong foundation in computer science, software development, and modern web technologies. Focused on building scalable web applications and enhancing technical creativity through real-world projects and internships.",
    achievements: [
      "Maintained a GPA of 8.00 / 10.00 (Till 4th Semester)",
      "Completed internships in Web Development and Graphic Design at reputed organizations",
      "Developed multiple frontend and full-stack projects using MERN stack",
      "Actively participated in tech fests and design competitions",
      "Continuously learning modern frameworks and UI/UX principles"
    ],
    technologies: [
      "C++",
      "JavaScript (ES6+)",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS"
    ],
    type: "education",
    icon: HiAcademicCap
  },
  {
    id: 2,
    title: "Senior Secondary Education (Class XII) – Science Stream",
    institution: "Government Model Senior Secondary School",
    period: "2021 - 2023",
    location: "India",
    description:
      "Focused on core science subjects including Physics, Chemistry, and Mathematics. Built early interest in programming and web technologies during this period.",
    achievements: [
      "Secured distinction in final examinations",
      "Represented school in coding and science competitions",
      "Started learning web development fundamentals through online platforms"
    ],
    technologies: ["Physics", "Chemistry", "Mathematics", "Computer Science Basics"],
    type: "education",
    icon: HiAcademicCap
  }
];


  const certificationData = [
  {
    id: 1,
    title: "Bloomberg Market Concepts (BMC)",
    institution: "Bloomberg LP",
    period: "2025",
    description:
      "Completed the Bloomberg Market Concepts certification covering financial markets, economics, and investment analysis. Developed an understanding of equity, fixed income, currency, and portfolio management principles.",
    badge: "📊",
    technologies: ["Financial Analytics", "Economics", "Investment Principles"],
    icon: HiBadgeCheck
  },
  {
    id: 2,
    title: "MERN Stack Web Development",
    institution: "Online Course (Self-paced)",
    period: "2025",
    description:
      "Comprehensive certification in full-stack web development using MongoDB, Express.js, React.js, and Node.js. Built responsive and dynamic applications following modern UI/UX principles.",
    badge: "💻",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    icon: FaReact
  },
  {
    id: 3,
    title: "Graphic Design and Creative Tools",
    institution: "Coursera / Canva Design School",
    period: "2025",
    description:
      "Certified in graphic design tools and visual communication techniques. Focused on branding, digital poster creation, and UI design using modern design platforms.",
    badge: "🎨",
    technologies: ["Canva", "Figma", "Adobe Photoshop", "Illustration"],
    icon: HiSparkles
  },
  {
    id: 4,
    title: "SQL and Database Management Systems",
    institution: "NPTEL / Self Learning",
    period: "2025",
    description:
      "Completed coursework and certification in SQL and relational database systems. Gained practical experience in query optimization and data modeling for real-world projects.",
    badge: "🗄️",
    technologies: ["SQL", "MySQL", "Database Design", "Data Modeling"],
    icon: HiScale
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
  };

  const tabContent = {
    experience: experienceData,
    education: educationData,
    certifications: certificationData
  };

const handleDownloadResume = () => {
  // Show downloading toast
  toast.info('📄 Downloading resume...', {
    position: "top-right",
    autoClose: 2000,
  });

  // Path to your resume file (place it inside public folder)
  const fileUrl = "/SR_RESUME.pdf"; // example: public/resume.pdf

  // Create an anchor element for downloading
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "SR_RESUME.pdf"; // customize filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Success toast after short delay
  setTimeout(() => {
    toast.success('✅ Resume downloaded successfully!', {
      position: "top-right",
      autoClose: 2500,
    });
  }, 1500);
};


  const renderTechnologies = (technologies) => (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {technologies.map((tech, idx) => {
        const IconComponent = techIcons[tech];
        return (
          <span
            key={idx}
            className="flex items-center space-x-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-primary-100 text-primary-700 rounded text-xs font-medium border border-primary-200/50 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-help"
            title={tech}
          >
            {IconComponent && <IconComponent className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
            <span className="hidden xs:inline">{tech}</span>
          </span>
        );
      })}
    </div>
  );

  return (
    <section id="timeline" className="section-padding bg-gradient-to-br from-white to-gray-50/30 relative overflow-hidden">
      {/* Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-primary-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
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
            <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">My Journey</span>
          </motion.div>
          
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Professional Timeline
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            A comprehensive journey through my professional growth, education, and achievements
          </p>
        </motion.div>

        {/* Enhanced Tab Navigation - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-lg border border-gray-200/50">
            {[
              { key: 'experience', label: 'Experience', icon: HiBriefcase, count: experienceData.length },
              { key: 'education', label: 'Education', icon: HiAcademicCap, count: educationData.length },
              { key: 'certifications', label: 'Certifications', icon: HiBadgeCheck, count: certificationData.length }
            ].map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center space-x-1.5 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 group relative ${
                  activeTab === tab.key
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">{tab.label}</span>
                <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold ${
                  activeTab === tab.key
                    ? 'bg-white/20 text-white'
                    : 'bg-primary-100 text-primary-600'
                }`}>
                  {tab.count}
                </span>
                
                {/* Active indicator */}
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 border border-primary-400 sm:border-2 rounded-lg sm:rounded-xl shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Timeline Content */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Enhanced Timeline Line - Responsive */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-300 transform -translate-x-1/2 hidden md:block shadow-lg shadow-primary-500/20"></div>

          {/* Timeline Items */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            <AnimatePresence mode="wait">
              {tabContent[activeTab].map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } group`}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  {/* Enhanced Timeline Dot - Responsive */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary-600 rounded-full border-2 sm:border-4 border-white shadow-lg shadow-primary-500/50 transform -translate-x-1.5 z-10 hidden md:flex items-center justify-center">
                    <motion.div
                      animate={{ scale: hoveredItem === item.id ? 1.2 : 1 }}
                      className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"
                    />
                  </div>

                  {/* Mobile Timeline Dot */}
                  <div className="absolute left-4 sm:left-6 w-2 h-2 sm:w-3 sm:h-3 bg-primary-600 rounded-full border border-white sm:border-2 shadow-lg md:hidden"></div>

                  {/* Content Card - Responsive */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-4 lg:pr-6 xl:pr-12' : 'md:pl-4 lg:pl-6 xl:pl-12'} ml-8 sm:ml-12 md:ml-0`}>
                    <motion.div
                      whileHover={{ y: -3, scale: 1.01 }}
                      className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50 group-hover:border-primary-200/70"
                    >
                      {/* Header - Responsive */}
                      <div className="p-4 sm:p-6 border-b border-gray-200/50 bg-gradient-to-r from-gray-50 to-white">
                        <div className="flex justify-between items-start mb-2 sm:mb-3">
                          <div className="flex items-start space-x-2 sm:space-x-3 flex-1 min-w-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                              {item.icon && <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1 group-hover:text-primary-600 transition-colors truncate">
                                {item.title}
                              </h3>
                              <p className="text-base sm:text-lg font-semibold text-primary-600 truncate">
                                {item.company || item.institution}
                              </p>
                            </div>
                          </div>
                          {item.badge && (
                            <motion.span 
                              className="text-xl sm:text-2xl flex-shrink-0 ml-2"
                              animate={{ rotate: hoveredItem === item.id ? 5 : 0 }}
                            >
                              {item.badge}
                            </motion.span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
                          <span className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded border border-gray-200/50">
                            <HiCalendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="whitespace-nowrap">{item.period}</span>
                          </span>
                          {item.location && (
                            <span className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded border border-gray-200/50">
                              <HiLocationMarker className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              <span className="whitespace-nowrap">{item.location}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description - Responsive */}
                      <div className="p-4 sm:p-6">
                        <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                          {item.description}
                        </p>

                        {/* Achievements - Responsive */}
                        {item.achievements && (
                          <div className="mb-3 sm:mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center space-x-1.5 sm:space-x-2 text-sm sm:text-base">
                              <HiCheck className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500" />
                              <span>Key Achievements</span>
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {item.achievements.map((achievement, idx) => (
                                <motion.li 
                                  key={idx} 
                                  className="flex items-start text-xs sm:text-sm text-gray-600"
                                  whileHover={{ x: 3 }}
                                >
                                  <HiCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies/Skills - Responsive */}
                        {item.technologies && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center space-x-1.5 sm:space-x-2 text-sm sm:text-base">
                              <HiCode className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500" />
                              <span>Technologies & Skills</span>
                            </h4>
                            {renderTechnologies(item.technologies)}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Date Badge for Mobile - Responsive */}
                  <div className="md:hidden absolute left-0 top-4 bg-primary-600 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg flex items-center space-x-1">
                    <HiCalendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span className="whitespace-nowrap">{item.period}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Enhanced Call to Action - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-primary-200/30 max-w-2xl mx-auto">
            <HiSparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md mx-auto leading-relaxed">
              Let's discuss how my experience and skills can contribute to your next project.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 flex items-center space-x-1.5 sm:space-x-2 w-full xs:w-auto justify-center text-sm sm:text-base"
              >
                <HiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Get In Touch</span>
              </button>
              <button
                onClick={handleDownloadResume}
                className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:border-primary-600 hover:text-primary-600 transition-colors flex items-center space-x-1.5 sm:space-x-2 w-full xs:w-auto justify-center text-sm sm:text-base"
              >
                <HiDownload className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Download Resume</span>
              </button>
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
          .xs\\:inline {
            display: inline !important;
          }
          .xs\\:flex-row {
            flex-direction: row !important;
          }
          .xs\\:w-auto {
            width: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;