import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import PaperCard from '../components/PaperCard'
import departments from '../data/departments.json'
import papers from '../data/papers.json'

const DepartmentDetail = () => {
  const { slug } = useParams()
  const department = departments.find(d => d.slug === slug)
  const deptPapers = papers.filter(p => p.department === slug)

  const handleDownload = (paperId) => {
    console.log('Download paper:', paperId)
  }

  if (!department) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Department not found</h1>
        <Link to="/departments" className="text-primary dark:text-blue-400 hover:underline mt-4 inline-block">
          Back to Departments
        </Link>
      </div>
    )
  }

  return (
    <div className="page-transition max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/departments"
        className="inline-flex items-center gap-2 text-primary dark:text-blue-400 hover:text-primary dark:hover:text-blue-300 mb-8 font-semibold transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Departments
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex items-start gap-4"
      >
        <div className="text-6xl">{department.icon}</div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {department.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {department.description}
          </p>
          <div className="mt-4 inline-block px-6 py-2 bg-primary text-white rounded-lg font-semibold">
            {deptPapers.length} Papers Available
          </div>
        </div>
      </motion.div>

      {deptPapers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deptPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <PaperCard paper={paper} onDownload={handleDownload} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-2xl">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No papers available for this department yet.
          </p>
        </div>
      )}
    </div>
  )
}

export default DepartmentDetail
