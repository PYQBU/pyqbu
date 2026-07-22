import { Link, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation()

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Latest Papers', path: '/latest-papers' },
    { name: 'Departments', path: '/departments' },
    { name: 'Semester-wise', path: '/semester-wise' },
    { name: 'Upload Paper', path: '/upload-paper' },
    { name: 'Search', path: '/search' },
    { name: 'Contact', path: '/contact' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'About', path: '/about' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
  ]

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed right-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 z-50 md:hidden overflow-y-auto shadow-lg"
          >
            <div className="p-6">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-700 dark:text-gray-300" />
              </button>

              <h2 className="text-2xl font-bold text-primary dark:text-white mb-8 mt-4">
                Menu
              </h2>

              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary text-white font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar
