import { motion } from 'framer-motion'
import DepartmentCard from '../components/DepartmentCard'
import departments from '../data/departments.json'

const Departments = () => {
  return (
    <div className="page-transition max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Departments
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Browse question papers by department
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <DepartmentCard department={dept} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Departments
