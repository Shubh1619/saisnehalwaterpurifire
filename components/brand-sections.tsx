"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function BrandSections() {
  const { t } = useLanguage()

  const phoneNumbers = ["9356912160", "9921242812"]

  const handleOrderClick = () => {
    const randomPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)]
    window.location.href = `tel:+91${randomPhone}`
  }

  const handleEnquiryClick = (brandName: string, category: string) => {
    const message = `Hi! I'm interested in ${brandName} ${category}. Please provide more details.`
    window.open(`https://wa.me/919356912160?text=${encodeURIComponent(message)}`, "_blank")
  }

  const electricalBrands = [
    {
      name: "Light Fitting & Installation",
      models: "LED Lights, Tube Lights, Decorative Lights",
      priceRange: "₹200 to ₹2,500",
      image: "/Light_Fitting.png",
    },
    {
      name: "Fan Installation & Repair",
      models: "Ceiling Fans, Exhaust Fans, Table Fans",
      priceRange: "₹800 to ₹4,500",
      image: "/Fan_Installation.png",
    },
    {
      name: "Complete Home Wiring",
      models: "New Wiring, Rewiring, Circuit Installation",
      priceRange: "₹5,000 to ₹25,000",
      image: "/Home_Wiring.png",
    },
    {
      name: "Electrical Repairs & Troubleshooting",
      models: "Switch Repair, Socket Replacement, MCB Issues",
      priceRange: "₹100 to ₹1,500",
      image: "/Electrical_Repairs.png",
    },
  ]

  const applianceBrands = [
    {
      name: "Tara Atta Chakki 1 HP",
      models: "Single Phase, Heavy Duty Motor",
      priceRange: "₹13,000 to ₹15,000",
    },
    {
      name: "Tara Atta Chakki 1.5 HP",
      models: "Single Phase, Commercial Grade",
      priceRange: "₹13,500 to ₹17,000",
    },
    {
      name: "Tara Atta Chakki 2 HP",
      models: "Three Phase, Industrial Grade",
      priceRange: "₹15,000 to ₹19,000",
    },
    {
      name: "Tara 2 in 1 - 1.5/2 HP",
      models: "Atta Chakki + Pulveriser Combo",
      priceRange: "₹14,000 to ₹20,000",
    },
  ]

  const solarBrands = [
    {
      name: "1 kW Rooftop System",
      models: "Basic residential lighting use",
      priceRange: "₹45,000 – ₹80,000",
      image: "/1kw.png",
    },
    {
      name: "3 kW Rooftop System",
      models: "Common household systems",
      priceRange: "₹1.5 – ₹2.4 Lakh",
      image: "/3kw.png",
    },
    {
      name: "5 kW Rooftop System",
      models: "Larger home or small business",
      priceRange: "₹2.4 – ₹4.0 Lakh",
      image: "/5kw.png",
    },
    {
      name: "8 kW Rooftop System",
      models: "Linear extrapolation based on per kW",
      priceRange: "₹4.8 – ₹6.4 Lakh (est.)",
      image: "/8kw.png",
    },
  ]

  const BrandCard = ({ brand, category }: { brand: any; category: string }) => (
    <Card className="bg-background/60 backdrop-blur-sm border border-border/30 hover:bg-background/80 transition-all duration-300 flex flex-col justify-between">
      <CardContent className="p-6 flex flex-col items-center text-center min-h-[420px]">
        <div className="mb-4 w-full flex flex-col items-center">
          {brand.image ? (
            <img src={brand.image} alt={brand.name} className="h-28 w-auto object-contain mx-auto mb-4 rounded-md shadow-sm" />
          ) : (
            <Shield className="w-12 h-12 text-primary mx-auto mb-2" />
          )}
          <h3 className="text-xl font-bold text-primary mb-2">{brand.name}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3 w-full">{brand.models}</p>
        <p className="text-lg font-semibold text-foreground mb-4 w-full">{brand.priceRange}</p>
        <div className="flex gap-2 justify-center w-full mt-auto">
          <Button onClick={handleOrderClick} className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[120px]">
            {t("button.orderNow")}
          </Button>
          <Button
            variant="outline"
            onClick={() => handleEnquiryClick(brand.name, category)}
            className="border-primary/30 hover:bg-primary/10 min-w-[120px]"
          >
            {t("button.enquiry")}
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="py-16 space-y-16">
      {/* Electrical Services Brands */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">⚡</span>
            <h2 className="text-3xl font-bold text-foreground">{t("brands.electrical")}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {electricalBrands.map((brand, index) => (
            <BrandCard key={index} brand={brand} category="Electrical Services" />
          ))}
        </div>
      </section>

      {/* Home Appliances Brands */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🏠</span>
            <h2 className="text-3xl font-bold text-foreground">{t("brands.appliances")}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applianceBrands.map((brand, index) => (
            <BrandCard key={index} brand={brand} category="Home Appliances" />
          ))}
        </div>
      </section>

      {/* Solar Systems Brands */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">☀️</span>
            <h2 className="text-3xl font-bold text-foreground">{t("brands.solar")}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solarBrands.map((brand, index) => (
            <BrandCard key={index} brand={brand} category="Solar Systems" />
          ))}
        </div>
      </section>
    </div>
  )
}
