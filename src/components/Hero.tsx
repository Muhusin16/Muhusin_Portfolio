import { motion } from 'framer-motion'
import { Download, ChevronDown, Code, Coffee, Rocket } from 'lucide-react'

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

  const floatingElements = [
    { icon: Code, delay: 0, position: 'top-20 left-10' },
    { icon: Coffee, delay: 1, position: 'top-40 right-20' },
    { icon: Rocket, delay: 2, position: 'bottom-40 left-20' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} p-4 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <element.icon className="h-8 w-8 text-blue-500 dark:text-blue-400" />
          </motion.div>
        ))}
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 font-medium"
            >
              👋 Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black"
            >
              <span className="gradient-text">Mohamed Muhusin S</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300">
                Software Engineer
              </h2>
              <div className="flex flex-wrap justify-center gap-4 text-xl sm:text-2xl text-slate-600 dark:text-slate-400">
                <span className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
                  React
                </span>
                <span className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
                  Next.js
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Passionate developer with <span className="text-blue-600 dark:text-blue-400 font-semibold">2+ years</span> of experience building 
            <span className="text-gradient font-semibold"> responsive web applications</span> and 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> scalable solutions</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-3 text-lg px-8 py-4 glow"
            >
              <Download className="h-6 w-6" />
              Download CV
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
          >
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '10+', label: 'Projects Completed' },
              { number: '5+', label: 'Technologies' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-white/20 dark:border-slate-700/50"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
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
          className="flex flex-col items-center text-slate-400 dark:text-slate-500"
        >
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero