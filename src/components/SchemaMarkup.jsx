export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": "https://adishalev.co.il/#business",
    name: "עדי שלו - רפואה סינית",
    alternateName: "Adi Shalev Chinese Medicine",
    description:
      "קליניקה לרפואה סינית בראשון לציון. דיקור סיני, שיאצו, כוסות רוח וצמחי מרפא סיניים. עדי שלו - מטפל מוסמך עם 8+ שנות ניסיון.",
    url: "https://adishalev.co.il",
    telephone: "+972-52-802-9031",
    logo: "https://adishalev.co.il/LOGO1.png",
    image: [
      "https://adishalev.co.il/clinic-room.jpg",
      "https://adishalev.co.il/adi-portrait.jpg",
      "https://adishalev.co.il/adi-acupuncture.jpg",
      "https://adishalev.co.il/adi-shiatsu.jpg",
    ],
    hasMap: "https://maps.google.com/?cid=2830836878633217880",
    knowsAbout: [
      "רפואה סינית",
      "דיקור סיני",
      "שיאצו",
      "כוסות רוח",
      "צמחי מרפא סיניים",
      "שיטת דונג",
      "שיטת ד״ר טאן",
      "טיפול בכאבי גב",
      "טיפול במיגרנות",
      "טיפול בחרדה",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "ראשון לציון",
      addressRegion: "מחוז המרכז",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.9642,
      longitude: 34.7499,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    priceRange: "₪₪",
    currenciesAccepted: "ILS",
    paymentAccepted: "Cash, Credit Card, Bit",
    areaServed: {
      "@type": "City",
      name: "ראשון לציון",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "שירותי רפואה סינית",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "דיקור סיני",
            alternateName: "Acupuncture",
            url: "https://adishalev.co.il/dikur-sini",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "שיאצו",
            alternateName: "Shiatsu",
            url: "https://adishalev.co.il/shiatsu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "כוסות רוח",
            alternateName: "Cupping Therapy",
            url: "https://adishalev.co.il/cupping",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "צמחי מרפא סיניים",
            alternateName: "Chinese Herbal Medicine",
            url: "https://adishalev.co.il/herbs",
          },
        },
      ],
    },
    founder: {
      "@type": "Person",
      "@id": "https://adishalev.co.il/#adi",
      name: "עדי שלו",
      alternateName: "Adi Shalev",
      jobTitle: "מטפל ברפואה סינית",
      url: "https://adishalev.co.il",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "מכללת רידמן לרפואה משלימה",
      },
      affiliation: {
        "@type": "MedicalOrganization",
        name: "מכבי טבעי",
        description: "מטפל בדיקור סיני ושיאצו במסגרת מכבי טבעי מעל 6 שנים",
      },
      knowsAbout: [
        "דיקור סיני",
        "שיאצו",
        "כוסות רוח",
        "צמחי מרפא סיניים",
        "שיטת ד\"ר טאן",
        "שיטת מאסטר דונג",
      ],
      sameAs: [
        "https://www.facebook.com/adi.zablodovitz.Shalev",
        "https://maps.google.com/?cid=2830836878633217880",
        "https://www.linkedin.com/in/adi-shalev-chinese-medicine",
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "36",
      reviewCount: "36",
    },
    sameAs: [
      "https://wa.me/972528029031",
      "https://www.facebook.com/adi.zablodovitz.Shalev",
      "https://maps.google.com/?cid=2830836878633217880",
      "https://www.linkedin.com/in/adi-shalev-chinese-medicine",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const DEFAULT_FAQ_ITEMS = [
  {
    q: "האם דיקור סיני כואב?",
    a: "בדרך כלל לא. המחטים דקות מאוד ורוב המטופלים מרגישים תחושה קלה של עקצוץ או כבדות - אבל לא כאב. רבים אפילו נרדמים במהלך הטיפול.",
  },
  {
    q: "כמה טיפולים צריך?",
    a: "זה תלוי בבעיה ובמטופל. מצבים חריפים (כמו כאב גב חד) יכולים להשתפר תוך 3–5 טיפולים. מצבים כרוניים בדרך כלל דורשים סדרה ארוכה יותר. בטיפול הראשון נקבע יחד תוכנית מותאמת.",
  },
  {
    q: "מה ההבדל בין דיקור לשיאצו?",
    a: "דיקור סיני משתמש במחטים דקות לאורך נקודות על מרידיאנים בגוף. שיאצו הוא עיסוי לחץ ידני באותן נקודות - ללא מחטים. שתי השיטות מבוססות על אותם עקרונות של רפואה סינית.",
  },
  {
    q: "מה לצפות בטיפול הראשון?",
    a: "הטיפול הראשון כולל שיחה מקיפה על הבעיה, ההיסטוריה הרפואית ואורח החיים. לאחר מכן הטיפול עצמו - כ-60 דקות, לפעמים טיפה יותר. מומלץ להגיע לא רעבים ולא מלאים.",
  },
  {
    q: "האם הטיפול מתאים לי אם אני לוקח תרופות?",
    a: "ברוב המקרים כן. רפואה סינית יכולה לפעול בצוותא עם טיפול קונבנציונלי. חשוב לציין את כל התרופות בשיחת המיון הראשונה.",
  },
  {
    q: "איפה הקליניקה?",
    a: "הקליניקה ממוקמת במערב ראשון לציון. לכתובת המדויקת ולתיאום הגעה - שלחו הודעת WhatsApp.",
  },
];

export function FAQPageSchema({ items } = {}) {
  const faqItems = items && items.length ? items : DEFAULT_FAQ_ITEMS;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "עדי שלו - רפואה סינית",
    url: "https://adishalev.co.il",
    inLanguage: "he",
    publisher: {
      "@type": "Organization",
      name: "עדי שלו - רפואה סינית",
      url: "https://adishalev.co.il",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ title, description, url, datePublished, dateModified, image }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    image: image || "https://adishalev.co.il/og-image.jpg",
    author: {
      "@type": "Person",
      "@id": "https://adishalev.co.il/#adi",
      name: "עדי שלו",
      alternateName: "Adi Shalev",
      url: "https://adishalev.co.il",
      sameAs: [
        "https://www.facebook.com/adi.zablodovitz.Shalev",
        "https://www.linkedin.com/in/adi-shalev-chinese-medicine",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "עדי שלו - רפואה סינית",
      url: "https://adishalev.co.il",
      logo: {
        "@type": "ImageObject",
        url: "https://adishalev.co.il/LOGO1.png",
      },
    },
    inLanguage: "he",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MedicalServiceSchema({ name, alternateName, description, url }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: name,
    alternateName: alternateName,
    description: description,
    url: url,
    provider: {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": "https://adishalev.co.il/#business",
      name: "עדי שלו - רפואה סינית",
      url: "https://adishalev.co.il",
      telephone: "+972-52-802-9031",
      address: {
        "@type": "PostalAddress",
        addressLocality: "ראשון לציון",
        addressRegion: "מחוז המרכז",
        addressCountry: "IL",
      },
    },
    areaServed: [
      { "@type": "City", name: "ראשון לציון" },
      { "@type": "City", name: "חולון" },
      { "@type": "City", name: "בת ים" },
      { "@type": "City", name: "נס ציונה" },
      { "@type": "City", name: "רחובות" },
      { "@type": "City", name: "באר יעקב" },
    ],
    availableLanguage: ["he", "en"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HowToSchema({ name, description, steps, totalTime }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: name,
    description: description,
    totalTime: totalTime || "PT60M",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
    provider: {
      "@type": "LocalBusiness",
      name: "עדי שלו - רפואה סינית",
      url: "https://adishalev.co.il",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
