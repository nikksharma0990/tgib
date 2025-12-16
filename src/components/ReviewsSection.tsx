import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Nikhil Pareek',
    rating: 5,
    text: 'The best pure veg buffet in Jaipur! Amazing variety and the paneer dishes are to die for. Perfect for family celebrations.',
    date: 'December 2024',
  },
  {
    name: 'Kajal Joshi',
    rating: 5,
    text: 'Wonderful ambience and excellent food quality. The live counters are a treat. Highly recommend the dinner buffet.',
    date: 'November 2024',
  },
  {
    name: 'Deepak Sharma',
    rating: 5,
    text: 'Celebrated my anniversary here. The staff was courteous and the dessert selection was incredible. Will visit again!',
    date: 'November 2024',
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-premium mb-4">Testimonials</p>
          <h2 className="heading-section text-foreground mb-6">
            What Our <span className="text-primary">Guests Say</span>
          </h2>
          
          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-card border border-border rounded-full px-6 py-3"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? 'text-primary fill-primary' : 'text-primary/50 fill-primary/50'}`}
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-display font-bold text-foreground">4.3</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4,500+</span> Google Reviews
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-premium p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-primary fill-primary' : 'text-muted'}`}
                  />
                ))}
              </div>

              <p className="text-foreground/90 mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
