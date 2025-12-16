import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyTGIB from '@/components/WhyTGIB';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TGIB - The Grand Indian Buffet | Pure Veg Restaurant Jaipur</title>
        <meta 
          name="description" 
          content="Experience Jaipur's finest pure veg buffet at TGIB. Authentic Indian cuisine, premium ambience, unlimited buffet with 40+ dishes. Located in Vaishali Nagar." 
        />
        <meta name="keywords" content="TGIB, The Grand Indian Buffet, pure veg restaurant Jaipur, vegetarian buffet, Indian food, Vaishali Nagar restaurant" />
        <link rel="canonical" href="https://thegrandindianbuffet.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="TGIB - The Grand Indian Buffet | Pure Veg Restaurant Jaipur" />
        <meta property="og:description" content="Experience Jaipur's finest pure veg buffet. Authentic Indian cuisine, premium ambience, unlimited indulgence." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "TGIB - The Grand Indian Buffet",
            "image": "https://thegrandindianbuffet.com/og-image.jpg",
            "servesCuisine": "Indian",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4th Floor, D-241/245, Amrapali Marg, Hanuman Nagar",
              "addressLocality": "Vaishali Nagar",
              "addressRegion": "Jaipur",
              "postalCode": "302021",
              "addressCountry": "IN"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.3",
              "reviewCount": "4500"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "12:30",
                "closes": "15:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "19:00",
                "closes": "23:00"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <WhyTGIB />
          <MenuSection />
          <GallerySection />
          <ReviewsSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
