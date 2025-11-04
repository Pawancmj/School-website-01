import React from 'react'
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">CyberForenX School</span>
            </div>
            <p className="text-gray-300 mb-4">
              Excellence in education, fostering innovation and critical thinking in the digital age. 
              Preparing students for tomorrow's challenges with today's advanced learning methods.
            </p>
            {/* <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
            </div> */}
            <div className="flex space-x-4">
  <a 
    href="https://www.facebook.com/YourPageName" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Facebook className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
  </a>

  <a 
    href="https://www.linkedin.com/company/cyberforenx-associate" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Twitter className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
  </a>

  <a 
    href="https://www.instagram.com/cyberforenx/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Instagram className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
  </a>
</div>

          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-500" />
                <span className="text-gray-300 text-sm">123 Education St, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-500" />
                {/* <span className="text-gray-300 text-sm">+1 (555) 123-4567</span> */}
                <a 
                     href="tel:+15551234567" 
                      className="text-gray-300 text-sm hover:text-primary-500 transition-colors"
>
               +1 (555) 123-4567
</a>

              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-500" />
                {/* <span className="text-gray-300 text-sm">info@cyberforenx.edu</span> */}
                <a 
                    href="mailto:info@cyberforenx.edu" 
                    className="text-gray-300 text-sm hover:text-primary-500 transition-colors"
>
                     info@cyberforenx.edu
</a>

              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-primary-500 text-sm transition-colors">About Us</a></li>
              <li><a href="/courses" className="text-gray-300 hover:text-primary-500 text-sm transition-colors">Courses</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-primary-500 text-sm transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-primary-500 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 CyberForenX School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer