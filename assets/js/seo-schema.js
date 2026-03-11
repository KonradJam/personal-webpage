const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Grafika, Frontend i Automatyzacja - Konrad Jam",
  "url": "https://konradjam.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kalisz",
    "addressRegion": "Wielkopolskie",
    "addressCountry": "PL"
  },
  "areaServed": [
    {"@type": "City", "name": "Kalisz"},
    {"@type": "Country", "name": "Poland"}
  ],
  "knowsAbout": ["DTP", "Frontend", "Python", "n8n", "Automatyzacja", "Grafika komputerowa"],
  "description": "Ekspert z 15-letnim stażem. Łączę grafikę komputerową i precyzję DTP z nowoczesnym frontendem oraz automatyzacją (Python, n8n). Zdalnie i w Kaliszu.",
  "sameAs": [
    "https://www.linkedin.com/in/konradjam",
    "https://github.com/konradjam"
  ]    
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData); 

document.head.appendChild(script);
