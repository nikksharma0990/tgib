import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Nikhil Pareek',
    rating: 5,
    text: 'The best pure veg buffet in Jaipur. Amazing variety and the paneer dishes are exceptional. Perfect for family celebrations.',
  },
  {
    name: 'Kajal Joshi',
    rating: 5,
    text: 'Wonderful ambience and excellent food quality. The live counters are a treat. Highly recommend the dinner buffet.',
  },
  {
    name: 'Deepak Sharma',
    rating: 5,
    text: 'Celebrated my anniversary here. The staff was courteous and the dessert selection was incredible. Will visit again!',
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="label-premium mb-6">Testimonials</p>
          <h2 className="heading-section text-foreground mb-8">
            What our guests<br />are saying
          </h2>
          
          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 text-muted-foreground"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-foreground fill-foreground' : 'text-foreground/30 fill-foreground/30'}`}
                />
              ))}
            </div>
            <span className="text-foreground font-medium">4.3</span>
            <span className="text-sm">from 4,500+ reviews</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-foreground fill-foreground' : 'text-muted'}`}
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              <p className="text-sm text-muted-foreground font-medium">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
