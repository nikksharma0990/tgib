import { motion } from 'framer-motion';
import { Leaf, Infinity, Sparkles, Users } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '100% Pure Veg',
    description: 'Authentic vegetarian cuisine prepared with fresh ingredients and traditional recipes.',
  },
  {
    icon: Infinity,
    title: 'Unlimited Buffet',
    description: 'Indulge without limits. Enjoy unlimited servings of our diverse menu offerings.',
  },
  {
    icon: Sparkles,
    title: 'Premium Ambience',
    description: 'Elegant interiors designed for memorable dining experiences and celebrations.',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    description: 'Spacious seating perfect for family gatherings, groups, and special occasions.',
  },
];

const WhyTGIB = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-premium mb-4">Why Choose Us</p>
          <h2 className="heading-section text-foreground">
            The TGIB <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTGIB;
