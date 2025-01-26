import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import VimeoPlayer from "./components/vimeo-player"
import TeamSection from "./components/team-section"
import ValuesSection from "./components/values-section"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">About Baker HVAC Supply</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Since 1975, Baker HVAC Supply has been the trusted partner for HVAC professionals, delivering quality
            equipment and exceptional service across North America.
          </p>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <VimeoPlayer videoId="123456789" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide HVAC professionals with the highest quality equipment and support, enabling them to deliver
                  comfort and efficiency to their customers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading innovator in HVAC distribution, setting industry standards for service excellence
                  and technological advancement.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Baker HVAC Supply Headquarters"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>

          <ValuesSection />
          <TeamSection />
        </div>
      </div>
    </div>
  )
}

