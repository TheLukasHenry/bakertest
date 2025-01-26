"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality products and services.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Building trust through consistent performance and dependability.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Embracing new technologies and solutions for better service.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Creating lasting relationships with our customers and suppliers.",
  },
]

export default function ValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Our Values</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {values.map((value, index) => {
          const Icon = value.icon
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className={`h-full transition-shadow duration-200 ${hoveredIndex === index ? "shadow-lg" : ""}`}>
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

