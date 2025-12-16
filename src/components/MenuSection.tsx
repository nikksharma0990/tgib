import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import foodThali from '@/assets/food-thali.jpg';
import foodBuffet from '@/assets/food-buffet.jpg';

const menuItems = [
  {
    title: 'Dinner Buffet',
    price: '₹599',
    timing: '7:00 PM – 11:00 PM',
    description: '40+ live counters featuring starters, main course, breads, desserts & beverages.',
    image: foodThali,
  },
  {
    title: 'Lunch Buffet',
    price: '₹499',
    timing: '12:30 PM – 3:30 PM',
    description: 'A curated mid-day spread perfect for business lunches and family gatherings.',
    image: foodBuffet,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="label-premium mb-6">Our Menu</p>
          <h2 className="heading-section text-foreground">
            Crafted for<br />the discerning palate
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                  {item.title}
                </h3>
                <div className="text-right">
                  <p className="font-display text-2xl font-medium text-foreground">
                    {item.price}
                  </p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-3">
                {item.description}
              </p>

              <p className="text-sm text-muted-foreground">
                {item.timing}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all duration-300"
          >
            View full menu
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
