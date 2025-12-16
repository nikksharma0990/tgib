import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-custom py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <h3 className="font-display text-3xl font-medium text-foreground mb-2">
            TGIB
          </h3>
          <p className="text-muted-foreground text-sm mb-8">
            The Grand Indian Buffet
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm mb-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#menu" className="text-muted-foreground hover:text-foreground transition-colors">
              Menu
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
              Gallery
            </a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-6 mb-12">
            <a
              href="https://instagram.com/thegrandindianbuffet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://facebook.com/thegrandindianbuffet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {currentYear} TGIB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
