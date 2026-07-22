import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          About BU PYQ
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Your trusted resource for Bhattadev University question papers
        </p>
      </motion.div>

      <div className="space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            BU PYQ is dedicated to making quality educational resources accessible to all students of Bhattadev University. Our mission is to create a centralized platform where students can easily find and share previous year question papers, helping them prepare effectively for their exams.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '📚 Comprehensive Collection',
                description: 'Access over 1000+ question papers from all departments and semesters',
              },
              {
                title: '🔍 Easy Search',
                description: 'Quickly find papers by department, semester, subject, or year',
              },
              {
                title: '💾 High Quality PDFs',
                description: 'All papers are properly scanned and organized for easy reading',
              },
              {
                title: '🌙 Dark Mode Support',
                description: 'Study comfortably with our built-in dark mode feature',
              },
              {
                title: '📱 Mobile Friendly',
                description: 'Access papers anytime, anywhere on any device',
              },
              {
                title: '🤝 Community Driven',
                description: 'Help others by sharing question papers you have',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="border-l-4 border-primary dark:border-blue-400 pl-6 py-2"
              >
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">How It Works</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Browse',
                description: 'Explore our collection by department, semester, or year',
              },
              {
                step: 2,
                title: 'Search',
                description: 'Use our powerful search feature to find specific papers',
              },
              {
                step: 3,
                title: 'Download',
                description: 'Download question papers in PDF format instantly',
              },
              {
                step: 4,
                title: 'Share',
                description: 'Upload your papers to help other students',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary dark:bg-blue-400 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-primary to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-blue-100 dark:text-gray-300 leading-relaxed mb-6">
            BU PYQ is a student-driven initiative. We believe in the power of sharing knowledge and helping each other succeed. By uploading papers or providing feedback, you become part of this wonderful community of learners.
          </p>
          <p className="text-blue-100 dark:text-gray-300">
            Together, we can make exam preparation easier and more effective for every student at Bhattadev University!
          </p>
        </motion.section>
      </div>
    </div>
  )
}

export default About
