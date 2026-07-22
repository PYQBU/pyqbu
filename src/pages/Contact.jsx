import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="page-transition max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Have questions or suggestions? We'd love to hear from you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {[
          {
            icon: Mail,
            title: 'Email',
            details: 'info@bupyq.com',
            description: 'Send us an email anytime',
          },
          {
            icon: Phone,
            title: 'Phone',
            details: '+91 (123) 456-7890',
            description: 'Call us during business hours',
          },
          {
            icon: MapPin,
            title: 'Location',
            details: 'Bhattadev University',
            description: 'Odisha, India',
          },
        ].map((contact, index) => {
          const Icon = contact.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft text-center"
            >
              <Icon size={32} className="text-primary dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {contact.title}
              </h3>
              <p className="text-lg font-semibold text-primary dark:text-blue-400 mb-2">
                {contact.details}
              </p>
              <p className="text-gray-600 dark:text-gray-400">{contact.description}</p>
            </motion.div>
          )
        })}
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded-2xl p-8 text-center"
        >
          <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-200 mb-2">
            Message Sent Successfully!
          </h2>
          <p className="text-green-700 dark:text-green-200">
            Thank you for reaching out. We'll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-medium"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 1234567890"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 outline-none transition-colors"
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
                placeholder="What is this about?"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 outline-none transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full btn-gradient text-white font-bold py-4 px-6 rounded-xl transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      )}
    </div>
  )
}

export default Contact
