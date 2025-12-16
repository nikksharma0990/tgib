import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const ContactSection = () => {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=TGIB+The+Grand+Indian+Buffet+Vaishali+Nagar+Jaipur', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-premium mb-4">Visit Us</p>
          <h2 className="heading-section text-foreground mb-4">
            Location & <span className="text-primary">Hours</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px]"
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
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Address
                  </h3>
                  <p className="text-muted-foreground">
                    TGIB - The Grand Indian Buffet<br />
                    4th Floor, D-241/245, Amrapali Marg<br />
                    Hanuman Nagar, Vaishali Nagar<br />
                    Jaipur, Rajasthan 302021
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Opening Hours
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p><span className="text-foreground font-medium">Lunch:</span> 12:30 PM – 3:30 PM</p>
                    <p><span className="text-foreground font-medium">Dinner:</span> 7:00 PM – 11:00 PM</p>
                    <p className="text-sm text-primary">Open Daily</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDirections}
                className="btn-primary flex-1 justify-center"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </button>
              <button
                onClick={handleCall}
                className="btn-secondary flex-1 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call Restaurant
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
