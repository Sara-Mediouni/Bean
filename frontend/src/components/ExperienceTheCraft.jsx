import React from 'react'
import { motion } from 'framer-motion'

const sentence = "Every sip tells a story. Discover yours at Bean."

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      
      delay: i * 0.1,
      duration: 1,
      ease: 'easeOut'
    }
  })
}

const ExperienceCraft = () => {
  const words = sentence.split(" ")

  return (
    <section className=" text-white py-32 flex flex-col items-center justify-center">
      <h2 className="text-5xl md:text-7xl font-extrabold mb-10">
        Experience the Craft
      </h2>

      <div className="text-center text-lg md:text-2xl max-w-2xl px-4">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={wordAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default ExperienceCraft
