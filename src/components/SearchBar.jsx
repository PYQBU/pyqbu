import { Search as SearchIcon } from 'lucide-react'
import { useState } from 'react'

const SearchBar = ({ onSearch, placeholder = 'Search Here...' }) => {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="search-input flex-1 px-6 py-4 rounded-2xl bg-gray-100 dark:bg-gray-700 dark:text-white text-lg"
        />
        <button
          type="submit"
          className="btn-gradient text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <SearchIcon size={20} />
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
