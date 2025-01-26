"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const team = [
  {
    name: "Leadership",
    members: [
      { name: "Executive Team", role: "Strategic Direction", image: "/placeholder.svg?height=300&width=300" },
      { name: "Operations", role: "Business Operations", image: "/placeholder.svg?height=300&width=300" },
    ],
  },
  {
    name: "Departments",
    members: [
      { name: "Sales Team", role: "Customer Relations", image: "/placeholder.svg?height=300&width=300" },
      { name: "Technical Support", role: "Product Expertise", image: "/placeholder.svg?height=300&width=300" },
    ],
  },
]

export default function TeamSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Our Team</h2>
      {team.map((group, groupIndex) => (
        <div key={group.name} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{group.name}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {group.members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

