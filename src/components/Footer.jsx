import { Link } from 'react-router-dom'
import { Mail, Heart, Info, Lock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
              <br />
              <Link to="/latest-papers" className="hover:text-blue-200 transition-colors">
                Latest Papers
              </Link>
              <br />
              <Link to="/departments" className="hover:text-blue-200 transition-colors">
                Departments
              </Link>
              <br />
              <Link to="/about" className="hover:text-blue-200 transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@bupyq.com" className="hover:text-blue-200 transition-colors">
                  info@bupyq.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Heart size={18} />
                <Link to="/feedback" className="hover:text-blue-200 transition-colors">
                  Send Feedback
                </Link>
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="hover:text-blue-200 transition-colors">
                Privacy Policy
              </Link>
              <br />
              <Link to="/disclaimer" className="hover:text-blue-200 transition-colors">
                Disclaimer
              </Link>
              <br />
              <Link to="/terms-conditions" className="hover:text-blue-200 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-400 py-6 text-center">
          <p className="text-sm">
            © {currentYear} Bhattadev University PYQ. All rights reserved.
          </p>
          <p className="text-xs text-blue-200 mt-2">
            Made with ❤️ for students by students
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
