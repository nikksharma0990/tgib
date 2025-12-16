import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-primary mb-2">
              TGIB
            </h3>
            <p className="text-muted-foreground text-sm">
              The Grand Indian Buffet<br />
              Pure Veg • Vaishali Nagar, Jaipur
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">
              Menu
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/thegrandindianbuffet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/thegrandindianbuffet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} TGIB - The Grand Indian Buffet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
