import { motion } from 'framer-motion'
import { Code, Palette, Users, Award } from 'lucide-react'

const About = () => {
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

  const stats = [
    { icon: Code, number: '5+', label: 'Projects Completed' },
    { icon: Users, number: '2+', label: 'Years Experience' },
    { icon: Award, number: '3+', label: 'Major Projects' },
    { icon: Palette, number: '10+', label: 'Technologies Used' },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Get to know me better
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold">MMS</span>
                  </div>
                  <p className="text-lg font-semibold">Mohamed Muhusin S</p>
                  <p className="text-sm opacity-90">Software Engineer</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Passionate Software Engineer
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a passionate developer with over 2+ years of experience in building responsive web applications. 
                  Proficient in Node.js, Express.js, MongoDB, Firebase and skilled in various frameworks including React.js, Next.js and Strapi.
                </p>
                
                <p>
                  Strong in API integration, with a solid understanding of programming principles and logical implementation. 
                  Experienced in real-time application development, adept at managing project scalability and meeting real-time requirements.
                </p>
                
                <p>
                  Collaborative team player committed to achieving company goals and delivering tasks according to project specifications. 
                  Currently working at Zool Tech Solutions Pvt Ltd in Bengaluru, contributing to various innovative projects.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white dark:bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
