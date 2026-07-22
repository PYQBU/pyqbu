import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="page-transition min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="text-9xl font-bold text-primary dark:text-blue-400 mb-4">
          404
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 btn-gradient text-white font-bold py-3 px-8 rounded-xl transition-all"
          >
            <Home size={20} />
            Go Home
          </Link>
          <Link
            to="/search"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary dark:border-blue-400 text-primary dark:text-blue-400 font-bold py-3 px-8 rounded-xl hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
          >
            <Search size={20} />
            Search Papers
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-6xl"
        >
          📚
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotFound
