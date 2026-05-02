import React from 'react'

const ContactForm = () => {
  return (
    <div className="glass-card bg-white rounded-xl p-8 shadow-lg max-w-[calc(50%-8px)] w-full">
      <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#374151] mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-dotlinker-green focus:text-[#374151] transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#374151] mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-dotlinker-green focus:text-[#374151] transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-[#374151] mb-1"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-dotlinker-green focus:text-[#374151] transition-all"
          >
            <option value="">Select a subject</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App">Mobile App Development</option>
            <option value="Enterprise Solution">Enterprise Solution</option>
            <option value="AI & ML">AI & Machine Learning</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#374151] mb-1"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-dotlinker-green focus:border-dotlinker-green transition-all"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1d4d16] text-white px-6 py-3 rounded-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm