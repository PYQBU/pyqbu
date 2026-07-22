import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SemesterCard = ({ semester }) => {
  return (
    <Link to={`/semester/${semester.number}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        className="card-hover bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all text-center cursor-pointer"
      >
        <div className="text-6xl font-bold text-primary dark:text-blue-400 mb-4">
          {semester.number}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
          Semester {semester.number}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          {semester.paperCount} Papers
        </p>
        <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors">
          View Papers
        </button>
      </motion.div>
    </Link>
  )
}

export default SemesterCard
