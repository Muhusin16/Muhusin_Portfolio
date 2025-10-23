import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, Users } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Housing First Minnesota',
      description: 'A comprehensive web application for residential builders association, focusing on housing industry advocacy and member services.',
      longDescription: 'Developed a full-stack application using Next.js for both frontend and backend. Implemented user authentication, member management, and advocacy tracking features. The platform serves as a central hub for Minnesota\'s housing industry professionals.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Next.js', 'MongoDB', 'Firestore', 'RESTful APIs', 'Tailwind CSS'],
      github: 'https://github.com/Muhusin16/housing-first',
      demo: 'https://housing-first-mn.vercel.app',
      status: 'Completed',
      duration: '6 months',
      team: '3 developers',
      features: [
        'Member Management System',
        'Advocacy Tracking',
        'Event Management',
        'Resource Library',
        'Newsletter System'
      ]
    },
    {
      id: 2,
      title: 'Gemini Manufacturing Portal',
      description: 'Web application for Gemini manufacturing company with modern UI/UX design and comprehensive business management features.',
      longDescription: 'Built a complete business management portal for Gemini manufacturing company. Features include inventory management, order tracking, customer management, and analytics dashboard. Implemented responsive design with modern UI components.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
      github: 'https://github.com/Muhusin16/gemini-portal',
      demo: 'https://gemini-manufacturing.vercel.app',
      status: 'In Progress',
      duration: '3 months',
      team: '2 developers',
      features: [
        'Inventory Management',
        'Order Tracking',
        'Customer Portal',
        'Analytics Dashboard',
        'Reporting System'
      ]
    },
    {
      id: 3,
      title: 'Lost & Found Application',
      description: 'A comprehensive lost and found platform designed for various environments like airports, schools, and hospitals.',
      longDescription: 'Developed a full-stack lost and found application with user and admin interfaces. The platform facilitates reporting and reclaiming of lost items across different environments with advanced search and matching capabilities.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Bootstrap'],
      github: 'https://github.com/Muhusin16/lost-found-app',
      demo: 'https://lost-found-platform.vercel.app',
      status: 'Completed',
      duration: '9 months',
      team: 'Solo project',
      features: [
        'Item Reporting System',
        'Advanced Search',
        'Image Recognition',
        'Admin Dashboard',
        'Notification System',
        'Multi-location Support'
      ]
    },
    {
      id: 4,
      title: 'Housekeeping Application',
      description: 'A comprehensive housekeeping management system designed for hotels, hospitals, and commercial facilities.',
      longDescription: 'Developed a complete housekeeping management platform with task scheduling, staff management, quality control, and reporting features. The system streamlines housekeeping operations and ensures high standards of cleanliness.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Bootstrap', 'Socket.io'],
      github: 'https://github.com/Muhusin16/housekeeping-app',
      demo: 'https://housekeeping-management.vercel.app',
      status: 'Completed',
      duration: '4 months',
      team: 'Solo project',
      features: [
        'Task Scheduling System',
        'Staff Management',
        'Quality Control',
        'Reporting Dashboard',
        'Real-time Updates',
        'Mobile Responsive'
      ]
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Applications' },
    { key: 'api', label: 'APIs & Backend' }
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-slate-800 dark:text-slate-200">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A showcase of my recent work and the technologies I've used to build innovative solutions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card group overflow-hidden"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-slate-500 dark:text-slate-400">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : project.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {project.team}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-slate-600 dark:text-slate-400">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
              Interested in working together?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create innovative solutions. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects