export default function robots() {
  const base = "https://sportfood.uz"; // <-- domen ulanganda yangilang
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
