import { motion } from 'framer-motion';
import { MessageCircle, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to reserve a table at TGIB', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="TGIB Restaurant Ambience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/60 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-background/70 mb-8"
          >
            Pure Vegetarian • Vaishali Nagar, Jaipur
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-background mb-8 leading-[1.05]"
          >
            The Grand
            <br />
            Indian Buffet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-background/80 max-w-xl mx-auto mb-12 font-light"
          >
            Authentic flavors, unlimited indulgence, 
            and an experience crafted for those who appreciate the finer things.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#menu" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-medium rounded-full transition-all duration-300 hover:bg-background/90"
            >
              Explore Menu
            </a>
            <button 
              onClick={handleWhatsApp} 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-background/30 text-background font-medium rounded-full transition-all duration-300 hover:bg-background/10"
            >
              <MessageCircle className="w-5 h-5" />
              Reserve Table
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-background/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
