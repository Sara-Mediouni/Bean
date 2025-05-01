import React from "react";
import Hero from "../components/Hero/Hero";
import DiscoverBlends from "../components/Discover";
import OurStory from "../components/Art";

import Menu from "../components/menu";
import Signature from "../components/SignatureDrinks";
import Contact from "../components/SignatureCreations";
import Pastry from "../components/presentation";
import ExperienceCraft from "../components/ExperienceTheCraft";
import BrewingStudio from "../components/BrewingStudio";
import Smoothies from "../components/Smoothies";

const Home = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <Signature />
      <ExperienceCraft />
      <Pastry />
       <Contact />
      <DiscoverBlends />
      <Smoothies/>
      
      <OurStory />
    </div>
  );
};

export default Home;
