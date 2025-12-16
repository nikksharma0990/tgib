import { motion } from 'framer-motion';
import { MessageCircle, UtensilsCrossed } from 'lucide-react';
import heroImage from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to reserve a table at TGIB', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="TGIB Restaurant Ambience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-premium mb-6"
          >
            Pure Veg • Vaishali Nagar, Jaipur
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display text-foreground mb-6"
          >
            Experience Jaipur's Finest{' '}
            <span className="text-primary">Pure Veg Buffet</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subheading max-w-2xl mx-auto mb-10"
          >
            Authentic Indian flavors, premium dining, unlimited indulgence. 
            Where tradition meets elegance in every bite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#menu" className="btn-secondary">
              <UtensilsCrossed className="w-5 h-5" />
              View Buffet Menu
            </a>
            <button onClick={handleWhatsApp} className="btn-primary">
              <MessageCircle className="w-5 h-5" />
              Reserve on WhatsApp
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border/30 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>100% Pure Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">4.3★</span>
              <span>4,500+ Google Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Open Daily</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
