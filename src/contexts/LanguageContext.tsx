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
  home: { en: "Home", lv: "Sākums", ru: "Главная" },
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
  addedToCart: { en: "Added to cart!", lv: "Pievienots grozam!", ru: "Добавлено в корзину!" },
  viewDetails: { en: "View Details", lv: "Skatīt detaļas", ru: "Подробнее" },
  noProductsFound: { en: "No products found in this category.", lv: "Šajā kategorijā nav atrasti produkti.", ru: "В этой категории товары не найдены." },
  viewAllProducts: { en: "View All Products", lv: "Skatīt visus produktus", ru: "Смотреть все товары" },
  
  // Checkout
  shoppingCart: { en: "Shopping Cart", lv: "Iepirkumu grozs", ru: "Корзина" },
  yourCartIsEmpty: { en: "Your Cart is Empty", lv: "Jūsu grozs ir tukšs", ru: "Ваша корзина пуста" },
  discoverCollection: { en: "Discover our exquisite collection of diamond jewelry", lv: "Atklājiet mūsu izsmalcināto dimantu rotaslietu kolekciju", ru: "Откройте нашу изысканную коллекцию бриллиантовых украшений" },
  exploreCollection: { en: "Explore Collection", lv: "Apskatīt kolekciju", ru: "Смотреть коллекцию" },
  orderSummary: { en: "Order Summary", lv: "Pasūtījuma kopsavilkums", ru: "Сводка заказа" },
  subtotal: { en: "Subtotal", lv: "Starpsumma", ru: "Промежуточный итог" },
  shipping: { en: "Shipping", lv: "Piegāde", ru: "Доставка" },
  free: { en: "Free", lv: "Bezmaksas", ru: "Бесплатно" },
  total: { en: "Total", lv: "Kopā", ru: "Итого" },
  proceedToCheckout: { en: "Proceed to Secure Checkout", lv: "Turpināt uz drošu apmaksu", ru: "Перейти к безопасной оплате" },
  securePayment: { en: "Secure Payment via Stripe", lv: "Droša maksājuma caur Stripe", ru: "Безопасная оплата через Stripe" },
  processing: { en: "Processing...", lv: "Apstrādā...", ru: "Обработка..." },
  paymentSuccess: { en: "Payment Successful!", lv: "Maksājums veiksmīgs!", ru: "Оплата успешна!" },
  thankYouOrder: { en: "Thank you for your order!", lv: "Paldies par jūsu pasūtījumu!", ru: "Спасибо за ваш заказ!" },
  orderConfirmation: { en: "Your order has been placed successfully. We'll send you a confirmation email shortly.", lv: "Jūsu pasūtījums ir veiksmīgi noformēts. Mēs drīzumā nosūtīsim jums apstiprinājuma e-pastu.", ru: "Ваш заказ успешно оформлен. Мы скоро отправим вам письмо с подтверждением." },
  continueShopping: { en: "Continue Shopping", lv: "Turpināt iepirkties", ru: "Продолжить покупки" },
  returnHome: { en: "Return Home", lv: "Atgriezties mājās", ru: "На главную" },
  paymentCanceled: { en: "Payment Canceled", lv: "Maksājums atcelts", ru: "Оплата отменена" },
  paymentCanceledDesc: { en: "Your payment was canceled. Your cart items are still saved.", lv: "Jūsu maksājums tika atcelts. Jūsu groza preces joprojām ir saglabātas.", ru: "Ваш платеж был отменен. Товары в корзине сохранены." },
  tryAgain: { en: "Try Again", lv: "Mēģināt vēlreiz", ru: "Попробовать снова" },
  checkoutError: { en: "Checkout Error", lv: "Apmaksas kļūda", ru: "Ошибка оплаты" },
  
  // Auth
  welcomeBack: { en: "Welcome Back", lv: "Laipni lūdzam atpakaļ", ru: "С возвращением" },
  createAccount: { en: "Create Account", lv: "Izveidot kontu", ru: "Создать аккаунт" },
  signInToContinue: { en: "Sign in to continue shopping", lv: "Piesakieties, lai turpinātu iepirkties", ru: "Войдите, чтобы продолжить покупки" },
  joinToShop: { en: "Join us to start shopping", lv: "Pievienojieties mums, lai sāktu iepirkties", ru: "Присоединяйтесь, чтобы начать покупки" },
  enterEmail: { en: "Enter your email", lv: "Ievadiet savu e-pastu", ru: "Введите ваш email" },
  password: { en: "Password", lv: "Parole", ru: "Пароль" },
  enterPassword: { en: "Enter your password", lv: "Ievadiet savu paroli", ru: "Введите ваш пароль" },
  confirmPassword: { en: "Confirm Password", lv: "Apstipriniet paroli", ru: "Подтвердите пароль" },
  confirmYourPassword: { en: "Confirm your password", lv: "Apstipriniet savu paroli", ru: "Подтвердите ваш пароль" },
  signIn: { en: "Sign In", lv: "Pieteikties", ru: "Войти" },
  signUp: { en: "Sign Up", lv: "Reģistrēties", ru: "Зарегистрироваться" },
  signOut: { en: "Sign Out", lv: "Izrakstīties", ru: "Выйти" },
  dontHaveAccount: { en: "Don't have an account?", lv: "Nav konta?", ru: "Нет аккаунта?" },
  alreadyHaveAccount: { en: "Already have an account?", lv: "Jau ir konts?", ru: "Уже есть аккаунт?" },
  continueBrowsing: { en: "Continue browsing", lv: "Turpināt pārlūkošanu", ru: "Продолжить просмотр" },
  loginSuccess: { en: "Login successful!", lv: "Veiksmīga pieteikšanās!", ru: "Успешный вход!" },
  accountCreated: { en: "Account created successfully!", lv: "Konts veiksmīgi izveidots!", ru: "Аккаунт успешно создан!" },
  passwordsDoNotMatch: { en: "Passwords do not match", lv: "Paroles nesakrīt", ru: "Пароли не совпадают" },
  passwordTooShort: { en: "Password must be at least 6 characters", lv: "Parolei jābūt vismaz 6 rakstzīmēm", ru: "Пароль должен быть не менее 6 символов" },
  authError: { en: "Authentication error. Please try again.", lv: "Autentifikācijas kļūda. Lūdzu, mēģiniet vēlreiz.", ru: "Ошибка аутентификации. Попробуйте снова." },
  loginToCheckout: { en: "Please sign in to checkout", lv: "Lūdzu, piesakieties, lai apmaksātu", ru: "Пожалуйста, войдите для оформления заказа" },
  account: { en: "Account", lv: "Konts", ru: "Аккаунт" },
  
  // Profile
  profile: { en: "Profile", lv: "Profils", ru: "Профиль" },
  orders: { en: "Orders", lv: "Pasūtījumi", ru: "Заказы" },
  wishlist: { en: "Wishlist", lv: "Vēlmju saraksts", ru: "Список желаний" },
  personalInfo: { en: "Personal Information", lv: "Personīgā informācija", ru: "Личная информация" },
  phone: { en: "Phone", lv: "Telefons", ru: "Телефон" },
  shippingAddress: { en: "Shipping Address", lv: "Piegādes adrese", ru: "Адрес доставки" },
  address: { en: "Address", lv: "Adrese", ru: "Адрес" },
  city: { en: "City", lv: "Pilsēta", ru: "Город" },
  postalCode: { en: "Postal Code", lv: "Pasta indekss", ru: "Почтовый индекс" },
  country: { en: "Country", lv: "Valsts", ru: "Страна" },
  saveChanges: { en: "Save Changes", lv: "Saglabāt izmaiņas", ru: "Сохранить изменения" },
  orderHistory: { en: "Order History", lv: "Pasūtījumu vēsture", ru: "История заказов" },
  noOrdersYet: { en: "You haven't placed any orders yet.", lv: "Jūs vēl neesat veicis nevienu pasūtījumu.", ru: "Вы еще не сделали ни одного заказа." },
  startShopping: { en: "Start Shopping", lv: "Sākt iepirkties", ru: "Начать покупки" },
  order: { en: "Order", lv: "Pasūtījums", ru: "Заказ" },
  myWishlist: { en: "My Wishlist", lv: "Mans vēlmju saraksts", ru: "Мой список желаний" },
  wishlistEmpty: { en: "Your wishlist is empty.", lv: "Jūsu vēlmju saraksts ir tukšs.", ru: "Ваш список желаний пуст." },
  itemsInWishlist: { en: "items in wishlist", lv: "preces vēlmju sarakstā", ru: "товаров в списке желаний" },
  viewProducts: { en: "View Products", lv: "Skatīt produktus", ru: "Смотреть товары" },
  addToWishlist: { en: "Add to Wishlist", lv: "Pievienot vēlmju sarakstam", ru: "В список желаний" },
  removeFromWishlist: { en: "Remove from Wishlist", lv: "Noņemt no vēlmju saraksta", ru: "Удалить из списка желаний" },
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
