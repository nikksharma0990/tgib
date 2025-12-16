import { motion } from 'framer-motion';
import { Clock, UtensilsCrossed } from 'lucide-react';
import foodThali from '@/assets/food-thali.jpg';
import foodBuffet from '@/assets/food-buffet.jpg';

const menuItems = [
  {
    title: 'Premium Dinner Buffet',
    price: '₹599',
    priceNote: 'per person + taxes',
    timing: '7:00 PM - 11:00 PM',
    description: 'Experience our signature dinner spread with 40+ live counters, starters, main course, desserts & beverages.',
    image: foodThali,
    highlights: ['Live Counters', 'Premium Desserts', 'Unlimited Beverages'],
  },
  {
    title: 'Executive Lunch Buffet',
    price: '₹499',
    priceNote: 'per person + taxes',
    timing: '12:30 PM - 3:30 PM',
    description: 'Perfect for business lunches and mid-day indulgence with our curated selection of dishes.',
    image: foodBuffet,
    highlights: ['Quick Service', 'Business Friendly', 'Fresh Preparations'],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-premium mb-4">Our Menu</p>
          <h2 className="heading-section text-foreground mb-4">
            Buffet <span className="text-primary">Highlights</span>
          </h2>
          <p className="subheading max-w-2xl mx-auto">
            Unlimited culinary delights crafted by our expert chefs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-premium overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <p className="text-3xl font-display font-bold text-primary">
                      {item.price}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.priceNote}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-foreground/80 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4" />
                    {item.timing}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-secondary inline-flex"
          >
            <UtensilsCrossed className="w-5 h-5" />
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
