import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import PaperCard from '../components/PaperCard'
import papers from '../data/papers.json'

const SemesterDetail = () => {
  const { semester } = useParams()
  const semesterPapers = papers.filter(p => p.semester === parseInt(semester))

  const handleDownload = (paperId) => {
    console.log('Download paper:', paperId)
  }

  return (
    <div className="page-transition max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/semester-wise"
        className="inline-flex items-center gap-2 text-primary dark:text-blue-400 hover:text-primary dark:hover:text-blue-300 mb-8 font-semibold transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Semesters
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Semester {semester}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Question papers for semester {semester}
        </p>
        <div className="mt-4 inline-block px-6 py-2 bg-primary text-white rounded-lg font-semibold">
          {semesterPapers.length} Papers Available
        </div>
      </motion.div>

      {semesterPapers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semesterPapers.map((paper, index) => (
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
            No papers available for this semester yet.
          </p>
        </div>
      )}
    </div>
  )
}

export default SemesterDetail
