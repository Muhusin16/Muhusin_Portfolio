import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    { icon: Github, href: 'https://github.com/Muhusinte', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohamed-muhusin', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:muhusin161099@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Creating beautiful, functional, and user-centered digital experiences. 
              Let's work together to bring your ideas to life.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-dark-800 hover:bg-primary-600 rounded-full transition-all duration-300 group"
                >
                  <social.icon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>muhusin161099@gmail.com</p>
              <p>+91 8508179608</p>
              <p>Bengaluru, India</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-dark-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-center md:text-left mb-4 md:mb-0"
            >
              © 2024 Portfolio. Made with{' '}
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />
              {' '}by Mohamed Muhusin S
            </motion.p>

            {/* Back to Top Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
