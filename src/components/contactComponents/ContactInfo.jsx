import React from 'react'


const ContactInfo = () => {
  return (
    <div className='max-w-[calc(50%-8px)] w-full'>
      <div className='shadow-lg bg-white p-8 rounded-xl'>
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email Section */}
              <div className="flex items-start gap-4">
                <div className="bg-[#e6ebe5] rounded-full p-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-dotlinker-green"
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
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1 text-[#285622]">Email</h4>
                  <a
                    href="mailto:info@dotlinkertech.com"
                    className="text-dotlinker-green hover:underline"
                  >
                    info@dotlinkertech.com
                  </a>
                </div>
              </div>

              {/* Headquarters Section */}
              <div className="flex items-start gap-4">
                <div className="bg-[#e6ebe5] rounded-full p-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-dotlinker-green"
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
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1 text-[#285622]">Headquarters</h4>
                  <p className="text-[#6b7280]">
                    Sanvi Tower, South Jagtala, 2 No Netaji Park GF-FR; FL-1 A6-83/218,
                    Kolkata, West Bengal 700141
                  </p>
                </div>
              </div>

              {/* Development Center Section */}
              <div className="flex items-start gap-4">
                <div className="bg-[#e6ebe5] rounded-full p-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-dotlinker-green"
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
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1 text-[#285622]">Development Center</h4>
                  <p className="text-[#6b7280]">
                    1/2 D, Prantik Pally, Bosepukur, Kasba, Kol - 700042
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='shadow-lg bg-white p-8 mt-[30px] rounded-xl'>
            <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
            <p className='text-[#6b7280]'>Follow us on social media to stay updated with our latest projects and tech insights.</p>
            <div className="flex gap-4 mt-4">
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
    </div>
  )
}

export default ContactInfo