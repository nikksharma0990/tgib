import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import foodThali from '@/assets/food-thali.jpg';
import foodBuffet from '@/assets/food-buffet.jpg';
import foodPaneer from '@/assets/food-paneer.jpg';
import foodDessert from '@/assets/food-dessert.jpg';
import galleryInterior from '@/assets/gallery-interior.jpg';
import heroRestaurant from '@/assets/hero-restaurant.jpg';

const galleryImages = [
  { src: foodThali, alt: 'Traditional Indian Thali' },
  { src: galleryInterior, alt: 'Premium Restaurant Interior' },
  { src: foodPaneer, alt: 'Paneer Tikka Masala' },
  { src: foodBuffet, alt: 'Buffet Spread' },
  { src: foodDessert, alt: 'Indian Desserts' },
  { src: heroRestaurant, alt: 'Dining Ambience' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-premium mb-4">Gallery</p>
          <h2 className="heading-section text-foreground mb-4">
            Feast Your Eyes on <span className="text-primary">Instagram</span>
          </h2>
          <p className="subheading max-w-2xl mx-auto">
            A glimpse into our culinary artistry and elegant ambience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-foreground" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/thegrandindianbuffet"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Instagram className="w-5 h-5" />
            View More on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
