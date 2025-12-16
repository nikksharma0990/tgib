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
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="label-premium mb-6">Gallery</p>
          <h2 className="heading-section text-foreground">
            A feast for<br />the eyes
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            Follow @thegrandindianbuffet
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
