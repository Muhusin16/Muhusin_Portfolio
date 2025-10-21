import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'

const Hero = () => {
  const handleDownloadCV = () => {
    // Create and download PDF CV
    const link = document.createElement('a');
    link.href = './Mohamed_Muhusin_CV.pdf';
    link.download = 'Mohamed_Muhusin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Muhusin16', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohamed-muhusin', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:muhusin161099@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 font-medium"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              <span className="gradient-text">Mohamed Muhusin S</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
            >
              Software Engineer | Node.js, React, and Next.js
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate developer with over 2+ years of experience in building responsive web applications. 
            Proficient in Node.js, Express.js, MongoDB, Firebase and skilled in various frameworks including React.js, Next.js and Strapi.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download CV
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 pt-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 dark:text-gray-500"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
