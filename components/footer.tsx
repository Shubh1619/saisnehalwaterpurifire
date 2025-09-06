"use client"

import { Facebook, Instagram, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground/95 backdrop-blur-md text-background py-12 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">{t("company.name")}</h3>
            <p className="text-sm opacity-80 mb-4">{t("company.tagline")}</p>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted partner for pure water solutions, electrical services, and solar solutions in Chakan, Pune.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#products" className="opacity-80 hover:opacity-100 transition-opacity">
                  {t("nav.products")}
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">{t("services.water")}</li>
              <li className="opacity-80">{t("services.electrical")}</li>
              <li className="opacity-80">{t("services.appliances")}</li>
              <li className="opacity-80">{t("services.solar")}</li>
              <li className="opacity-80">Repair & Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="opacity-80">+91 9356912160</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="opacity-80">gadakhravi@gmail.com</span>
              </div>
              <p className="opacity-80 mt-4">
                Building No. 4, Ekta Nagar
                <br />
                Prestige Park, Chakan 410501
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">© 2025 {t("company.name")}. All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-sm opacity-80">Follow us on:</span>
            <div className="flex gap-2">
              <Facebook className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
