import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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

const ParallaxImage = ({ 
  src, 
  alt, 
  index 
}: { 
  src: string; 
  alt: string; 
  index: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Alternate parallax direction for visual interest
  const yOffset = index % 2 === 0 ? 30 : -30;
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
    >
      <motion.div
        className="absolute inset-[-20%] w-[140%] h-[140%]"
        style={{ y, scale }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center z-10">
        <Instagram className="w-6 h-6 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="gallery" className="section-padding overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
          style={{ y: headerY }}
        >
          <p className="label-premium mb-6">Gallery</p>
          <h2 className="heading-section text-foreground">
            A feast for<br />the eyes
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <ParallaxImage
              key={index}
              src={image.src}
              alt={image.alt}
              index={index}
            />
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
