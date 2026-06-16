export default function sitemap() {
  const base = "https://sportfood.uz"; // <-- domen ulanganda yangilang
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
