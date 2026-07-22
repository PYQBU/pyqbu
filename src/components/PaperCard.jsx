import { motion } from 'framer-motion'

const PaperCard = ({ paper, onDownload }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="card-hover bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all"
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
          {paper.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-200 px-3 py-1 rounded-full">
            {paper.subject}
          </span>
          <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-3 py-1 rounded-full">
            Sem {paper.semester}
          </span>
          <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200 px-3 py-1 rounded-full">
            {paper.year}
          </span>
        </div>
      </div>

      <div className="border-t dark:border-gray-700 pt-4 mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          <span className="font-semibold">File Size:</span> {paper.fileSize}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold">Downloads:</span> {paper.downloadCount}
        </p>
      </div>

      <button
        onClick={() => onDownload(paper.id)}
        className="w-full btn-gradient text-white font-bold py-3 px-4 rounded-xl transition-all"
      >
        ↓ Download
      </button>
    </motion.div>
  )
}

export default PaperCard
