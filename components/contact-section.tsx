"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  {t("contact.phone")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">+91 9356912160</p>
                  <p className="text-lg font-semibold">+91 9921242812</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for emergency services</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-full">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  {t("contact.email")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">gadakhravi@gmail.com</p>
                <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  {t("contact.address")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-semibold">Building No. 4, Ekta Nagar</p>
                  <p>Prestige Park, Chakan 410501</p>
                  <p>Pune, Maharashtra</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-full">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  {t("contact.hours")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                  <p className="text-sm text-muted-foreground mt-2">Emergency services available 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
