import { useState } from 'react'
import { motion } from 'framer-motion'
import SearchBar from '../components/SearchBar'
import PaperCard from '../components/PaperCard'
import papers from '../data/papers.json'

const Search = () => {
  const [searchResults, setSearchResults] = useState(papers)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
    const results = papers.filter(paper =>
      paper.title.toLowerCase().includes(query.toLowerCase()) ||
      paper.subject.toLowerCase().includes(query.toLowerCase()) ||
      paper.department.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
  }

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
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Search Papers
        </h1>
        <SearchBar onSearch={handleSearch} />
      </motion.div>

      {searchQuery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-center text-gray-600 dark:text-gray-400"
        >
          <p>
            Found <span className="font-bold text-primary dark:text-blue-400">{searchResults.length}</span> results for "<span className="font-semibold">{searchQuery}</span>"
          </p>
        </motion.div>
      )}

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((paper, index) => (
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
      ) : searchQuery ? (
        <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-2xl">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No papers found for your search. Try different keywords.
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default Search
