import React from 'react'
import footerLogo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-5">
            <a className="inline-block mb-4" href="/">
              <img
                src={footerLogo}
                alt="DotLinker Technologies Logo"
                className="h-[80px]"
              />
            </a>
            <p className="text-dotlinker-gray mb-6 max-w-md">
              DotLinker Technologies delivers innovative software solutions that
              empower businesses to achieve their digital transformation goals.
              Our expertise spans web development, mobile applications,
              enterprise solutions, and more.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/dotlinkertech/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#1d4d16] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/dotlinkertech/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#1d4d16] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dotlinkertechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#1d4d16] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-dotlinker-darkgray">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-dotlinker-gray hover:text-[#1d4d16] transition-colors"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-dotlinker-gray hover:text-[#1d4d16] transition-colors"
                  href="/services"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  className="text-dotlinker-gray hover:text-[#1d4d16] transition-colors"
                  href="/portfolio/all/all/all/all"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-dotlinker-gray hover:text-[#1d4d16] transition-colors"
                  href="/careers"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-dotlinker-darkgray">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-dotlinker-gray hover:text-[#1d4d16] transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dotlinker-gray hover:text-[#1d4d16] transition-colors"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dotlinker-gray hover:text-[#1d4d16] transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dotlinker-gray hover:text-[#1d4d16] transition-colors"
                >
                  Cloud Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dotlinker-gray hover:text-[#1d4d16] transition-colors"
                >
                  Enterprise Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-dotlinker-darkgray">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-3 text-[#1d4d16] mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-dotlinker-gray">
                  1/2 D, Prantik Pally, Bosepukur, Kasba, Kol - 700042
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-3 text-[#1d4d16] mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@dotlinkertech.com"
                  className="text-dotlinker-gray hover:text-[#1d4d16] transition-colors"
                >
                  info@dotlinkertech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dotlinker-gray text-sm">
              © 2025 DotLinker Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer