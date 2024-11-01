import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

            {/* Contact Details Section */}
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>

                <div className="mb-4">
                    <h3 className="font-medium text-gray-700">Support Email</h3>
                    <p className="text-gray-600">support@medicusconnect.com</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-medium text-gray-700">Phone Number</h3>
                    <p className="text-gray-600">+91 9072350972</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-medium text-gray-700">Office Address</h3>
                    <p className="text-gray-600">
                        Aps Studio , InfoPark Phase 2<br />
                        Kakkanad, Kochi, India
                    </p>
                </div>

                <div className="flex justify-center mt-4">
                    {/* Social Media Links */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-blue-600">
                        Facebook
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-blue-400">
                        Twitter
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-blue-700">
                        LinkedIn
                    </a>
                </div>
            </div>

            {/* Optional Contact Form */}
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Send Us a Message</h2>
                
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            rows="4"
                            placeholder="Write your message here"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
  )
}

export default Contact
