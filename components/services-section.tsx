"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Zap, Home, Sun } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Droplets className="h-8 w-8 text-primary" />,
      title: t("services.water"),
      description: t("services.water.desc"),
      items: t("services.water.items") as unknown as string[],
      color: "bg-primary/10",
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: t("services.electrical"),
      description: t("services.electrical.desc"),
      items: t("services.electrical.items") as unknown as string[],
      color: "bg-secondary/10",
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: t("services.appliances"),
      description: t("services.appliances.desc"),
      items: t("services.appliances.items") as unknown as string[],
      color: "bg-primary/10",
    },
    {
      icon: <Sun className="h-8 w-8 text-secondary" />,
      title: t("services.solar"),
      description: t("services.solar.desc"),
      items: t("services.solar.items") as unknown as string[],
      color: "bg-secondary/10",
    },
  ]

  return (
    <section id="services" className="py-16 bg-muted/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm border-border/50"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 rounded-full ${service.color} backdrop-blur-sm flex items-center justify-center mx-auto mb-4`}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
