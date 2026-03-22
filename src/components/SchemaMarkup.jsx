export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: "עדי שלו - רפואה סינית",
    alternateName: "Adi Shalev Chinese Medicine",
    description:
      "קליניקה לרפואה סינית בראשון לציון. דיקור סיני, שיאצו, כוסות רוח וצמחי מרפא סיניים. עדי שלו - מטפל מוסמך עם 8+ שנות ניסיון.",
    url: "https://adishalev.co.il",
    telephone: "+972-52-802-9031",
    image: "https://adishalev.co.il/og-image.jpg",
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
      name: "עדי שלו",
      alternateName: "Adi Shalev",
      jobTitle: "מטפל ברפואה סינית",
      url: "https://adishalev.co.il",
      sameAs: [
        "https://www.facebook.com/adi.zablodovitz.Shalev",
        "https://maps.google.com/?cid=2830836878633217880",
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "26",
      reviewCount: "16",
    },
    sameAs: [
      "https://wa.me/972528029031",
      "https://www.facebook.com/adi.zablodovitz.Shalev",
      "https://maps.google.com/?cid=2830836878633217880",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "האם דיקור סיני כואב?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "בדרך כלל לא. המחטים דקות מאוד ורוב המטופלים מרגישים תחושה קלה של עקצוץ או כבדות - אבל לא כאב. רבים אפילו נרדמים במהלך הטיפול.",
        },
      },
      {
        "@type": "Question",
        name: "כמה טיפולים צריך?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "זה תלוי בבעיה ובמטופל. מצבים חריפים (כמו כאב גב חד) יכולים להשתפר תוך 3–5 טיפולים. מצבים כרוניים בדרך כלל דורשים סדרה ארוכה יותר. בטיפול הראשון נקבע יחד תוכנית מותאמת.",
        },
      },
      {
        "@type": "Question",
        name: "מה ההבדל בין דיקור לשיאצו?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "דיקור סיני משתמש במחטים דקות לאורך נקודות על מרידיאנים בגוף. שיאצו הוא עיסוי לחץ ידני באותן נקודות - ללא מחטים. שתי השיטות מבוססות על אותם עקרונות של רפואה סינית.",
        },
      },
      {
        "@type": "Question",
        name: "מה לצפות בטיפול הראשון?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "הטיפול הראשון כולל שיחה מקיפה על הבעיה, ההיסטוריה הרפואית ואורח החיים. לאחר מכן הטיפול עצמו - כ-60 דקות, לפעמים טיפה יותר. מומלץ להגיע לא רעבים ולא מלאים.",
        },
      },
      {
        "@type": "Question",
        name: "האם הטיפול מתאים לי אם אני לוקח תרופות?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ברוב המקרים כן. רפואה סינית יכולה לפעול בצוותא עם טיפול קונבנציונלי. חשוב לציין את כל התרופות בשיחת המיון הראשונה.",
        },
      },
      {
        "@type": "Question",
        name: "איפה הקליניקה?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "הקליניקה ממוקמת במערב ראשון לציון. לכתובת המדויקת ולתיאום הגעה - שלחו הודעת WhatsApp.",
        },
      },
    ],
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
      name: "עדי שלו",
      alternateName: "Adi Shalev",
      url: "https://adishalev.co.il",
      sameAs: [
        "https://www.facebook.com/adi.zablodovitz.Shalev",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "עדי שלו - רפואה סינית",
      url: "https://adishalev.co.il",
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
