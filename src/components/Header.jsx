import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = ({ onMenuClick, onDarkModeToggle, darkMode }) => {
  return (
    <header className="sticky-header bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center gap-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary dark:text-white transition-colors">
              BU PYQ
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
              Free Collection of BU PYQ
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/latest-papers" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium">
              Latest Papers
            </Link>
            <Link to="/departments" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium">
              Departments
            </Link>
            <Link to="/semester-wise" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium">
              Semesters
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onDarkModeToggle}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
