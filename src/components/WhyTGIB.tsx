import { motion } from 'framer-motion';
import { Leaf, Infinity, Gem, Users } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Pure Vegetarian',
    description: 'Fresh ingredients, traditional recipes, authentic taste.',
  },
  {
    icon: Infinity,
    title: 'Unlimited Buffet',
    description: 'Indulge without limits across 40+ curated dishes.',
  },
  {
    icon: Gem,
    title: 'Premium Experience',
    description: 'Elegant interiors designed for memorable moments.',
  },
  {
    icon: Users,
    title: 'Perfect for Groups',
    description: 'Ideal for celebrations, gatherings, and corporate events.',
  },
];

const WhyTGIB = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="label-premium mb-6">Why Choose Us</p>
          <h2 className="heading-section text-foreground">
            A dining experience<br />worth savoring
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-foreground/5 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
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
