
import React from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    formData.append("access_key", "7155dfbc-234a-4f12-8f86-c08bb268f8d9")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const result = await response.json()

    if (result.success) {
      alert("Message sent successfully!")
      e.target.reset()
    } else {
      alert("Something went wrong!")
    }
  }

  return (

    <section
      id="contact"
      className="w-full px-6 py-20"
    >

      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">

          {/* Contact Information */}

          <div className="space-y-5">

            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Contact
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Let's work together.
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Have a project in mind, a job opportunity, or just want
              to say hi? Send me a message. I'd love to connect with you.
            </p>

            {/* Email */}

            <div className="space-y-4 pt-5 text-sm text-slate-600">

              <a
                href="mailto:surve1820@gmail.com"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <Mail size={19} className="text-blue-600" />

                <span>surve1820@gmail.com</span>
              </a>

              {/* Location */}

              <div className="flex items-center gap-3">
                <MapPin size={19} className="text-blue-600" />

                <span>Thane, Maharashtra, India</span>
              </div>

            </div>

          </div>


          {/* Contact Form */}

          <div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}

              <div>

                <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

              </div>


              {/* Email */}

              <div>

                <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

              </div>


              {/* Message */}

              <div>

                <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                />

              </div>


              {/* Submit Button */}

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
              >

                <span>Send Message</span>

                <Send size={16} />

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Contact
