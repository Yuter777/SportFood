import { STORE } from "@/lib/content";
import "./globals.css";

const SITE_URL = "https://sportfood.uz"; // <-- domen ulanganda yangilang

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "SportFood — Sport ozuqasi do'koni Toshkent | Protein, Kreatin, BCAA",
    template: "%s | SportFood",
  },
  description:
    "SportFood — Toshkentdagi sport ozuqasi do'koni. Protein, gainer, kreatin, BCAA, vitaminlar. 100% original. Sotamiz va bepul maslahat beramiz: nima kerak, qancha va nima zarar berishi mumkin. Спортивное питание в Ташкенте.",
  keywords: [
    "sport ozuqasi",
    "sport ozuqasi Toshkent",
    "protein Toshkent",
    "gainer",
    "kreatin",
    "BCAA",
    "sport pitaniya Tashkent",
    "спортивное питание Ташкент",
    "протеин Ташкент",
    "sportfood",
    "sportfood uz",
    "sport ovqatlanish do'koni",
    "bodybuilding ozuqa",
    "fitness ozuqasi",
  ],
  authors: [{ name: "SportFood" }],
  creator: "SportFood",
  publisher: "SportFood",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU"],
    url: SITE_URL,
    siteName: "SportFood",
    title:
      "SportFood — Sport ozuqasi do'koni Toshkent | Protein, Kreatin, BCAA",
    description:
      "100% original sport ozuqasi. Sotamiz va bepul maslahat beramiz. Toshkent.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SportFood — Sport ozuqasi do'koni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SportFood — Sport ozuqasi do'koni Toshkent",
    description:
      "100% original sport ozuqasi. Sotamiz va bepul maslahat beramiz.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "shopping",
};

export const viewport = {
  themeColor: "#0d0e12",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD: Google'ga do'kon haqida strukturali ma'lumot beradi.
// Bu "knowledge panel" va lokal qidiruvda chiqish uchun muhim.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "SportFood",
  description:
    "Sport ozuqasi do'koni — protein, gainer, kreatin, BCAA, vitaminlar. Sotish va bepul maslahat.",
  url: SITE_URL,
  telephone: STORE.phone,
  image: `${SITE_URL}/og-image.jpg`,
  "@id": SITE_URL,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tashkent",
    addressCountry: "UZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.304157,
    longitude: 69.234368,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "21:00",
  },
  sameAs: [STORE.instagram, STORE.telegram, STORE.yandexMaps],
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/images/SportFod.jpg" />
   
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
