"use client";
import { motion } from "framer-motion"
import { Camera,Instagram, Youtube } from "lucide-react";
import { ImageCarousel } from "./image-carousel"
import { Footer } from "./footer"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, GraduationCapIcon, CodeIcon, CameraIcon, MusicIcon ,Navigation} from "lucide-react"
import { ServiceCard } from "@/components/service-card"

export default function ProfilePage() {
  const services = [
    {
      icon: Instagram,
      title: "LET ME CREATE",
      subtitle: "UGC videos for your Brand",
      description: "Professional UGC content creation services for brands looking to enhance their social presence.",
      count: "100+",
      banner: "/i-2.jpg?height=200&width=400",
      link: "#",
    },
    {
      icon: Youtube,
      title: "MY LATEST VLOG",
      subtitle: "My youtube channel",
      description: "Watch my latest content about digital marketing, tech, and business growth strategies.",
      count: "1.2M",
      banner: "/i-2.jpg?height=200&width=400",
      link: "https://youtube.com/@yourusername",
    },
    // ... add more services as needed
  ]

  return (
    (<div className="min-h-screen bg-gray-950 bg-opacity-90 text-white">
      {/* Header */}
      <header
        className="flex items-center justify-between p-4 border-b border-zinc-800">
        <h1 className="text-xl font-semibold">Jay Patel</h1>
      </header>
      {/* Profile Section */}
      <section className="flex flex-col items-center py-8 px-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-40 h-40 mb-6"
      >
        <img
          src="/profile-pic.png"
          alt="Profile"
          className="w-full h-full rounded-full object-cover border-4 border-yellow-400"
        />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-4"
      >
        Hi, I&apos;m Jay Patel
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-zinc-300 max-w-xl mb-8 space-y-4"
      >
        <p>
          My name is Jay, and I live in the Valsad district of Gujarat. I completed my <a href="#" className="font-bold hover:text-purple-400">Computer Engineering</a> from Rajkot and have always been passionate about science and technology. 
          I also love creating videos, making documentaries, and traveling to explore new places. These hobbies let me combine creativity with my technical skills to tell unique stories.
        </p>
        <div className="flex justify-center space-x-8 text-lg font-bold">
          <div>
            <span className="text-yellow-400">1.2M</span> YouTube
          </div>
          <div>
            <span className="text-pink-400">500K</span> Instagram
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 text-zinc-400 mb-4">
  <div className="flex items-center justify-center">
    <CalendarIcon className="w-5 h-5 mr-2" />
    <span>Born 19 November 2001</span>
  </div>
  <div className="flex items-center justify-center">
    <GraduationCapIcon className="w-5 h-5 mr-2" />
    <span>Computer Engineer</span>
  </div>
  <div className="flex items-center justify-center">
    <Navigation className="w-5 h-5 mr-2" />
    <span>Valsad, Gujarat</span>
  </div>
</div>

        <div className="text-zinc-400 space-y-2">
          <div className="flex items-center justify-center">
            <span className="font-bold text-zinc-300">Personal:</span>
            <a href="mailto:justjayy19@gmail.com" className="ml-2 text-yellow-400 hover:underline">
            justjayy19@gmail.com
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <Badge variant="secondary" className="flex items-center">
            <CodeIcon className="w-4 h-4 mr-2" />
            Coding
          </Badge>
          <Badge variant="secondary" className="flex items-center">
            <CameraIcon className="w-4 h-4 mr-2" />
            Photography
          </Badge>
          <Badge variant="secondary" className="flex items-center">
            <MusicIcon className="w-4 h-4 mr-2" />
            Music
          </Badge>
        </div>
      </motion.div>
    </section>





      {/* Image Carousel Section */}
      <section className="py-12 bg-zinc-800/50">
        <ImageCarousel />
      </section>
      {/* Updated Services Section */}
      <section className="p-4 space-y-6 max-w-3xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>
     
      <Footer />
    </div>)
  );
}

