import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=TGIB+The+Grand+Indian+Buffet+Vaishali+Nagar+Jaipur', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="label-premium mb-6">Visit Us</p>
            <h2 className="heading-section text-foreground mb-12">
              Find us in<br />Vaishali Nagar
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    4th Floor, D-241/245, Amrapali Marg<br />
                    Hanuman Nagar, Vaishali Nagar<br />
                    Jaipur, Rajasthan 302021
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-foreground mb-1">Hours</p>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Lunch: 12:30 PM – 3:30 PM</p>
                    <p>Dinner: 7:00 PM – 11:00 PM</p>
                    <p className="text-foreground">Open Daily</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={handleDirections}
                className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all duration-300"
              >
                Get Directions
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8!2d75.7!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVaishali%20Nagar%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TGIB Location"
              className="grayscale"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
