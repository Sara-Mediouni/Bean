import React from 'react';

const Contact = () => {
  return (
    <section className="relative px-6 py-28 ">
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow-xl space-y-6 text-[#5a3d31]">
        <h2 className="text-3xl font-bold text-brown-500 text-center">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-3xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all shadow-md w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
