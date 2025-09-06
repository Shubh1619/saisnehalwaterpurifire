"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="text-xs px-2 py-1 h-7"
      >
        English
      </Button>
      <Button
        variant={language === "hi" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("hi")}
        className="text-xs px-2 py-1 h-7"
      >
        हिंदी
      </Button>
      <Button
        variant={language === "mr" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("mr")}
        className="text-xs px-2 py-1 h-7"
      >
        मराठी
      </Button>
    </div>
  )
}
