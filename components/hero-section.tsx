"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Droplets, Zap, Home, Sun } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="bg-gradient-to-br from-background/80 to-muted/50 py-16 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif">{t("hero.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t("hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 bg-primary/90 hover:bg-primary backdrop-blur-sm border border-primary/20">
                संपर्क करा
              </button>
              <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4 bg-background/80 backdrop-blur-sm border-border/50">
                अधिक जाणून घ्या
              </button>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">उच्च गुणवत्ता</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">जलद सेवा</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/ro-uv-water-purifier.png"
                alt="RO + UV Water Purifier"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-border/50">
            <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">{t("services.water")}</h3>
            <p className="text-sm text-muted-foreground">RO, UV, UF Systems</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-border/50">
            <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">{t("services.electrical")}</h3>
            <p className="text-sm text-muted-foreground">Wiring & Repairs</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-border/50">
            <Home className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">{t("services.appliances")}</h3>
            <p className="text-sm text-muted-foreground">Installation & Service</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-border/50">
            <Sun className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">{t("services.solar")}</h3>
            <p className="text-sm text-muted-foreground">Rooftop Systems</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
