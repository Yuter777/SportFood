# SportFood — Landing Page

Toshkentdagi sport ozuqasi do'koni uchun professional landing page.
Texnologiya: **Next.js 14 (App Router) + Tailwind CSS**. Ikki til: **O'zbek + Rus**.

---

## 🚀 Tez ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda oching: http://localhost:3000

Build qilish:

```bash
npm run build
npm start
```

---

## ✏️ Ma'lumotlarni o'zgartirish (eng muhim!)

Barcha matn, telefon, havolalar va influencerlar bitta faylda:

### `lib/content.js`

Shu faylda quyidagilarni o'zgartiring:

1. **Telefon raqam** — `STORE.phone` va `STORE.phoneHref`
   ```js
   phone: "+998 90 123 45 67",     // ko'rinadigan
   phoneHref: "+998931245222",      // bosilganda (bo'shliqsiz)
   ```

2. **Telegram** — `STORE.telegram`
   ```js
   telegram: "https://t.me/sizning_username",
   ```

3. **Instagram va Yandex Maps** — allaqachon to'g'ri qo'yilgan.

4. **Influencerlar** — `INFLUENCERS.people` ro'yxati.
   Yangi odam qo'shish yoki o'chirish shu yerda.

---

## 🖼 Influencer rasmlari

Mashhur insonlar rasmlarini `public/influencers/` papkasiga joylang.

Fayl nomi **handle** bilan bir xil bo'lishi kerak (`.jpg`):

```
public/influencers/shoxijahon_ahmadjonov.jpg
public/influencers/jasur__sattorov.jpg
public/influencers/ali_fitt.jpg
...
```

> Rasm bo'lmasa — avtomatik ravishda ism bosh harflari ko'rsatiladi (xato chiqmaydi).

Rasm o'lchami: kvadrat (masalan 400×400px), 200KB dan kichik bo'lsa yaxshi.

---

## 🎨 OG rasm (ijtimoiy tarmoqlarda ulashish uchun)

`public/og-image.jpg` faylini qo'shing (1200×630px).
Bu Telegram/Instagram/Facebook'da havola ulashganda ko'rinadi.

Favicon: `public/favicon.ico` va `public/apple-touch-icon.png`.

---

## 🌐 Internetga joylash (Deploy) — Vercel (bepul, tavsiya etiladi)

1. Loyihani GitHub'ga yuklang.
2. https://vercel.com saytiga kiring (GitHub bilan).
3. "New Project" → loyihani tanlang → "Deploy".
4. Bir necha daqiqada sayt tayyor: `https://sportfood.vercel.app`

### Domen ulash (sportfood.uz)

Vercel'da: Project → Settings → Domains → domeningizni qo'shing.

So'ng quyidagi 3 faylda `https://sportfood.uz` ni o'z domeningizga o'zgartiring:
- `app/layout.js` (`SITE_URL`)
- `app/sitemap.js`
- `app/robots.js`

---

## 🔍 SEO (Google'da chiqishi uchun)

Sayt SEO uchun to'liq tayyor:
- ✅ Meta sarlavha, tavsif, kalit so'zlar (O'zbek + Rus)
- ✅ Open Graph (ijtimoiy tarmoqlar uchun)
- ✅ JSON-LD structured data (do'kon, manzil, ish vaqti)
- ✅ sitemap.xml va robots.txt
- ✅ Server-side rendering (matnni Google ko'radi)

### Domen ulagandan keyin:

1. **Google Search Console** (https://search.google.com/search-console) — saytni qo'shing va `sitemap.xml` ni yuboring.
2. **Yandex Webmaster** (https://webmaster.yandex.uz) — O'zbekistonda Yandex muhim.
3. **Google Business Profile** — do'konni xaritaga qo'shing (lokal qidiruv uchun).

> Bir necha hafta ichida "sport ozuqasi Toshkent" kabi so'rovlarda chiqa boshlaydi.

---

## 📂 Loyiha tuzilishi

```
sportfood/
├── app/
│   ├── layout.js       # SEO metadata, JSON-LD, shriftlar
│   ├── page.js         # Asosiy sahifa
│   ├── globals.css     # Stillar
│   ├── sitemap.js      # Google sitemap
│   └── robots.js       # robots.txt
├── components/         # Barcha bo'limlar (Hero, Products, ...)
├── lib/
│   └── content.js      # ⭐ BARCHA MATN VA MA'LUMOTLAR
└── public/
    ├── influencers/    # Mashhur insonlar rasmlari
    └── og-image.jpg    # Ulashish rasmi
```

---

## 📞 Bo'limlar

1. **Hero** — bosh ekran, asosiy chaqiruv
2. **Products** — mahsulot turlari (protein, gainer, kreatin...)
3. **Advice** — "Biz nima bilan farq qilamiz" (maslahat berish)
4. **Influencers** — mashhur mijozlar (ishonch)
5. **Location** — Yandex xarita
6. **Contact** — telefon, telegram, instagram + ish vaqti
7. **Footer** — pastki qism

---

Savol bo'lsa, `lib/content.js` ni o'zgartiring — qolgani avtomatik yangilanadi.
# SportFood
