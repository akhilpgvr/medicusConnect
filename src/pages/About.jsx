import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-semibold text-center text-teal-600 mb-6">About Us</h1>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to [App Name]</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Developed by <strong>Aps Studio</strong>, [App Name] is a cutting-edge doctor booking platform designed to make healthcare more accessible and efficient for everyone. Our app leverages the power of AI to connect patients with the right healthcare providers seamlessly, allowing for easy appointment scheduling, automated recommendations, and personalized care.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        At <strong>Aps Studio</strong>, our mission is to bring advanced technology into the healthcare space to make finding and booking medical appointments a simple and stress-free process. We understand that access to timely medical care is crucial, and we aim to bridge the gap between patients and healthcare providers with our innovative solutions.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li><strong>AI-Powered Recommendations</strong>: Our app uses AI to suggest the best doctors based on symptoms, specialties, and user preferences.</li>
                        <li><strong>Seamless Booking Experience</strong>: Book appointments with just a few taps, anytime, anywhere.</li>
                        <li><strong>Reliable & Secure</strong>: Your personal information is protected with state-of-the-art security measures.</li>
                        <li><strong>Efficient Appointment Management</strong>: Get reminders, reschedule options, and real-time updates to keep you informed.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
                    <p className="text-gray-600 leading-relaxed">
                        [App Name] simplifies the process of finding and booking a doctor. Our AI-powered engine gathers relevant data based on your medical needs and helps you locate the best available doctors nearby. Once a doctor is selected, scheduling is as easy as selecting a time slot. We handle the rest with appointment reminders, status updates, and even rescheduling options when needed.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Aps Studio</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Founded with a passion for innovation, <strong>Aps Studio</strong> is dedicated to building technology that makes a meaningful difference in people’s lives. Our team of developers, designers, and healthcare professionals work together to create tools that empower users, enhance efficiency, and improve patient outcomes.
                    </p>
                </section>

                <div className="text-center mt-8">
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
  )
}

export default About
