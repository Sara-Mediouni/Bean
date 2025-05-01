import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brown-500 text-[#f8f4f2] py-12 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold mb-4">Bean</h2>
          <p className="text-sm leading-relaxed opacity-80">
            A café where creativity meets taste. Handcrafted drinks, warm vibes, and elegant ambiance.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#menu" className="hover:underline">Menu</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-sm opacity-80">hello@bean.com</p>
          <p className="text-sm opacity-80">+216 (52) 123-4567</p>
          <p className="text-sm opacity-80">123 Coffee St., New York, NY</p>
        </div>
      </div>
      <div className="text-center mt-10 text-sm opacity-50">
        &copy; {new Date().getFullYear()} Bean. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
