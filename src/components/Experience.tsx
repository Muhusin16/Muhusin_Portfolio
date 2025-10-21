import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building, GraduationCap, Award } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'Zool Tech Solutions Pvt Ltd',
      location: 'Bengaluru, Karnataka, India',
      period: 'August 2023 - Present',
      duration: '1+ years',
      description: 'Developing full-stack web applications using modern technologies and frameworks.',
      achievements: [
        'Successfully completed Housing First Minnesota project for residential builders association',
        'Developed full-stack applications using Next.js for both frontend and backend',
        'Worked on Gemini manufacturing company web application development',
        'Currently developing Lost and Found application with user and admin interfaces',
        'Maintained and integrated RESTful APIs for seamless data flow',
        'Collaborated effectively with teams to manage entire development process',
        'Gained 2+ years of experience in web application development'
      ],
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Firebase', 'React', 'TypeScript', 'Express.js', 'RESTful APIs', 'Strapi'],
      icon: Building,
      color: 'from-blue-500 to-purple-500'
    }
  ]

  const education = [
    {
      type: 'education',
      title: 'Bachelor of Engineering - BE',
      company: 'DHAANISH AHMED INSTITUTE OF TECHNOLOGY',
      location: 'Coimbatore, India',
      period: 'September 2017 - June 2021',
      duration: '4 years',
      description: 'Mechanical Engineering with focus on problem-solving and technical skills.',
      achievements: [
        'Graduated with CGPA: 8.7/10',
        'Completed final year project on automation systems',
        'Participated in technical competitions and workshops',
        'Developed strong analytical and problem-solving skills'
      ],
      technologies: ['Engineering Mathematics', 'Mechanical Design', 'CAD/CAM', 'Project Management', 'Technical Writing'],
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      type: 'education',
      title: '12th Grade',
      company: 'Sri Sakthi vinayagar Matric Hr.sec School',
      location: 'Cumbum, Tamil Nadu',
      period: 'June 2016 - May 2017',
      duration: '1 year',
      description: 'Higher Secondary Education with focus on science and mathematics.',
      achievements: [
        'Scored 74.2% in final examinations',
        'Specialized in Mathematics and Physics',
        'Participated in science exhibitions',
        'Developed strong foundation in analytical thinking'
      ],
      technologies: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Computer Science'],
      icon: GraduationCap,
      color: 'from-amber-500 to-orange-500'
    },
    {
      type: 'education',
      title: 'SSLC (10th Grade)',
      company: 'Anns Matric Higher Secondary School',
      location: 'Cumbum, Tamil Nadu',
      period: 'June 2014 - May 2015',
      duration: '1 year',
      description: 'Secondary School Leaving Certificate with excellent academic performance.',
      achievements: [
        'Scored 92.7% in final examinations',
        'Secured distinction in Mathematics and Science',
        'Active participation in extracurricular activities',
        'Strong foundation in core subjects'
      ],
      technologies: ['Mathematics', 'Science', 'Social Studies', 'English', 'Tamil'],
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const certifications = [
    {
      type: 'certification',
      title: 'Full Stack Web Development',
      company: 'Online Platform',
      location: 'Remote',
      period: '2023',
      duration: '6 months',
      description: 'Comprehensive course covering modern web development technologies.',
      achievements: [
        'Mastered React.js and Node.js',
        'Learned database design and management',
        'Completed multiple hands-on projects',
        'Gained expertise in modern development practices'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML/CSS'],
      icon: Award,
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const allItems = [...experiences, ...education, ...certifications]

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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: "easeInOut" as const
      }
    }
  }

  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20"></div>
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
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A timeline of my professional experience, education, and continuous learning journey
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"
              variants={timelineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />

            {/* Timeline Items */}
            <div className="space-y-12">
              {allItems.map((item, index) => (
                <motion.div
                  key={`${item.type}-${index}`}
                  variants={itemVariants}
                  className="relative flex items-start space-x-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <item.icon className="h-8 w-8" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="flex-1 card p-8 space-y-4"
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                          {item.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.type === 'work' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : item.type === 'education'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        }`}>
                          {item.type === 'work' ? 'Work Experience' : 
                           item.type === 'education' ? 'Education' : 'Certification'}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{item.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                        Technologies & Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
              Ready to be part of my next chapter?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I'm always looking for new opportunities to grow, learn, and make a meaningful impact. 
              Let's connect and explore how we can work together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience