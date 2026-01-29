import Script from 'next/script'

interface JsonLdProps {
  locale: string
}

export default function JsonLd({ locale }: JsonLdProps) {
  const isArabic = locale === 'ar'

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://transformerlabs.io/#organization',
    name: 'Transformer Labs',
    alternateName: 'TransformerLabs',
    url: 'https://transformerlabs.io',
    logo: {
      '@type': 'ImageObject',
      url: 'https://transformerlabs.io/Logo_only_Transparent.svg',
      width: 512,
      height: 512
    },
    description: isArabic
      ? 'شركة تطوير برمجيات متخصصة في حلول الذكاء الاصطناعي للشركات حول العالم'
      : 'Software development company specializing in AI solutions for businesses worldwide',
    foundingDate: '2023',
    founder: {
      '@type': 'Person',
      name: 'Mohammad Othman',
      url: 'https://MohammadOthman.com'
    },
    email: 'Mo@MohammadOthman.com',
    sameAs: [
      'https://www.linkedin.com/company/transformer-labs'
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Aberdeen',
        addressRegion: 'Scotland',
        addressCountry: 'GB'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Nablus',
        addressCountry: 'PS'
      }
    ],
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Palestine' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'United States' }
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Chatbot Development',
      'Data Analytics',
      'Workflow Automation',
      'Custom Software Development'
    ]
  }

  // LocalBusiness Schema for Aberdeen Office
  const aberdeenOfficeSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://transformerlabs.io/#aberdeen-office',
    name: 'Transformer Labs - Scotland Office',
    description: isArabic
      ? 'مكتب ترانسفورمر لابز في اسكتلندا - خدمات تطوير الذكاء الاصطناعي'
      : 'Transformer Labs Scotland Office - AI Development Services',
    url: 'https://transformerlabs.io',
    email: 'Mo@MohammadOthman.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Aberdeen',
      addressRegion: 'Scotland',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 57.1497,
      longitude: -2.0943
    },
    parentOrganization: {
      '@id': 'https://transformerlabs.io/#organization'
    }
  }

  // LocalBusiness Schema for Nablus Office
  const nablusOfficeSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://transformerlabs.io/#nablus-office',
    name: isArabic ? 'ترانسفورمر لابز - مكتب فلسطين' : 'Transformer Labs - Palestine Office',
    description: isArabic
      ? 'مكتب ترانسفورمر لابز في فلسطين - خدمات تطوير الذكاء الاصطناعي'
      : 'Transformer Labs Palestine Office - AI Development Services',
    url: 'https://transformerlabs.io',
    email: 'Mo@MohammadOthman.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nablus',
      addressCountry: 'PS'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.2211,
      longitude: 35.2544
    },
    parentOrganization: {
      '@id': 'https://transformerlabs.io/#organization'
    }
  }

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://transformerlabs.io/#website',
    url: 'https://transformerlabs.io',
    name: 'Transformer Labs',
    description: isArabic
      ? 'حلول برمجية ومواقع إلكترونية مدعومة بالذكاء الاصطناعي'
      : 'AI-powered software and website solutions',
    publisher: {
      '@id': 'https://transformerlabs.io/#organization'
    },
    inLanguage: ['en', 'ar'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://transformerlabs.io/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }

  // Service Schema
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://transformerlabs.io/#services',
    name: isArabic ? 'خدماتنا' : 'Our Services',
    itemListElement: [
      {
        '@type': 'Service',
        position: 1,
        name: isArabic ? 'تطوير روبوتات المحادثة الذكية' : 'AI Chatbot Development',
        description: isArabic
          ? 'روبوتات محادثة ذكية تفهم وتستجيب بشكل طبيعي'
          : 'Intelligent chatbots that understand and respond naturally',
        provider: { '@id': 'https://transformerlabs.io/#organization' },
        serviceType: 'AI Development'
      },
      {
        '@type': 'Service',
        position: 2,
        name: isArabic ? 'تحليل البيانات' : 'Data Analytics',
        description: isArabic
          ? 'استخراج رؤى قابلة للتنفيذ من بياناتك'
          : 'Extract actionable insights from your data',
        provider: { '@id': 'https://transformerlabs.io/#organization' },
        serviceType: 'Data Analysis'
      },
      {
        '@type': 'Service',
        position: 3,
        name: isArabic ? 'أتمتة سير العمل' : 'Workflow Automation',
        description: isArabic
          ? 'أتمتة المهام المتكررة وتحسين الكفاءة'
          : 'Automate repetitive tasks and improve efficiency',
        provider: { '@id': 'https://transformerlabs.io/#organization' },
        serviceType: 'Business Automation'
      },
      {
        '@type': 'Service',
        position: 4,
        name: isArabic ? 'حلول الذكاء الاصطناعي المخصصة' : 'Custom AI Solutions',
        description: isArabic
          ? 'حلول ذكاء اصطناعي مصممة خصيصاً لاحتياجات عملك'
          : 'AI solutions tailored to your specific business needs',
        provider: { '@id': 'https://transformerlabs.io/#organization' },
        serviceType: 'Custom Software Development'
      },
      {
        '@type': 'Service',
        position: 5,
        name: isArabic ? 'تطوير المواقع الإلكترونية' : 'Website Development',
        description: isArabic
          ? 'مواقع إلكترونية حديثة وسريعة ومتوافقة مع الجوال'
          : 'Modern, fast, and mobile-friendly websites',
        provider: { '@id': 'https://transformerlabs.io/#organization' },
        serviceType: 'Web Development'
      },
      {
        '@type': 'Service',
        position: 6,
        name: isArabic ? 'استشارات الذكاء الاصطناعي' : 'AI Consulting',
        description: isArabic
          ? 'استشارات استراتيجية لتبني الذكاء الاصطناعي في عملك'
          : 'Strategic consulting for AI adoption in your business',
        provider: { '@id': 'https://transformerlabs.io/#organization' },
        serviceType: 'Consulting'
      }
    ]
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://transformerlabs.io/#breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isArabic ? 'الرئيسية' : 'Home',
        item: `https://transformerlabs.io/${locale}`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aberdeenOfficeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nablusOfficeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
