import { motion } from 'framer-motion'

const TermsConditions = () => {
  return (
    <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-800 dark:text-white mb-12"
      >
        Terms & Conditions
      </motion.h1>

      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing and using the BU PYQ website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">2. Use License</h2>
          <p className="leading-relaxed mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on BU PYQ website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">3. Disclaimer</h2>
          <p className="leading-relaxed">
            The materials on BU PYQ website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">4. Limitations</h2>
          <p className="leading-relaxed">
            In no event shall BU PYQ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BU PYQ's website.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">5. Accuracy of Materials</h2>
          <p className="leading-relaxed">
            The materials appearing on BU PYQ website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">6. Materials and Content</h2>
          <p className="leading-relaxed">
            The materials on BU PYQ website are for educational purposes only. Users agree to use the materials only for personal study and not for any commercial purpose. Any unauthorized use of the materials is prohibited.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">7. Termination</h2>
          <p className="leading-relaxed">
            We may terminate or suspend your access to our website and services immediately, without prior notice or liability, if you breach the Terms. Upon termination, your right to use the website will immediately cease.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">8. Governing Law</h2>
          <p className="leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Odisha.
          </p>
        </motion.section>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-sm text-gray-500 dark:text-gray-500 text-center"
        >
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>
      </div>
    </div>
  )
}

export default TermsConditions
