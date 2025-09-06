"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"

export default function ProductsSection() {
  const { t } = useLanguage()

  const phoneNumbers = ["9970663388", "8830490094"]

  const handleOrderClick = () => {
    const randomPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)]
    window.location.href = `tel:${randomPhone}`
  }

  const handleEnquiryClick = (productName: string, price: string) => {
    const message = `Hi! I'm interested in ${productName} priced at ${price}. Please provide more details.`
    const whatsappUrl = `https://wa.me/919970663388?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const specialtyProducts = [
    {
      name: "RO + UV Water Purifier",
      price: "₹8,499",
      features: ["Dual purification (RO + UV + UF)", "7–8L Storage", "Installation included"],
      badge: "Best Seller",
      image: "/images/ro-uv-water-purifier.png",
    },
    {
      name: "Alkaline RO Purifier",
      price: "₹10,999",
      features: ["pH 8.5–9.5 water", "Mineral enhancement", "Health benefits"],
      badge: "Premium",
      image: "/images/alkaline-purifier-black.png",
    },
    {
      name: "Copper RO System",
      price: "₹12,500",
      features: ["Copper infusion technology", "Ayurvedic benefits", "Antibacterial properties"],
      badge: "Ayurvedic",
      image: "/images/kent-copper-purifier.png",
    },
    {
      name: "Wall-mounted Purifier",
      price: "₹7,999",
      features: ["Compact design", "Filter kit included", "Space-saving"],
      badge: "Compact",
      image: "/images/ro-uv-water-purifier.png",
    },
  ]

  const brandProducts = [
    { brand: "Kent", models: "Grand Plus, Ace Plus, Prime", priceRange: "₹12,999 to ₹18,999", image: "/kent.png" },
    { brand: "Aquaguard", models: "Enhance, Delight, Marvel", priceRange: "₹11,999 to ₹16,999", image: "/Aquaguard.png" },
    { brand: "Pureit", models: "Eco Saver, Advanced, Copper+", priceRange: "₹12,499 to ₹17,999", image: "/Pureit.png" },
    { brand: "Livpure", models: "Glo, Bolt+, Touch UV", priceRange: "₹8,999 to ₹13,999", image: "/Livpure.png" },
  ]

  return (
    <section id="products" className="py-16 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif">{t("products.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("products.subtitle")}</p>
        </div>

        {/* Specialty Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">⭐ {t("products.specialty")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow relative bg-background/80 backdrop-blur-sm border-border/50"
              >
                <CardHeader>
                  <Badge className="absolute -top-2 -right-2 bg-secondary/90 text-secondary-foreground backdrop-blur-sm">
                    {product.badge}
                  </Badge>
                  <div className="w-full h-32 relative mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg text-center">{product.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary text-center">{product.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleOrderClick}
                      className="flex-1 bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground"
                    >
                      {t("products.quote")}
                    </Button>
                    <Button
                      onClick={() => handleEnquiryClick(product.name, product.price)}
                      className="flex-1 bg-transparent backdrop-blur-sm border-border/50"
                      variant="outline"
                    >
                      {t("products.view")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Brand Products */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">⭐ {t("products.brands")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandProducts.map((brand, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-border/50"
              >
                <CardHeader className="text-center">
                  <div className="w-full flex justify-center mb-4">
                    <Image
                      src={brand.image}
                      alt={brand.brand}
                      height={128}
                      width={128}
                      className="h-32 w-auto object-contain mx-auto"
                    />
                  </div>
                  <CardTitle className="text-xl text-primary">{brand.brand}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">{brand.models}</p>
                  <div className="text-lg font-semibold text-foreground mb-4">{brand.priceRange}</div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleOrderClick}
                      className="flex-1 bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground"
                    >
                      {t("products.quote")}
                    </Button>
                    <Button
                      onClick={() => handleEnquiryClick(`${brand.brand} Water Purifier`, brand.priceRange)}
                      className="flex-1 bg-transparent backdrop-blur-sm border-border/50"
                      variant="outline"
                    >
                      {t("products.view")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
