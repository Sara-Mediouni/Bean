import React from 'react';
import {assets} from '../assets/assets'

const About = () => {
  return (
    <section className="relative px-6 py-28 min-h-screen">
      <img
        src={assets.grains}
        alt="Beans"
        className="absolute top-0 left-0 w-64 opacity-20 rotate-[-15deg]"
      />

      <div className="max-w-4xl mx-auto relative z-10 space-y-6 text-[#5a3d31]">
        <h2 className="text-4xl font-extrabold text-brown-500 leading-tight">About Us</h2>
        <p className="text-lg">
          We believe coffee is more than a drink — it's an art. From handpicked beans to beautifully crafted cups, every sip tells a story.
        </p>
        <p className="text-lg">
          Located in the heart of the city, our coffee shop is a cozy space to relax, create, or connect. Come for the taste, stay for the vibe.
        </p>
        <p className="text-lg">
          Our team of passionate baristas and coffee lovers is dedicated to making your day better, one cup at a time ☕✨
        </p>
      </div>
    </section>
  );
};

export default About;
