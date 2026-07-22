import { motion } from 'framer-motion'

const Disclaimer = () => {
  return (
    <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-800 dark:text-white mb-12"
      >
        Disclaimer
      </motion.h1>

      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">General Disclaimer</h2>
          <p className="leading-relaxed">
            The information provided on BU PYQ website is for educational purposes only. While we strive to ensure that all question papers and materials are accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the content.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">No Professional Advice</h2>
          <p className="leading-relaxed">
            The content on our website is not intended to constitute professional advice. If you require professional advice, please consult with the appropriate authorities at Bhattadev University or qualified professionals.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Limitation of Liability</h2>
          <p className="leading-relaxed">
            In no event shall BU PYQ be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use the materials on this website.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Intellectual Property Rights</h2>
          <p className="leading-relaxed">
            The question papers available on this website are for educational purposes. Users must respect intellectual property rights and use the materials only for personal study purposes. Unauthorized reproduction or distribution is prohibited.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">External Links</h2>
          <p className="leading-relaxed">
            Our website may contain links to external websites. We are not responsible for the content, accuracy, or practices of these external sites. The inclusion of links does not constitute an endorsement.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Changes to Disclaimer</h2>
          <p className="leading-relaxed">
            We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.
          </p>
        </motion.section>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-gray-500 dark:text-gray-500 text-center"
        >
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>
      </div>
    </div>
  )
}

export default Disclaimer
