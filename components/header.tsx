"use client"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export default function Header() {
  const { t, language, setLanguage } = useLanguage()

  const phoneNumbers = ["9356912160", "9921242812"]

  const handleCallClick = () => {
    const randomPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)]
    window.location.href = `tel:+91${randomPhone}`
  }

  const handleLanguageClick = () => {
    const languages = ["en", "hi", "mr"]
    const currentIndex = languages.indexOf(language)
    const nextIndex = (currentIndex + 1) % languages.length
    setLanguage(languages[nextIndex])
  }

  const getLanguageLabel = () => {
    switch (language) {
      case "en":
        return "English" // Changed from "EN" to full language name
      case "hi":
        return "हिंदी" // Changed from "हि" to full language name
      case "mr":
        return "मराठी" // Changed from "मर" to full language name
      default:
        return "English"
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-primary font-serif">{t("company.name")}</h1>
            <p className="text-sm text-muted-foreground">{t("company.tagline")}</p>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              {t("nav.home")}
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              {t("nav.services")}
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              {t("nav.products")}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {t("nav.about")}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              {t("nav.contact")}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleLanguageClick}
              variant="outline"
              size="sm"
              className="bg-background/50 backdrop-blur-sm hover:bg-background/70 border border-border/50 min-w-[80px]" // Increased min-width to accommodate full language names
            >
              {getLanguageLabel()}
            </Button>
            <Button
              onClick={handleCallClick}
              className="bg-secondary/90 backdrop-blur-sm hover:bg-secondary border border-secondary/20"
            >
              {t("button.call")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
