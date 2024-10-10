"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Animationcomponent({ src, alt, width, className }) {
  const breathingAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  }

  return (
    <motion.div
      animate={breathingAnimation}
      style={{
        display: "inline-block", // Ensures the div only takes up as much space as the image
      }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        className={className}
      />
    </motion.div>
  )
}