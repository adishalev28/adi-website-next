export default function sitemap() {
  const baseUrl = "https://adishalev.co.il";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // שירותים
    {
      url: `${baseUrl}/dikur-sini`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shiatsu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cupping`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/herbs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // בלוג
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/what-is-acupuncture`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/back-pain`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/faq-complete`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // דפים משפטיים
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
