import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-800 dark:text-white mb-12"
      >
        Privacy Policy
      </motion.h1>

      <div className="space-y-8 text-gray-600 dark:text-gray-400">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Introduction</h2>
          <p className="leading-relaxed">
            Welcome to BU PYQ. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Information We Collect</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>Personal information you voluntarily provide (name, email, phone)</li>
            <li>Information about your browsing activities</li>
            <li>Device and browser information</li>
            <li>Files you upload (question papers)</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">How We Use Your Information</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our website</li>
            <li>To process your uploads and submissions</li>
            <li>To improve our website and services</li>
            <li>To respond to your inquiries and feedback</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Data Security</h2>
          <p className="leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Cookies</h2>
          <p className="leading-relaxed">
            We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at info@bupyq.com
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

export default PrivacyPolicy
