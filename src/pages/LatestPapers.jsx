import { useState } from 'react'
import { motion } from 'framer-motion'
import PaperCard from '../components/PaperCard'
import papers from '../data/papers.json'

const LatestPapers = () => {
  const [filteredPapers] = useState(papers)

  const handleDownload = (paperId) => {
    console.log('Download paper:', paperId)
  }

  return (
    <div className="page-transition max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Latest Papers
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Recently added question papers from all departments and semesters
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPapers.map((paper, index) => (
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
    </div>
  )
}

export default LatestPapers
