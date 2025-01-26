import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import Header from "./components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Baker HVAC Supply",
  description: "Professional HVAC equipment and supplies",
}

const mainCategories = [
  { name: "HVAC", href: "/hvac" },
  { name: "Refrigeration", href: "/refrigeration" },
  { name: "Foodservice", href: "/foodservice" },
  { name: "Parts", href: "/parts" },
  { name: "Compressors", href: "/compressors" },
  { name: "Motors", href: "/motors" },
  { name: "Indoor Air Quality", href: "/iaq" },
  { name: "Thermostats", href: "/thermostats" },
  { name: "Tools", href: "/tools" },
  { name: "Supplies", href: "/supplies" },
]

const hvacSubcategories = [
  {
    title: "Residential A/C",
    items: [
      { name: "Air Handlers", href: "/hvac/air-handlers" },
      { name: "Condensing Units", href: "/hvac/condensing-units" },
      { name: "Dehumidifiers & Humidifiers", href: "/hvac/dehumidifiers-humidifiers" },
      { name: "Ductless Mini Split", href: "/hvac/ductless-mini-split" },
      { name: "Evaporator Coils", href: "/hvac/evaporator-coils" },
      { name: "Generators", href: "/hvac/generators" },
      { name: "Indoor Air Quality", href: "/hvac/indoor-air-quality" },
      { name: "Portable & Evaporative AC Units", href: "/hvac/portable-ac" },
      { name: "Package Units", href: "/hvac/package-units" },
      { name: "Roof Curbs & Stands", href: "/hvac/roof-curbs-stands" },
      { name: "Window Units", href: "/hvac/window-units" },
    ],
  },
  {
    title: "Commercial A/C",
    href: "/hvac/commercial",
  },
  {
    title: "Heating",
    href: "/hvac/heating",
  },
  {
    title: "Ventilation",
    href: "/hvac/ventilation",
  },
  {
    title: "Brands",
    href: "/hvac/brands",
  },
]

const brands = [
  {
    name: "Bosch",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-98Lo1n3w91lF84AEDXjYubR6xn7DxQ.png",
  },
  {
    name: "ComfortMaker",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-98Lo1n3w91lF84AEDXjYubR6xn7DxQ.png",
  },
  {
    name: "GREE",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-98Lo1n3w91lF84AEDXjYubR6xn7DxQ.png",
  },
  {
    name: "HEP",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-98Lo1n3w91lF84AEDXjYubR6xn7DxQ.png",
  },
  {
    name: "GrandAire",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-98Lo1n3w91lF84AEDXjYubR6xn7DxQ.png",
  },
  {
    name: "Tempstar",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-98Lo1n3w91lF84AEDXjYubR6xn7DxQ.png",
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <Header />
          <div className="container mx-auto px-4">
            <NavigationMenu>
              <NavigationMenuList className="flex-wrap justify-start gap-1">
                {mainCategories.map((category) => (
                  <NavigationMenuItem key={category.name}>
                    {category.name === "HVAC" ? (
                      <>
                        <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[800px] grid-cols-5 p-4">
                            <div className="col-span-1 border-r pr-4">
                              {hvacSubcategories.map((subcategory) => (
                                <div key={subcategory.title} className="mb-4">
                                  <Link href={subcategory.href || "#"} className="text-sm font-medium hover:underline">
                                    {subcategory.title}
                                  </Link>
                                  {subcategory.items && (
                                    <ul className="mt-2 space-y-2">
                                      {subcategory.items.map((item) => (
                                        <li key={item.name}>
                                          <Link
                                            href={item.href}
                                            className="text-sm text-muted-foreground hover:text-primary"
                                          >
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="col-span-4 pl-4">
                              <div className="mb-4">
                                <h3 className="mb-2 text-sm font-medium">Featured Brands</h3>
                                <div className="grid grid-cols-3 gap-4">
                                  {brands.map((brand) => (
                                    <div
                                      key={brand.name}
                                      className="flex items-center justify-center p-2 bg-gray-50 rounded"
                                    >
                                      <Image
                                        src={brand.logo || "/placeholder.svg"}
                                        alt={`${brand.name} logo`}
                                        width={100}
                                        height={40}
                                        className="object-contain"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="rounded-lg bg-gray-50 p-4">
                                <h3 className="mb-2 text-lg font-semibold">Instant Credit on ICP Rooftop</h3>
                                <p className="mb-2 text-sm text-muted-foreground">
                                  Get $100 per Ton Instant Credit on 3T - 15T ICP RTUs
                                </p>
                                <Link
                                  href="/promotions/icp-credit"
                                  className="inline-block rounded bg-primary px-4 py-2 text-sm text-white hover:bg-primary/90"
                                >
                                  Learn More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={category.href}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        )}
                      >
                        {category.name}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}



import './globals.css'