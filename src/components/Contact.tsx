import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muhusin161099@gmail.com',
      href: 'mailto:muhusin161099@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8508179608',
      href: 'tel:+918508179608',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Muhusin16',
      color: 'from-slate-600 to-slate-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohamed-muhusin',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:muhusin161099@gmail.com',
      color: 'from-red-500 to-red-600'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }, 2000)
  }

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
    <section id="contact" className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
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
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can bring your ideas to life together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                  Get in Touch
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  I'm always excited to hear about new opportunities and interesting projects. 
                  Whether you have a question, want to collaborate, or just want to say hi, 
                  I'd love to hear from you!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center space-x-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} text-white`}>
                      <contact.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        {contact.label}
                      </div>
                      <div className="text-slate-700 dark:text-slate-300 font-semibold">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-gradient-to-r ${social.color} text-white hover:scale-110 transition-transform duration-200`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 dark:text-green-400"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-600 dark:text-red-400"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <span>Something went wrong. Please try again.</span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Footer Message */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you're a startup, established company, or fellow developer, 
              I'd love to hear from you!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact