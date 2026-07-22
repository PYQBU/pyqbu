import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import DepartmentCard from '../components/DepartmentCard'
import SemesterCard from '../components/SemesterCard'
import PaperCard from '../components/PaperCard'
import departments from '../data/departments.json'
import semesters from '../data/semesters.json'
import papers from '../data/papers.json'

const Home = () => {
  const handleSearch = (query) => {
    console.log('Search:', query)
  }

  const handleDownload = (paperId) => {
    console.log('Download paper:', paperId)
  }

  const recentPapers = papers.slice(0, 3)
  const featuredDepartments = departments.slice(0, 6)

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Welcome to BU PYQ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-blue-100 mb-12"
          >
            Your Gateway to Bhattadev University Previous Year Question Papers
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SearchBar onSearch={handleSearch} placeholder="Search for papers, subjects, or departments..." />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { number: '1000+', label: 'Question Papers' },
            { number: '14', label: 'Departments' },
            { number: '50K+', label: 'Downloads' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-soft"
            >
              <div className="text-4xl font-bold text-primary dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Papers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Recently Added Papers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recentPapers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} onDownload={handleDownload} />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/latest-papers"
            className="inline-block btn-gradient text-white font-bold py-3 px-8 rounded-xl"
          >
            View All Papers
          </Link>
        </div>
      </section>

      {/* Featured Departments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Browse by Department
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredDepartments.map((dept) => (
            <DepartmentCard key={dept.id} department={dept} />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/departments"
            className="inline-block btn-gradient text-white font-bold py-3 px-8 rounded-xl"
          >
            All Departments
          </Link>
        </div>
      </section>

      {/* Semesters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Browse by Semester
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {semesters.map((semester) => (
            <SemesterCard key={semester.id} semester={semester} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-white py-12 my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Question Papers to Share?</h2>
          <p className="text-lg mb-8 text-orange-100">
            Help other students by uploading your previous year question papers
          </p>
          <Link
            to="/upload-paper"
            className="inline-block bg-white text-accent font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors"
          >
            Upload Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
