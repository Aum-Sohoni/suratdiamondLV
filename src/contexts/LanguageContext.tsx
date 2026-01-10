import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "lv" | "ru";

interface Translations {
  [key: string]: {
    en: string;
    lv: string;
    ru: string;
  };
}

export const translations: Translations = {
  // Navigation
  collections: { en: "Collections", lv: "Kolekcijas", ru: "Коллекции" },
  about: { en: "About", lv: "Par mums", ru: "О нас" },
  bespoke: { en: "Bespoke", lv: "Individuālais dizains", ru: "На заказ" },
  contact: { en: "Contact", lv: "Kontakti", ru: "Контакты" },
  
  // Hero
  diamonds: { en: "DIAMONDS", lv: "DIMANTI", ru: "БРИЛЛИАНТЫ" },
  discoverLatestJewelry: { en: "Discover our latest jewelry", lv: "Atklājiet mūsu jaunākos rotaslietas", ru: "Откройте наши новые украшения" },
  heroDescription: { 
    en: "creations crafted with love and attention to detail. Our features exquisite pieces adorned with sparkling diamonds, adding luxury and elegance to your ensemble.",
    lv: "radītas ar mīlestību un uzmanību detaļām. Mūsu izsmalcināti darbi rotāti ar mirdzošiem dimantiem, piešķirot jūsu tēlam greznību un eleganci.",
    ru: "созданные с любовью и вниманием к деталям. Наши изысканные изделия, украшенные сверкающими бриллиантами, добавят роскоши и элегантности вашему образу."
  },
  goToCatalog: { en: "Go To Catalog", lv: "Uz katalogu", ru: "В каталог" },
  
  // Collections
  ourCollections: { en: "Our Collections", lv: "Mūsu kolekcijas", ru: "Наши коллекции" },
  curatedExcellence: { en: "Curated Excellence", lv: "Augstākā kvalitāte", ru: "Отборное совершенство" },
  collectionsDescription: { 
    en: "Each piece in our collection represents the pinnacle of diamond craftsmanship, sourced ethically and cut to perfection.",
    lv: "Katrs mūsu kolekcijas eksemplārs pārstāv augstāko dimantu meistarības līmeni, iegūts ētiski un griezts līdz pilnībai.",
    ru: "Каждое изделие в нашей коллекции представляет вершину мастерства огранки бриллиантов, добытых этично и ограненных до совершенства."
  },
  necklaces: { en: "Necklaces", lv: "Kaklarotas", ru: "Колье" },
  rings: { en: "Rings", lv: "Gredzeni", ru: "Кольца" },
  earrings: { en: "Earrings", lv: "Auskari", ru: "Серьги" },
  bracelets: { en: "Bracelets", lv: "Aproces", ru: "Браслеты" },
  pieces: { en: "pieces", lv: "gabali", ru: "шт." },
  explore: { en: "Explore", lv: "Apskatīt", ru: "Смотреть" },
  necklacesDesc: { en: "Elegant pendants & statement pieces", lv: "Eleganti kuloni un izsmalcināti rotājumi", ru: "Элегантные подвески и эффектные украшения" },
  ringsDesc: { en: "Engagement & eternity bands", lv: "Saderināšanās un mūžības gredzeni", ru: "Обручальные и вечные кольца" },
  earringsDesc: { en: "Studs, drops & chandeliers", lv: "Nagliņas, pilieni un lustras", ru: "Пусеты, капли и люстры" },
  braceletsDesc: { en: "Tennis & bangle collections", lv: "Tenisa un stīvu aproču kolekcijas", ru: "Теннисные и жесткие браслеты" },
  
  // About
  ourStory: { en: "Our Story", lv: "Mūsu stāsts", ru: "Наша история" },
  whereEastMeets: { en: "Where East Meets", lv: "Kur Austrumi satiek", ru: "Где Восток встречает" },
  baltic: { en: "Baltic", lv: "Baltiju", ru: "Балтику" },
  aboutP1: {
    en: "Surat Diamond Latvia was born from a vision to bring the legendary diamond expertise of Surat, India's diamond heartland, to the sophisticated markets of the Baltic region.",
    lv: "Surat Diamond Latvia dzima no vīzijas nest leģendāro Suratas dimantu ekspertīzi, Indijas dimantu sirdi, uz izsmalcināto Baltijas reģiona tirgu.",
    ru: "Surat Diamond Latvia родилась из желания принести легендарное мастерство огранки из Сурата, бриллиантового сердца Индии, на изысканные рынки Балтийского региона."
  },
  aboutP2: {
    en: "From our elegant showroom in Riga's historic center, we offer an exclusive selection of certified diamonds and bespoke jewelry that honors both traditions—Indian precision cutting and European design aesthetics.",
    lv: "No mūsu elegantā izstāžu zāle Rīgas vēsturiskajā centrā mēs piedāvājam ekskluzīvu sertificētu dimantu un individuālu rotaslietu izvēli, kas godina abas tradīcijas — Indijas precīzo griešanu un Eiropas dizaina estētiku.",
    ru: "Из нашего элегантного шоу-рума в историческом центре Риги мы предлагаем эксклюзивную коллекцию сертифицированных бриллиантов и украшений на заказ, чтящих обе традиции — индийскую точность огранки и европейскую эстетику дизайна."
  },
  discoverHeritage: { en: "Discover Our Heritage", lv: "Atklājiet mūsu mantojumu", ru: "Узнайте о нашем наследии" },
  suratHeritage: { en: "Surat Heritage", lv: "Suratas mantojums", ru: "Наследие Сурата" },
  suratHeritageDesc: { en: "Direct connections to Surat, the diamond capital of India, ensuring access to the finest stones.", lv: "Tiešie sakari ar Suratu, Indijas dimantu galvaspilsētu, nodrošinot piekļuvi vislabākajiem akmeņiem.", ru: "Прямые связи с Суратом, бриллиантовой столицей Индии, обеспечивая доступ к лучшим камням." },
  expertCraftsmanship: { en: "Expert Craftsmanship", lv: "Meistara darbs", ru: "Мастерство" },
  expertCraftsmanshipDesc: { en: "Every piece is crafted by master artisans with decades of experience in fine jewelry.", lv: "Katru gabalu izveido meistari ar gadu desmitiem ilgu pieredzi augstākās klases rotaslietās.", ru: "Каждое изделие создано мастерами с многолетним опытом работы с ювелирными украшениями." },
  ethicalSourcing: { en: "Ethical Sourcing", lv: "Ētiska ieguva", ru: "Этичная добыча" },
  ethicalSourcingDesc: { en: "Committed to conflict-free diamonds and sustainable, responsible practices.", lv: "Apņemšanās izmantot bezkonfliktu dimantus un ilgtspējīgu, atbildīgu praksi.", ru: "Приверженность бесконфликтным бриллиантам и устойчивым, ответственным практикам." },
  balticElegance: { en: "Baltic Elegance", lv: "Baltijas elegance", ru: "Балтийская элегантность" },
  balticEleganceDesc: { en: "Blending Indian diamond expertise with Latvian design sensibilities.", lv: "Apvienojot Indijas dimantu ekspertīzi ar Latvijas dizaina izjūtu.", ru: "Сочетание индийского мастерства огранки с латвийским дизайнерским чутьем." },
  
  // Testimonials
  testimonials: { en: "Testimonials", lv: "Atsauksmes", ru: "Отзывы" },
  wordsOfAppreciation: { en: "Words of Appreciation", lv: "Pateicības vārdi", ru: "Слова благодарности" },
  
  // Bespoke
  bespokeCreation: { en: "Bespoke Creation", lv: "Individuālais radījums", ru: "Изготовление на заказ" },
  yourVisionOurCraft: { en: "Your Vision, Our Craft", lv: "Jūsu vīzija, mūsu meistarība", ru: "Ваше видение, наше мастерство" },
  bespokeDescription: {
    en: "Create a one-of-a-kind piece that tells your unique story. Our bespoke service transforms your dreams into eternal brilliance.",
    lv: "Izveidojiet unikālu darbu, kas stāsta jūsu īpašo stāstu. Mūsu individuālais serviss pārvērš jūsu sapņus mūžīgā spožumā.",
    ru: "Создайте уникальное украшение, которое расскажет вашу особенную историю. Наш индивидуальный сервис превратит ваши мечты в вечное сияние."
  },
  consultation: { en: "Consultation", lv: "Konsultācija", ru: "Консультация" },
  consultationDesc: { en: "Share your vision with our design team in a private session.", lv: "Dalieties ar savu vīziju ar mūsu dizaina komandu privātā sesijā.", ru: "Поделитесь своим видением с нашей командой дизайнеров на приватной встрече." },
  stoneSelection: { en: "Stone Selection", lv: "Akmeņu izvēle", ru: "Выбор камня" },
  stoneSelectionDesc: { en: "Choose from our curated selection of certified diamonds.", lv: "Izvēlieties no mūsu rūpīgi atlasītajiem sertificētajiem dimantiem.", ru: "Выберите из нашей курированной коллекции сертифицированных бриллиантов." },
  designCraft: { en: "Design & Craft", lv: "Dizains un izgatavošana", ru: "Дизайн и изготовление" },
  designCraftDesc: { en: "Our master artisans bring your vision to life with precision.", lv: "Mūsu meistari iedzīvina jūsu vīziju ar precizitāti.", ru: "Наши мастера воплотят ваше видение в жизнь с точностью." },
  reveal: { en: "Reveal", lv: "Atklāšana", ru: "Презентация" },
  revealDesc: { en: "Unveil your unique piece in an unforgettable presentation.", lv: "Atklājiet savu unikālo darbu neaizmirstamā prezentācijā.", ru: "Представьте ваше уникальное украшение на незабываемой презентации." },
  startBespokeJourney: { en: "Start Your Bespoke Journey", lv: "Sāciet savu individuālo ceļojumu", ru: "Начните ваш индивидуальный путь" },
  
  // Contact
  getInTouch: { en: "Get in Touch", lv: "Sazinies ar mums", ru: "Свяжитесь с нами" },
  beginYourJourney: { en: "Begin Your Journey", lv: "Sāciet savu ceļojumu", ru: "Начните ваш путь" },
  contactDescription: {
    en: "Whether you're seeking the perfect engagement ring or a bespoke piece, our diamond experts are here to guide you.",
    lv: "Neatkarīgi no tā, vai meklējat ideālu saderināšanās gredzenu vai individuālu rotaslietu, mūsu dimantu eksperti ir gatavi jūs vadīt.",
    ru: "Ищете ли вы идеальное обручальное кольцо или украшение на заказ, наши эксперты по бриллиантам готовы помочь вам."
  },
  firstName: { en: "First Name", lv: "Vārds", ru: "Имя" },
  lastName: { en: "Last Name", lv: "Uzvārds", ru: "Фамилия" },
  email: { en: "Email", lv: "E-pasts", ru: "Электронная почта" },
  interest: { en: "Interest", lv: "Interese", ru: "Интерес" },
  selectInterest: { en: "Select your interest", lv: "Izvēlieties savu interesi", ru: "Выберите ваш интерес" },
  engagementRings: { en: "Engagement Rings", lv: "Saderināšanās gredzeni", ru: "Обручальные кольца" },
  bespokeJewelry: { en: "Bespoke Jewelry", lv: "Individuālas rotaslietas", ru: "Украшения на заказ" },
  collectionPieces: { en: "Collection Pieces", lv: "Kolekcijas priekšmeti", ru: "Коллекционные изделия" },
  privateConsultation: { en: "Private Consultation", lv: "Privāta konsultācija", ru: "Приватная консультация" },
  message: { en: "Message", lv: "Ziņojums", ru: "Сообщение" },
  messagePlaceholder: { en: "Tell us about your vision...", lv: "Pastāstiet mums par savu vīziju...", ru: "Расскажите нам о вашем видении..." },
  sendInquiry: { en: "Send Inquiry", lv: "Nosūtīt pieprasījumu", ru: "Отправить запрос" },
  visitUs: { en: "Visit Us", lv: "Apmeklējiet mūs", ru: "Посетите нас" },
  callUs: { en: "Call Us", lv: "Zvaniet mums", ru: "Позвоните нам" },
  emailUs: { en: "Email Us", lv: "Rakstiet mums", ru: "Напишите нам" },
  openingHours: { en: "Opening Hours", lv: "Darba laiks", ru: "Часы работы" },
  artNouveauDistrict: { en: "Historic Art Nouveau District", lv: "Vēsturiskais jūgendstila rajons", ru: "Исторический район модерна" },
  responseTime: { en: "Response within 24 hours", lv: "Atbilde 24 stundu laikā", ru: "Ответ в течение 24 часов" },
  privateViewings: { en: "Private viewings by appointment", lv: "Privātas apskates pēc pieraksta", ru: "Приватные просмотры по записи" },
  followJourney: { en: "Follow Our Journey", lv: "Sekojiet mūsu ceļojumam", ru: "Следите за нами" },
  
  // Footer
  services: { en: "Services", lv: "Pakalpojumi", ru: "Услуги" },
  company: { en: "Company", lv: "Uzņēmums", ru: "Компания" },
  bespokeDesign: { en: "Bespoke Design", lv: "Individuālais dizains", ru: "Индивидуальный дизайн" },
  diamondEducation: { en: "Diamond Education", lv: "Dimantu izglītība", ru: "Обучение о бриллиантах" },
  ringSizing: { en: "Ring Sizing", lv: "Gredzenu izmēri", ru: "Размер кольца" },
  aftercare: { en: "Aftercare", lv: "Pēcapkope", ru: "Послепродажное обслуживание" },
  sustainability: { en: "Sustainability", lv: "Ilgtspējība", ru: "Устойчивость" },
  careers: { en: "Careers", lv: "Karjera", ru: "Карьера" },
  press: { en: "Press", lv: "Prese", ru: "Пресса" },
  footerDescription: {
    en: "Where Surat's legendary diamond heritage meets Baltic elegance. Crafting moments of eternal brilliance in the heart of Riga.",
    lv: "Kur Suratas leģendārais dimantu mantojums satiekas ar Baltijas eleganci. Veidojam mūžīga spožuma mirkļus Rīgas sirdī.",
    ru: "Где легендарное бриллиантовое наследие Сурата встречается с балтийской элегантностью. Создаем моменты вечного сияния в сердце Риги."
  },
  allRightsReserved: { en: "All rights reserved.", lv: "Visas tiesības aizsargātas.", ru: "Все права защищены." },
  privacyPolicy: { en: "Privacy Policy", lv: "Privātuma politika", ru: "Политика конфиденциальности" },
  termsOfService: { en: "Terms of Service", lv: "Pakalpojumu noteikumi", ru: "Условия обслуживания" },
  
  // Shop
  all: { en: "All", lv: "Visi", ru: "Все" },
  shop: { en: "Shop", lv: "Veikals", ru: "Магазин" },
  addToCart: { en: "Add to Cart", lv: "Pievienot grozam", ru: "В корзину" },
  viewDetails: { en: "View Details", lv: "Skatīt detaļas", ru: "Подробнее" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
