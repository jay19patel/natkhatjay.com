"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ImageCarousel() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  // Sample images - replace with your actual images
  const images = Array(10).fill("/i-1.jpg?height=200&width=200")

  return (
    (<div className="overflow-hidden space-y-8">
      {/* First row - left to right */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [-width, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
        className="flex gap-4">
        {images.map((src, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="shrink-0">
            <img
              src={src || "/profile-pic.png"}
              alt={`Carousel image ${index + 1}`}
              className="w-48 h-48 rounded-lg object-cover" />
          </motion.div>
        ))}
      </motion.div>
      {/* Second row - right to left */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -width] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
        className="flex gap-4">
        {images.map((src, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="shrink-0">
            <img
              src={src || "/placeholder.svg"}
              alt={`Carousel image ${index + 11}`}
              className="w-48 h-48 rounded-lg object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </div>)
  );
}

