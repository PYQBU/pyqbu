import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, Share2 } from 'lucide-react'
import papers from '../data/papers.json'

const PaperDetail = () => {
  const { id } = useParams()
  const paper = papers.find(p => p.id === parseInt(id))

  if (!paper) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Paper not found</h1>
        <Link to="/latest-papers" className="text-primary dark:text-blue-400 hover:underline mt-4 inline-block">
          Back to Papers
        </Link>
      </div>
    )
  }

  return (
    <div className="page-transition max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/latest-papers"
        className="inline-flex items-center gap-2 text-primary dark:text-blue-400 hover:text-primary dark:hover:text-blue-300 mb-8 font-semibold transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Papers
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-medium mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          {paper.title}
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pb-8 border-b dark:border-gray-700">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Subject</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{paper.subject}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Semester</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">Sem {paper.semester}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Year</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{paper.year}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">File Size</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{paper.fileSize}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 btn-gradient text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2">
            <Download size={20} />
            Download Paper
          </button>
          <button className="flex-1 border-2 border-primary dark:border-blue-400 text-primary dark:text-blue-400 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors">
            <Share2 size={20} />
            Share
          </button>
        </div>

        <div className="mt-8 pt-8 border-t dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span className="font-semibold">Downloads:</span> {paper.downloadCount}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Uploaded:</span> {new Date(paper.uploadedDate).toLocaleDateString()}
          </p>
        </div>
      </motion.div>

      {/* Preview Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-medium"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Preview</h2>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400">PDF Preview will be displayed here</p>
        </div>
      </motion.div>
    </div>
  )
}

export default PaperDetail
