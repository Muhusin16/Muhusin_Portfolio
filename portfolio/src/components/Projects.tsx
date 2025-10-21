import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Eye, Code2, Palette, Smartphone } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

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

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'design', label: 'UI/UX Design' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Housing First Minnesota Project',
      description: 'A leading trade association for residential builders, remodelers, developers, and building industry suppliers in Minnesota. The project focused on uniting the housing industry through advocacy for housing and homeownership.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Next.js', 'MongoDB', 'Firestore', 'RESTful APIs'],
      github: 'https://github.com/Muhusinte',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Gemini Web Application',
      description: 'Web application development project for Gemini, a manufacturing company. Full-stack web development with modern UI/UX design.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Bootstrap'],
      github: 'https://github.com/Muhusinte',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Lost and Found Application',
      description: 'Currently developing a Lost and Found application designed to facilitate the reporting and reclaiming of lost items in various environments, such as airports, schools, and hospitals.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Bootstrap'],
      github: 'https://github.com/Muhusinte',
      live: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Housekeeping Application',
      description: 'Cutting-edge housekeeping application that revolutionizes task management within companies, offering a streamlined and transparent workflow tracking system.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Git', 'Firebase'],
      github: 'https://github.com/Muhusinte',
      live: '#',
      featured: false
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Code2
      case 'mobile': return Smartphone
      case 'design': return Palette
      default: return Eye
    }
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
          >
            A showcase of my recent work and side projects
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category)
            
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`card group relative overflow-hidden ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                    <CategoryIcon className="h-16 w-16 text-white opacity-80" />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github className="h-6 w-6 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="h-6 w-6 text-white" />
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's create something incredible together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
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
