import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Contact Us
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          Have questions or need assistance? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Reach out to us through any of the following contact details:
            </p>

            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-gray-700"><strong>Email:</strong></span>{" "}
                support@appleempire.com
              </li>
              <li>
                <span className="font-semibold text-gray-700"><strong>For Query:</strong></span>{" "}
                01616436311, 01616436310
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  <strong>For Complain or Advice:</strong>
                </span>{" "}
                0196307230
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  <strong>For Exchange:</strong>
                </span>{" "}
                01616436313, 01616436315
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  <strong>For After Sale Service:</strong>
                </span>{" "}
                01711072663
              </li>
              <li>
                <span className="font-semibold text-gray-700"><strong>Address:</strong></span>{" "}
                Basement-1, Shop No-27, Bashundhara City Shopping Mall,
                Panthapath, Dhaka, Bangladesh
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                <strong>Business Hours:</strong>
              </h4>
              <p>Wednesday - Monday: 10:00 AM - 9:00 PM</p>
              <p>Tuesday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Send Us a Message
            </h3>

            <form action="#" method="POST" className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-_orange text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
