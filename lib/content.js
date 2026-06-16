// Markaziy kontent fayli — barcha matn va ma'lumotlar shu yerda.
// Yangi mahsulot, influencer yoki matn qo'shish uchun shu faylni tahrirlang.

export const STORE = {
  name: "SportFood",
  tagline: {
    uz: "Sport ozuqasi do'koni — sotamiz va maslahat beramiz",
    ru: "Магазин спортивного питания — продаём и консультируем",
  },
  phone: "+998 93 124 52 22", // <-- haqiqiy raqamni qo'ying
  phoneHref: "+998931245222",
  telegram: "https://t.me/sportfooduz", // <-- haqiqiy telegram
  instagram: "https://www.instagram.com/sportfood.uz/",
  yandexMaps: "https://yandex.uz/maps/-/CPxgeXy6",
  address: {
    uz: "Toshkent shahri",
    ru: "город Ташкент",
  },
  hours: {
    uz: "Har kuni 10:00 – 21:00",
    ru: "Ежедневно 10:00 – 21:00",
  },
};

export const NAV = [
  { id: "products", uz: "Mahsulotlar", ru: "Продукты" },
  { id: "advice", uz: "Maslahat", ru: "Консультация" },
  { id: "trusted", uz: "Bizga ishonadilar", ru: "Нам доверяют" },
  { id: "location", uz: "Manzil", ru: "Адрес" },
  { id: "contact", uz: "Aloqa", ru: "Контакты" },
];

export const HERO = {
  eyebrow: {
    uz: "Sport ozuqasi do'koni",
    ru: "Магазин спортивного питания",
  },
  title: {
    uz: ["To'g'ri ozuqa —", "to'g'ri natija"],
    ru: ["Правильное питание —", "правильный результат"],
  },
  subtitle: {
    uz: "Har bir mahsulot ortida maslahat va mas'uliyat bor. Sizga kerakli mahsulotni tanlash, to'g'ri qabul qilish va salbiy oqibatlarning oldini olishda yordam beramiz. 100% original mahsulotlar.",
    ru: "За каждым продуктом стоят консультация и ответственность. Поможем выбрать нужный вам продукт, правильно его принимать и избежать негативных последствий. 100% оригинальной продукции.",
  },
  ctaPrimary: { uz: "Maslahat olish", ru: "Получить консультацию" },
  ctaSecondary: { uz: "Mahsulotlar", ru: "Продукты" },
  stats: [
    { value: "100%", uz: "Original mahsulot", ru: "Оригинал" },
    { value: "20+", uz: "Mashhur mijozlar", ru: "Известных клиентов" },
    { value: "24/7", uz: "Maslahat", ru: "Консультация" },
  ],
};

export const PRODUCTS = {
  heading: { uz: "Mahsulot turlari", ru: "Категории продукции" },
  sub: {
    uz: "Maqsadingizga mos ozuqani tanlaymiz",
    ru: "Подберём питание под вашу цель",
  },
  items: [
    {
      icon: "protein",
      uz: { name: "Protein", desc: "Mushak massasini oshirish va tiklanish uchun oqsil" },
      ru: { name: "Протеин", desc: "Белок для роста мышц и восстановления" },
    },
    {
      icon: "gainer",
      uz: { name: "Gainer", desc: "Vazn va energiya to'plash uchun" },
      ru: { name: "Гейнер", desc: "Для набора веса и энергии" },
    },
    {
      icon: "creatine",
      uz: { name: "Kreatin", desc: "Kuch va chidamlilikni oshiradi" },
      ru: { name: "Креатин", desc: "Повышает силу и выносливость" },
    },
    {
      icon: "bcaa",
      uz: { name: "BCAA / Aminokislotalar", desc: "Mashqdan keyin tez tiklanish" },
      ru: { name: "BCAA / Аминокислоты", desc: "Быстрое восстановление после тренировки" },
    },
    {
      icon: "vitamins",
      uz: { name: "Vitamin va minerallar", desc: "Organizm uchun kundalik qo'llab-quvvatlash" },
      ru: { name: "Витамины и минералы", desc: "Ежедневная поддержка организма" },
    },
    {
      icon: "fatburner",
      uz: { name: "Yog' yoquvchilar", desc: "Vazn tashlash va relyef uchun" },
      ru: { name: "Жиросжигатели", desc: "Для похудения и рельефа" },
    },
    {
      icon: "preworkout",
      uz: { name: "Pre-workout", desc: "Mashqdan oldin energiya va fokus" },
      ru: { name: "Предтрены", desc: "Энергия и фокус перед тренировкой" },
    },
    {
      icon: "snack",
      uz: { name: "Protein batonlar", desc: "Foydali va qulay gazak" },
      ru: { name: "Протеиновые батончики", desc: "Полезный и удобный перекус" },
    },
  ],
};

export const ADVICE = {
  heading: {
    uz: "Biz nima bilan farq qilamiz",
    ru: "Чем мы отличаемся",
  },
  sub: {
    uz: "Do'kon emas, mutaxassis. Sotishdan oldin tushuntiramiz.",
    ru: "Не просто магазин, а эксперт. Сначала объясняем, потом продаём.",
  },
  steps: [
    {
      uz: { title: "Sizni eshitamiz", desc: "Maqsadingizni, vazningizni va sport turini aniqlaymiz." },
      ru: { title: "Слушаем вас", desc: "Определяем вашу цель, вес и вид спорта." },
    },
    {
      uz: { title: "Nima kerakligini aytamiz", desc: "Aynan sizga mos ozuqani tanlaymiz — ortiqchasini emas." },
      ru: { title: "Говорим, что нужно", desc: "Подбираем именно то питание, что подходит вам — без лишнего." },
    },
    {
      uz: { title: "Dozani tushuntiramiz", desc: "Qancha, qachon va qanday qabul qilishni o'rgatamiz." },
      ru: { title: "Объясняем дозировку", desc: "Сколько, когда и как принимать." },
    },
    {
      uz: { title: "Zararini ogohlantiramiz", desc: "Sizning sog'lig'ingiz uchun nima xavfli — ochiq aytamiz." },
      ru: { title: "Предупреждаем о вреде", desc: "Что может навредить вашему здоровью — говорим честно." },
    },
  ],
};

// Reklama qilgan / mahsulotni ishlatgan mashhur insonlar.
// Rasmlarni public/influencers/ ichiga joylang (handle.jpg ko'rinishida).
export const INFLUENCERS = {
  heading: { uz: "Bizga ishonch bildirganlar", ru: "Они нам доверяли." },
  sub: {
    uz: "O'zbekistonning mashhur sportchilari va bloggerlari mahsulotlarimizni tanlaydi",
    ru: "Известные спортсмены и блогеры Узбекистана выбирают нашу продукцию",
  },
  people: [
    {
      handle: "shoxijahon_ahmadjonov",
      name: "Shoxijahon Ahmadjonov",
      img: "sa.jpg",
      role: { uz: "Dyusdoshchi · Sportchi", ru: "Спортсмен" },
      url: "https://www.instagram.com/shoxijahon_ahmadjonov/",
    },
    {
      handle: "jasur__sattorov",
      name: "Jasur Sattorov",
      img: "js.jpg",
      role: { uz: "Sportchi", ru: "Спортсмен" },
      url: "https://www.instagram.com/jasur__sattorov/",
    },
    {
      handle: "iso_universe",
      name: "ISO",
      img: "fit.jpg",
      role: { uz: "Bloger", ru: "Блогер" },
      url: "https://www.instagram.com/iso_universe/",
    },
    {
      handle: "sh_saydaliyev",
      name: "Sh. Saydaliyev",
      img: "ss.jpg",
      role: { uz: "Sportchi", ru: "Спортсмен" },
      url: "https://www.instagram.com/sh_saydaliyev/",
    },
    {
      handle: "bakha.sayfullaev",
      name: "Bakha Sayfullaev",
      img: "bs.jpg",
      role: { uz: "Sportchi", ru: "Спортсмен" },
      url: "https://www.instagram.com/bakha.sayfullaev/",
    },
    {
      handle: "ali_fitt",
      name: "Ali Fitt",
      img: "ali.jpg",
      role: { uz: "Fitnes murabbiy", ru: "Фитнес-тренер" },
      url: "https://www.instagram.com/ali_fitt/",
    },
  ],
};

export const CONTACT = {
  heading: { uz: "Biz bilan bog'laning", ru: "Свяжитесь с нами" },
  sub: {
    uz: "Savol bormi? Maslahat bepul. Yozing yoki qo'ng'iroq qiling.",
    ru: "Есть вопрос? Консультация бесплатна. Напишите или позвоните.",
  },
  phoneLabel: { uz: "Telefon", ru: "Телефон" },
  tgLabel: { uz: "Telegram", ru: "Телеграм" },
  igLabel: { uz: "Instagram", ru: "Инстаграм" },
  addressLabel: { uz: "Manzil", ru: "Адрес" },
  hoursLabel: { uz: "Ish vaqti", ru: "Время работы" },
  routeBtn: { uz: "Yo'l ko'rsatish", ru: "Построить маршрут" },
};

export const FOOTER = {
  rights: {
    uz: "Barcha huquqlar himoyalangan",
    ru: "Все права защищены",
  },
  madeWith: {
    uz: "Sport ozuqasi · Toshkent",
    ru: "Спортивное питание · Ташкент",
  },
};
