"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "hi" | "mr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "company.name": "Sai Snehal Enterprises",
    "company.tagline": "Chakan's Filter Expert",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "button.call": "Call Now",

    // Hero
    "hero.title": "Chakan, Pune Reliable Water Purifier Service for Pure Water",
    "hero.subtitle":
      "Complete water purification and electrical services for Chakan and surrounding areas with trust and business expertise.",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Complete solutions for your home and business needs",
    "services.water": "Water Purifier",
    "services.water.desc": "Installation, repair, and maintenance of all brands",
    "services.electrical": "Electrical Services",
    "services.electrical.desc": "Complete electrical solutions for homes and offices",
    "services.appliances": "Home Appliances",
    "services.appliances.desc": "Repair and service of all home appliances",
    "services.solar": "Solar Rooftops",
    "services.solar.desc": "Solar panel installation and maintenance",

    "services.water.items": [
      "New Installation / Re-installation",
      "Repair & Maintenance",
      "Filter Replacement",
      "Annual Service Plans",
      "Water Quality Testing",
      "Emergency Service Available",
    ],
    "services.electrical.items": [
      "Light Fitting & Installation",
      "Fan Installation & Repair",
      "Complete Home Wiring",
      "Electrical Repairs & Troubleshooting",
      "POP Ceiling Work",
      "Switch & Socket Installation",
    ],
    "services.appliances.items": [
      "All Home Appliance Repair & Service",
      "Atta Chakki Setup & Maintenance",
      "Mixer Installation & Repair",
      "Grinder Setup & Service",
      "Appliance Repairs",
      "Cloth Hangers Installation",
    ],
    "services.solar.items": [
      "Solar Panel Installation & Maintenance",
      "Solar Panel Supply & Installation",
      "Solar Power System Maintenance",
      "Consultation for Home & Business Setups",
      "Solar System Design",
      "Government Subsidy Assistance",
    ],

    // Products
    "products.title": "Our Products",
    "products.subtitle": "Premium water purifiers with advanced technology and competitive pricing",
    "products.specialty": "Specialty Products",
    "products.brands": "Brand Water Purifiers",
    "products.quote": "Order Now",
    "products.view": "Enquiry",
    "button.orderNow": "Order Now",
    "button.enquiry": "Enquiry",
    "brands.waterPurifier": "Brand Water Purifiers",
    "brands.electrical": "Electrical Services",
    "brands.appliances": "Home Appliances",
    "brands.solar": "Solar Rooftop Systems",

    "product.ro.uv.title": "RO + UV Water Purifier",
    "product.ro.uv.desc": "Advanced dual purification technology",
    "product.alkaline.title": "Alkaline RO Water Purifier",
    "product.alkaline.desc": "pH balanced healthy water",
    "product.copper.title": "Copper RO System",
    "product.copper.desc": "Copper infused healthy water",
    "product.wall.title": "Wall-mounted Purifier",
    "product.wall.desc": "Space-saving design with filter kit",
    "whatsapp.message": "Hi! I'm interested in {product} priced at {price}. Please provide more details.",

    // About
    "about.title": "Why Choose Us?",
    "about.subtitle": "Your trusted partner for water purification and electrical services",
    "about.experience": "Years of Experience",
    "about.customers": "Happy Customers",
    "about.service": "24/7 Service",
    "about.warranty": "Warranty Support",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch for all your water purifier and electrical needs",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Service Hours",
    "contact.available": "Available 24/7 for emergency services",
    "contact.response": "We'll respond within 24 hours",
    "contact.quote": "Get Free Quote",
    "contact.send": "Send Message",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.phone": "Your Phone",
    "contact.form.service": "Service Required",
    "contact.form.message": "Your Message",
    "contact.hours.text": "Monday - Sunday: 8:00 AM - 8:00 PM",
    "contact.address.text": "Shop No. 1, Chakan, Pune, Maharashtra 410501",

    // Footer
    "footer.description":
      "Your trusted partner for water purification, electrical services, and solar solutions in Chakan and surrounding areas.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contactInfo": "Contact Info",
    "footer.maintenance": "Repair & Maintenance",
    "footer.follow": "Follow us on:",
    "footer.copyright": "© 2024 Sai Snehal Enterprises. All rights reserved.",
  },
  hi: {
    // Header
    "company.name": "साई स्नेहल एंटरप्राइजेज",
    "company.tagline": "चाकण का फिल्टर वाला",
    "nav.home": "होम",
    "nav.services": "सेवाएं",
    "nav.products": "उत्पाद",
    "nav.about": "हमारे बारे में",
    "nav.contact": "संपर्क",
    "button.call": "अभी कॉल करें",

    // Hero
    "hero.title": "चाकण, पुणे शुद्ध पानी की विश्वसनीय वॉटर प्यूरीफायर सेवा",
    "hero.subtitle": "चाकण और आसपास के क्षेत्रों के लिए विश्वास और व्यावसायिक विशेषज्ञता के साथ संपूर्ण जल शुद्धीकरण और इलेक्ट्रिकल सेवाएं।",

    // Services
    "services.title": "हमारी सेवाएं",
    "services.subtitle": "आपके घर और व्यावसायिक आवश्यकताओं के लिए संपूर्ण समाधान",
    "services.water": "वाटर प्यूरीफायर",
    "services.water.desc": "सभी ब्रांड्स की स्थापना, मरम्मत और रखरखाव",
    "services.electrical": "इलेक्ट्रिकल सेवाएं",
    "services.electrical.desc": "घरों और कार्यालयों के लिए संपूर्ण इलेक्ट्रिकल समाधान",
    "services.appliances": "घरेलू उपकरण",
    "services.appliances.desc": "सभी घरेलू उपकरणों की मरम्मत और सेवा",
    "services.solar": "सोलर रूफटॉप",
    "services.solar.desc": "सोलर पैनल स्थापना और रखरखाव",

    "services.water.items": [
      "नई स्थापना / पुनः स्थापना",
      "मरम्मत और रखरखाव",
      "फिल्टर बदलना",
      "वार्षिक सेवा योजनाएं",
      "पानी की गुणवत्ता परीक्षण",
      "आपातकालीन सेवा उपलब्ध",
    ],
    "services.electrical.items": [
      "लाइट फिटिंग और स्थापना",
      "पंखा स्थापना और मरम्मत",
      "संपूर्ण घर की वायरिंग",
      "इलेक्ट्रिकल मरम्मत और समस्या निवारण",
      "पीओपी सीलिंग का काम",
      "स्विच और सॉकेट स्थापना",
    ],
    "services.appliances.items": [
      "सभी घरेलू उपकरणों की मरम्मत और सेवा",
      "आटा चक्की सेटअप और रखरखाव",
      "मिक्सर स्थापना और मरम्मत",
      "ग्राइंडर सेटअप और सेवा",
      "उपकरण मरम्मत",
      "कपड़े हैंगर स्थापना",
    ],
    "services.solar.items": [
      "सोलर पैनल स्थापना और रखरखाव",
      "सोलर पैनल आपूर्ति और स्थापना",
      "सोलर पावर सिस्टम रखरखाव",
      "घर और व्यावसायिक सेटअप के लिए परामर्श",
      "सोलर सिस्टम डिज़ाइन",
      "सरकारी सब्सिडी सहायता",
    ],

    // Products
    "products.title": "हमारे उत्पाद",
    "products.subtitle": "उन्नत तकनीक और प्रतिस्पर्धात्मक किंमतीसह प्रीमियम वाटर प्यूरीफायर",
    "products.specialty": "विशेष उत्पाद",
    "products.brands": "ब्रांड वाटर प्यूरीफायर",
    "products.quote": "अभी ऑर्डर करें",
    "products.view": "पूछताछ",
    "button.orderNow": "अभी ऑर्डर करें",
    "button.enquiry": "पूछताछ",
    "brands.waterPurifier": "ब्रांड वाटर प्यूरीफायर",
    "brands.electrical": "इलेक्ट्रिकल सेवाएं",
    "brands.appliances": "घरेलू उपकरण",
    "brands.solar": "सोलर रूफटॉप सिस्टम",

    "product.ro.uv.title": "RO + UV वाटर प्यूरीफायर",
    "product.ro.uv.desc": "उन्नत दोहरी शुद्धीकरण तकनीक",
    "product.alkaline.title": "एल्कलाइन RO वाटर प्यूरीफायर",
    "product.alkaline.desc": "pH संतुलित स्वस्थ पानी",
    "product.copper.title": "कॉपर RO सिस्टम",
    "product.copper.desc": "तांबा मिश्रित स्वस्थ पानी",
    "product.wall.title": "वॉल-माउंटेड प्यूरीफायर",
    "product.wall.desc": "फिल्टर किटसह जागा वाचवणारे डिझाइन",
    "whatsapp.message": "नमस्कार! मला {product} मध्ये स्वारस्य आहे ज्याची किंमत {price} आहे. कृपया अधिक तपशील द्या.",

    // About
    "about.title": "आम्हाला का निवडावे?",
    "about.subtitle": "पाणी शुद्धीकरण आणि इलेक्ट्रिकल सेवांसाठी तुमचा विश्वसनीय भागीदार",
    "about.experience": "वर्षांचा अनुभव",
    "about.customers": "समाधानी ग्राहक",
    "about.service": "२४/७ सेवा",
    "about.warranty": "वॉरंटी सपोर्ट",

    // Contact
    "contact.title": "संपर्क साधा",
    "contact.subtitle": "तुमच्या सर्व वॉटर प्युरिफायर आणि इलेक्ट्रिकल गरजांसाठी संपर्क साधा",
    "contact.address": "पत्ता",
    "contact.phone": "फोन",
    "contact.email": "ईमेल",
    "contact.hours": "सेवा वेळा",
    "contact.available": "आपत्कालीन सेवांसाठी २४/७ उपलब्ध",
    "contact.response": "आम्ही २४ तासांत उत्तर देऊ",
    "contact.quote": "मोफत कोटेशन मिळवा",
    "contact.send": "संदेश पाठवा",
    "contact.form.name": "तुमचे नाव",
    "contact.form.email": "तुमचा ईमेल",
    "contact.form.phone": "तुमचा फोन",
    "contact.form.service": "आवश्यक सेवा",
    "contact.form.message": "तुमचा संदेश",
    "contact.hours.text": "सोमवार - रविवार: सकाळी ८:०० - संध्याकाळी ८:००",
    "contact.address.text": "दुकान क्र. १, चाकण, पुणे, महाराष्ट्र ४१०५०१",

    // Footer
    "footer.description":
      "चाकण आणि आजूबाजूच्या भागात पाणी शुद्धीकरण, इलेक्ट्रिकल सेवा आणि सोलर उपायांसाठी तुमचा विश्वसनीय भागीदार.",
    "footer.quickLinks": "द्रुत दुवे",
    "footer.services": "सेवा",
    "footer.contactInfo": "संपर्क माहिती",
    "footer.maintenance": "दुरुस्ती आणि देखभाल",
    "footer.follow": "आम्हाला फॉलो करा:",
    "footer.copyright": "© २०२४ साई स्नेहल एंटरप्रायझेस. सर्व हक्क राखीव.",
  },
  mr: {
    // Header
    "company.name": "साई स्नेहल एंटरप्रायझेस",
    "company.tagline": "चाकणचा फिल्टर वाला",
    "nav.home": "होम",
    "nav.services": "सेवा",
    "nav.products": "उत्पादने",
    "nav.about": "आमच्याबद्दल",
    "nav.contact": "संपर्क",
    "button.call": "आता कॉल करा",

    // Hero
    "hero.title": "चाकण, पुणे शुद्ध पाण्यासाठी विश्वसनीय वॉटर प्युरिफायर सेवा",
    "hero.subtitle": "तुमच्या दारात संपूर्ण पाणी शुद्धीकरण व इलेक्ट्रिकल सेवा चाकण व आजूबाजूच्या परिसरातील कुटुंब व व्यवसायाचा विश्वास.",

    // Services
    "services.title": "आमच्या सेवा",
    "services.subtitle": "तुमच्या घर आणि व्यावसायिक गरजांसाठी संपूर्ण उपाय",
    "services.water": "वॉटर प्युरिफायर",
    "services.water.desc": "सर्व ब्रँडची स्थापना, दुरुस्ती आणि देखभाल",
    "services.electrical": "इलेक्ट्रिकल सेवा",
    "services.electrical.desc": "घर आणि कार्यालयांसाठी संपूर्ण इलेक्ट्रिकल उपाय",
    "services.appliances": "घरगुती उपकरणे",
    "services.appliances.desc": "सर्व घरगुती उपकरणांची दुरुस्ती आणि सेवा",
    "services.solar": "सोलर रूफटॉप",
    "services.solar.desc": "सोलर पॅनेल स्थापना आणि देखभाल",

    "services.water.items": [
      "नवीन स्थापना / पुनर्स्थापना",
      "दुरुस्ती आणि देखभाल",
      "फिल्टर बदलणे",
      "वार्षिक सेवा योजना",
      "पाण्याची गुणवत्ता तपासणी",
      "आपत्कालीन सेवा उपलब्ध",
    ],
    "services.electrical.items": [
      "लाइट फिटिंग आणि स्थापना",
      "पंखा स्थापना आणि दुरुस्ती",
      "संपूर्ण घराची वायरिंग",
      "इलेक्ट्रिकल दुरुस्ती आणि समस्या निवारण",
      "पीओपी सीलिंगचे काम",
      "स्विच आणि सॉकेट स्थापना",
    ],
    "services.appliances.items": [
      "सर्व घरगुती उपकरणांची दुरुस्ती आणि सेवा",
      "आटा चक्की सेटअप आणि देखभाल",
      "मिक्सर स्थापना आणि दुरुस्ती",
      "ग्राइंडर सेटअप आणि सेवा",
      "उपकरण दुरुस्ती",
      "कपडे हॅंगर स्थापना",
    ],
    "services.solar.items": [
      "सोलर पॅनेल स्थापना आणि देखभाल",
      "सोलर पॅनेल पुरवठा आणि स्थापना",
      "सोलर पॉवर सिस्टम देखभाल",
      "घर आणि व्यावसायिक सेटअपसाठी सल्ला",
      "सोलर सिस्टम डिझाइन",
      "सरकारी अनुदान सहाय्य",
    ],

    // Products
    "products.title": "आमची उत्पादने",
    "products.subtitle": "प्रगत तंत्रज्ञान आणि स्पर्धात्मक किंमतीसह प्रीमियम वॉटर प्युरिफायर",
    "products.specialty": "विशेष उत्पादने",
    "products.brands": "ब्रँड वॉटर प्युरिफायर",
    "products.quote": "आता ऑर्डर करा",
    "products.view": "चौकशी",
    "button.orderNow": "आता ऑर्डर करा",
    "button.enquiry": "चौकशी",
    "brands.waterPurifier": "ब्रँड वॉटर प्युरिफायर",
    "brands.electrical": "इलेक्ट्रिकल सेवा",
    "brands.appliances": "घरगुती उपकरणे",
    "brands.solar": "सोलर रूफटॉप सिस्टम",

    "product.ro.uv.title": "RO + UV वॉटर प्युरिफायर",
    "product.ro.uv.desc": "प्रगत दुहेरी शुद्धीकरण तंत्रज्ञान",
    "product.alkaline.title": "अल्कलाइन RO वॉटर प्युरिफायर",
    "product.alkaline.desc": "pH संतुलित निरोगी पाणी",
    "product.copper.title": "कॉपर RO सिस्टम",
    "product.copper.desc": "तांबे मिश्रित निरोगी पाणी",
    "product.wall.title": "वॉल-माउंटेड प्युरिफायर",
    "product.wall.desc": "फिल्टर किटसह जागा वाचवणारे डिझाइन",
    "whatsapp.message": "नमस्कार! मला {product} मध्ये स्वारस्य आहे ज्याची किंमत {price} आहे. कृपया अधिक तपशील द्या.",

    // About
    "about.title": "आम्हाला का निवडावे?",
    "about.subtitle": "पाणी शुद्धीकरण आणि इलेक्ट्रिकल सेवांसाठी तुमचा विश्वसनीय भागीदार",
    "about.experience": "वर्षांचा अनुभव",
    "about.customers": "समाधानी ग्राहक",
    "about.service": "२४/७ सेवा",
    "about.warranty": "वॉरंटी सपोर्ट",

    // Contact
    "contact.title": "संपर्क साधा",
    "contact.subtitle": "तुमच्या सर्व वॉटर प्युरिफायर आणि इलेक्ट्रिकल गरजांसाठी संपर्क साधा",
    "contact.address": "पत्ता",
    "contact.phone": "फोन",
    "contact.email": "ईमेल",
    "contact.hours": "सेवा वेळा",
    "contact.available": "आपत्कालीन सेवांसाठी २४/७ उपलब्ध",
    "contact.response": "आम्ही २४ तासांत उत्तर देऊ",
    "contact.quote": "मोफत कोटेशन मिळवा",
    "contact.send": "संदेश पाठवा",
    "contact.form.name": "तुमचे नाव",
    "contact.form.email": "तुमचा ईमेल",
    "contact.form.phone": "तुमचा फोन",
    "contact.form.service": "आवश्यक सेवा",
    "contact.form.message": "तुमचा संदेश",
    "contact.hours.text": "सोमवार - रविवार: सकाळी ८:०० - संध्याकाळी ८:००",
    "contact.address.text": "दुकान क्र. १, चाकण, पुणे, महाराष्ट्र ४१०५०१",

    // Footer
    "footer.description":
      "चाकण आणि आजूबाजूच्या भागात पाणी शुद्धीकरण, इलेक्ट्रिकल सेवा आणि सोलर उपायांसाठी तुमचा विश्वसनीय भागीदार.",
    "footer.quickLinks": "द्रुत दुवे",
    "footer.services": "सेवा",
    "footer.contactInfo": "संपर्क माहिती",
    "footer.maintenance": "दुरुस्ती आणि देखभाल",
    "footer.follow": "आम्हाला फॉलो करा:",
    "footer.copyright": "© २०२४ साई स्नेहल एंटरप्रायझेस. सर्व हक्क राखीव.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("mr")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
