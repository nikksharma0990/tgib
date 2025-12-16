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
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="label-premium mb-6">Ready?</p>
          <h2 className="heading-section text-foreground mb-8">
            Reserve your<br />table today
          </h2>
          <p className="subheading mb-12">
            Experience the finest pure veg buffet in Jaipur. 
            We look forward to hosting you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className="btn-primary"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCall}
              className="btn-secondary"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
