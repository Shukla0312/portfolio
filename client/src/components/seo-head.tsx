import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEOHead({
  title = "Rahul Shukla - QA Engineer",
  description = "Senior QA Engineer with 10+ years of experience in software testing, quality assurance, and test automation. Specialized in UI/API automation using Cypress, Selenium, and Playwright.",
  keywords = "QA Engineer, Software Testing, Quality Assurance, Test Automation, Rahul Shukla, Cypress, Selenium, Playwright",
  image = "/favicon.svg",
  url = "https://shukla0312.github.io/portfolio",
  type = "website",
}: SEOHeadProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rahul Shukla",
    "jobTitle": "QA Engineer",
    "description": description,
    "url": url,
    "image": image,
    "sameAs": [
      "https://linkedin.com/in/rahul-shukla",
      "https://github.com/shukla0312",
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "Software Testing",
      "Quality Assurance", 
      "Test Automation",
      "Cypress",
      "Selenium",
      "Playwright",
      "API Testing",
      "UI Testing"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "India"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Rahul Shukla" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Rahul Shukla Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@rahulshukla" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
} 