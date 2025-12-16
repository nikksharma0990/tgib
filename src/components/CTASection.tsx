import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const CTASection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to reserve a table at TGIB', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <section className="section-padding bg-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="label-premium mb-4">Ready to Dine?</p>
          <h2 className="heading-section text-foreground mb-6">
            Reserve Your Table <span className="text-primary">Today</span>
          </h2>
          <p className="subheading mb-10">
            Experience the finest pure veg buffet in Jaipur. Book your table now 
            and let us create an unforgettable dining experience for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className="btn-primary text-lg px-10 py-5"
            >
              <MessageCircle className="w-6 h-6" />
              Reserve on WhatsApp
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCall}
              className="btn-secondary text-lg px-10 py-5"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
