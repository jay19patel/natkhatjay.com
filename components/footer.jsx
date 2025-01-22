import { Instagram, Youtube,Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Mail",
      href: "#",
      color: "hover:text-blue-500",
    },
    {
      icon: Youtube,
      label: "YouTube Channel",
      href: "https://youtube.com/@yourusername",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      label: "Instagram Profile",
      href: "https://instagram.com/yourusername",
      color: "hover:text-blue-500",
    },
  ]

  return (
    (<footer className="bg-zinc-800/50 mt-12 py-8 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6">
          <h3 className="text-2xl font-bold">Connect With Me</h3>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-zinc-400 ${social.color} transition-colors`}
                whileTap={{ scale: 0.95 }}>
                <social.icon className="w-6 h-6" />
                <span className="font-medium">{social.label}</span>
              </motion.a>
            ))}
          </div>

          <div className="text-zinc-400 text-sm max-w-md mx-auto">
            <p>
              Subscribe to my channels for the latest updates on digital marketing, tech tutorials, and business growth
              strategies.
            </p>
          </div>

          <div className="text-zinc-500 text-sm">
            <p>&copy; 2024 - {new Date().getFullYear()} Jay Patel. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>)
  );
}

