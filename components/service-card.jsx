"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function ServiceCard({
  icon: Icon,
  title,
  subtitle,
  description,
  count,
  banner,
  link,
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
      className="group"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card
          className="overflow-hidden bg-white hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          {/* Top Section - Logo and Banner side by side */}
          <div className="flex h-48">
            <div className="w-1/4 bg-zinc-200 flex items-center justify-center p-8">
              <Icon className="w-full h-full text-zinc-600 group-hover:text-zinc-900 transition-colors duration-300" />
            </div>
            <div className="w-3/4">
              <motion.img
                src={banner || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Bottom Section - Content and Count */}
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                  {title}
                </h3>
                <p className="text-lg text-zinc-500">{subtitle}</p>
              </div>
              {count && (
                <div className="text-right">
                  <span className="text-2xl font-bold text-yellow-500">
                    {count}
                  </span>
                  <p className="text-sm text-zinc-400">Sessions</p>
                </div>
              )}
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">{description}</p>
          </div>

        </Card>
      </a>
    </motion.div>
  );
}
