import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Palette,
  GitBranch,
  Zap,
  Layers
} from 'lucide-react'

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Palette,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 80 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'API Integration', level: 90 },
      ]
    },
    {
      title: 'Tools & Version Control',
      icon: GitBranch,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'Bitbucket', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Strapi', level: 70 },
      ]
    }
  ]

  const technologies = [
    { name: 'Node.js', icon: Code },
    { name: 'Express.js', icon: Code },
    { name: 'MongoDB', icon: Database },
    { name: 'JavaScript', icon: Code },
    { name: 'React.js', icon: Globe },
    { name: 'Next.js', icon: Globe },
    { name: 'TypeScript', icon: Code },
    { name: 'HTML', icon: Globe },
    { name: 'CSS', icon: Palette },
    { name: 'Firebase', icon: Zap },
    { name: 'MySQL', icon: Database },
    { name: 'Docker', icon: Layers },
  ]

  return (
    <section id="skills" className="section-padding">
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16"
        >
              {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <tech.icon className="h-8 w-8 text-primary-600 mb-3 group-hover:text-primary-500 transition-colors duration-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center mb-8"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                  <category.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly learning new technologies, 
              frameworks, and best practices to stay at the forefront of development. 
              Currently exploring AI/ML integration and advanced cloud architectures.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
