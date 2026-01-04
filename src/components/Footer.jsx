import { Heart, ArrowUp, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Doctors', href: '#doctors' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

const services = [
    'General Checkup',
    'Root Canal',
    'Braces & Aligners',
    'Dental Implants',
    'Teeth Whitening',
    'Kids Dentistry',
];

const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <footer className="footer">
            {/* Top Wave */}
            <div className="footer-wave">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                        d="M0 50L48 45.7C96 41 192 32 288 35.3C384 39 480 55 576 60.8C672 67 768 62 864 55.3C960 49 1056 41 1152 41.7C1248 42 1344 51 1392 55.5L1440 60V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
                        fill="var(--color-background-dark)"
                    />
                </svg>
            </div>

            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <a href="#home" className="footer-logo" onClick={(e) => handleNavClick(e, '#home')}>
                                <img src="/images/logo.png" alt="Blue Star" className="footer-logo-img" />
                            </a>
                            <p className="footer-description">
                                Your trusted partner for comprehensive dental care. We combine
                                expertise with compassion to give you the smile you deserve.
                            </p>
                            <div className="footer-social">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Services</h4>
                            <ul className="footer-links">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Contact Us</h4>
                            <div className="footer-contact">
                                <a href="tel:+919876543210" className="contact-item">
                                    <Phone size={16} />
                                    <span>+91 96457 51111</span>
                                </a>
                                <a href="mailto:hello@bluestar.in" className="contact-item">
                                    <Mail size={16} />
                                    <span>hello@bluestar.in</span>
                                </a>
                                <div className="contact-item">
                                    <MapPin size={16} />
                                    <span>Kallarkutti Rd, Adimali<br />Kerala 685561</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            {/* <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {new Date().getFullYear()} Blue Star Dental Clinic. Made with{' '}
                            <Heart size={14} className="heart-icon" /> in India.
                        </p>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Scroll to Top Button */}
            <button
                className="scroll-top-btn"
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    );
}
