import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award, Users, Code } from 'lucide-react'

const Experience = () => {
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

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Zool Tech Solutions Pvt Ltd',
      location: 'Bengaluru, Karnataka, India',
      period: '08/2023 - Present',
      type: 'Full-time',
      description: 'Product Ideation, Innovation, UI/UX design, and Development Company.',
      achievements: [
        'Successfully completed Housing First Minnesota project for residential builders association',
        'Developed full-stack applications using Next.js for both frontend and backend',
        'Worked on Gemini manufacturing company web application development',
        'Currently developing Lost and Found application with user and admin interfaces',
        'Maintained and integrated RESTful APIs for seamless data flow',
        'Collaborated effectively with teams to manage entire development process',
        'Gained 2+ years of experience in web application development'
      ],
      technologies: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'TypeScript', 'Angular', 'Bootstrap']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Engineering - BE, Mechanical Engineering',
      institution: 'DHAANISH AHMED INSTITUTE OF TECHNOLOGY',
      location: 'Coimbatore, India',
      period: '09/2017 - 06/2021',
      description: 'Graduated with excellent academic performance.',
      achievements: [
        'Graduated with CGPA: 8.7/10',
        'Strong foundation in engineering principles',
        'Developed problem-solving and analytical skills',
        'Completed various technical projects during coursework'
      ]
    },
    {
      degree: '12th Grade',
      institution: 'Sri Sakthi vinayagar Matric Hr.sec School',
      location: 'Cumbum, Tamil Nadu',
      period: '06/2016 - 05/2017',
      description: 'Higher Secondary Education.',
      achievements: [
        'Scored 74.2% in final examinations',
        'Strong foundation in science and mathematics',
        'Active participation in school activities'
      ]
    },
    {
      degree: 'SSLC (10th Grade)',
      institution: 'Anns Matric Higher Secondary School',
      location: 'Cumbum, Tamil Nadu',
      period: '06/2014 - 05/2015',
      description: 'Secondary School Leaving Certificate.',
      achievements: [
        'Scored 92.7% in final examinations',
        'Excellent academic performance',
        'Strong foundation in core subjects'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Training in MERN stack',
      issuer: 'Chennai Training Institute',
      date: '2023',
      credential: 'MERN-2023'
    },
    {
      name: 'Professional course of HVAC design & Revit MEP',
      issuer: 'Reads Engineering LLP',
      date: '2022',
      credential: 'HVAC-2022'
    }
  ]

  return (
    <section id="experience" className="section-padding">
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
            My <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Professional journey and achievements
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
              >
                <Building className="h-8 w-8 text-primary-600 mr-3" />
                Work Experience
              </motion.h3>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        <Building className="h-5 w-5 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary-600" />
                      Key Achievements:
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary-600" />
                      Technologies:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
              >
                <Users className="h-7 w-7 text-primary-600 mr-3" />
                Education
              </motion.h3>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="mb-6"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <div className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {edu.institution}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    {edu.location}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.period}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {edu.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
              >
                <Award className="h-7 w-7 text-primary-600 mr-3" />
                Certifications
              </motion.h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg"
                  >
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <div className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-1">
                      {cert.issuer}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {cert.date} • {cert.credential}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
