import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, CheckCircle } from 'lucide-react'

const UploadPaper = () => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    department: '',
    semester: '',
    year: '',
    file: null,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        title: '',
        subject: '',
        department: '',
        semester: '',
        year: '',
        file: null,
      })
    }, 3000)
  }

  return (
    <div className="page-transition max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Upload Question Paper
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Help other students by sharing your previous year question papers
        </p>
      </motion.div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded-2xl p-8 text-center"
        >
          <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-200 mb-2">
            Paper Submitted Successfully!
          </h2>
          <p className="text-green-700 dark:text-green-200">
            Thank you for your contribution. Your paper will be reviewed and added to our collection soon.
          </p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-medium"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Paper Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Data Structures - Final Exam"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g., Data Structures"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 outline-none transition-colors"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 outline-none transition-colors"
                required
              >
                <option value="">Select Department</option>
                <option value="computer-science">Computer Science</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Semester
              </label>
              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 outline-none transition-colors"
                required
              >
                <option value="">Select Semester</option>
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <option key={i} value={i}>Semester {i}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Year
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="e.g., 2023"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 outline-none transition-colors"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Upload PDF File
            </label>
            <div className="border-2 border-dashed border-primary dark:border-blue-400 rounded-lg p-8 text-center cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
                required
              />
              <label htmlFor="file-input" className="cursor-pointer">
                <Upload size={32} className="text-primary dark:text-blue-400 mx-auto mb-2" />
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  {formData.file ? formData.file.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">PDF up to 50MB</p>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-gradient text-white font-bold py-4 px-6 rounded-xl transition-all"
          >
            Upload Paper
          </button>
        </motion.form>
      )}
    </div>
  )
}

export default UploadPaper
