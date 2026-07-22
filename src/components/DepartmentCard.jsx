import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const DepartmentCard = ({ department }) => {
  return (
    <Link to={`/departments/${department.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        className="card-hover bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all text-center cursor-pointer"
      >
        <div className="text-5xl mb-4">{department.icon}</div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {department.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {department.description}
        </p>
        <div className="inline-block px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
          {department.paperCount} Papers
        </div>
      </motion.div>
    </Link>
  )
}

export default DepartmentCard
