import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import LatestPapers from './pages/LatestPapers'
import Departments from './pages/Departments'
import DepartmentDetail from './pages/DepartmentDetail'
import SemesterWise from './pages/SemesterWise'
import SemesterDetail from './pages/SemesterDetail'
import PaperDetail from './pages/PaperDetail'
import UploadPaper from './pages/UploadPaper'
import Search from './pages/Search'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Disclaimer from './pages/Disclaimer'
import TermsConditions from './pages/TermsConditions'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900' : 'bg-light-bg'}`}>
        <Header onMenuClick={toggleSidebar} onDarkModeToggle={toggleDarkMode} darkMode={darkMode} />
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/latest-papers" element={<LatestPapers />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:slug" element={<DepartmentDetail />} />
            <Route path="/semester-wise" element={<SemesterWise />} />
            <Route path="/semester/:semester" element={<SemesterDetail />} />
            <Route path="/paper/:id" element={<PaperDetail />} />
            <Route path="/upload-paper" element={<UploadPaper />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </Router>
  )
}

export default App
