import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Database, 
  Globe, 
  Server, 
  GitBranch
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'Next.js', level: 85, color: 'bg-slate-500' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-500' },
        { name: 'Express.js', level: 80, color: 'bg-gray-500' },
        { name: 'RESTful APIs', level: 85, color: 'bg-blue-500' },
        { name: 'GraphQL', level: 70, color: 'bg-pink-500' },
        { name: 'Microservices', level: 75, color: 'bg-purple-500' },
        { name: 'Authentication', level: 80, color: 'bg-red-500' },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 85, color: 'bg-green-600' },
        { name: 'Firebase', level: 80, color: 'bg-orange-500' },
        { name: 'MySQL', level: 75, color: 'bg-blue-600' },
        { name: 'PostgreSQL', level: 70, color: 'bg-blue-700' },
        { name: 'Redis', level: 65, color: 'bg-red-500' },
        { name: 'AWS', level: 70, color: 'bg-orange-600' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: GitBranch,
      color: 'from-amber-500 to-orange-500',
      skills: [
        { name: 'Git', level: 90, color: 'bg-orange-500' },
        { name: 'Docker', level: 75, color: 'bg-blue-500' },
        { name: 'Strapi', level: 80, color: 'bg-purple-500' },
        { name: 'Figma', level: 70, color: 'bg-pink-500' },
        { name: 'Bitbucket', level: 85, color: 'bg-blue-600' },
        { name: 'Linux', level: 75, color: 'bg-yellow-600' },
      ]
    }
  ]

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
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card p-8 space-y-6"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3,
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8"
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
              Additional Expertise
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Problem Solving', 'Team Collaboration', 'Code Review', 'Agile Methodology',
                'Project Management', 'UI/UX Design', 'Performance Optimization', 'Testing',
                'Documentation', 'Mentoring', 'Continuous Learning', 'Innovation'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 bg-white dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills