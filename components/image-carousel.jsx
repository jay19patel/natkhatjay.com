"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ImageCarousel() {
  const [images, setImages] = useState([]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Set the screen width for animations
    setWidth(window.innerWidth);

    // Fetch images dynamically from the API
    async function fetchImages() {
      try {
        const response = await fetch("/Images/images.json");
        const data = await response.json();
        setImages(data.sort(() => Math.random() - 0.5));
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="overflow-hidden space-y-8">
      {/* First row - left to right */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [-width, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 50,
          ease: "linear",
        }}
        className="flex gap-4"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="shrink-0"
          >
            <img
              src={src}
              alt={`Carousel image ${index + 1}`}
              className="w-48 h-48 rounded-lg object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
      {/* Second row - right to left */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -width] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 50,
          ease: "linear",
        }}
        className="flex gap-4"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="shrink-0"
          >
            <img
              src={src}
              alt={`Carousel image ${index + 11}`}
              className="w-48 h-48 rounded-lg object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
