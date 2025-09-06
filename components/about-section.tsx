"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Clock, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function AboutSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-cyan-500" />,
      title: "Quality Assured Products",
      description: "Only genuine products with manufacturer warranty",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "Expert Installation",
      description: "Certified technicians for all brands and models",
    },
    {
      icon: <Clock className="h-8 w-8 text-cyan-500" />,
      title: "Timely Service",
      description: "Quick response and doorstep service",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Certified Technicians",
      description: "Trained professionals with years of experience",
    },
  ]

  const stats = [
    { number: "10+", label: t("about.experience") },
    { number: "500+", label: t("about.customers") },
    { number: "24/7", label: t("about.service") },
    { number: "100%", label: t("about.warranty") },
  ]

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-serif">{t("about.title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/50 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              We are your trusted partner for pure water solutions, electrical services, home appliances, and rooftop
              solar solutions in Chakan, Pune. Known locally as "चाकणचा फिल्टर वाला", we have been serving the community
              with dedication and expertise.
            </p>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-white/50 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">📍 Visit Our Office</h3>
              <p className="text-gray-600">
                Building No. 4, Ekta Nagar
                <br />
                Prestige Park, Chakan 410501
                <br />
                Pune, Maharashtra
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm border-white/50 hover:bg-white/80"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
