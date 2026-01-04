import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight, Box } from 'lucide-react';
import './Navbar.css';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#doctors', label: 'Doctors' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar({ onOpenExplore }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navLinks.map((link) => link.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        setIsMobileMenuOpen(false);
    };

    const handleExploreClick = () => {
        setIsMobileMenuOpen(false);
        onOpenExplore?.();
    };

    return (
        <>
            {/* Desktop Floating Navbar */}
            <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
                <div className="navbar-inner">
                    {/* Logo */}
                    <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
                        <img src="/images/logo.png" alt="Blue Star" className="logo-img" />
                    </a>

                    {/* Center Navigation */}
                    <nav className="navbar-nav">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                <span className="nav-link-text">{link.label}</span>
                                <span className="nav-link-indicator"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="navbar-actions">
                        <button className="navbar-explore-btn" onClick={handleExploreClick}>
                            <Box size={16} strokeWidth={2} />
                            <span>Tooth Anatomy (3D)</span>
                        </button>

                        <a href="tel:+919645751111" className="navbar-cta">
                            <Phone size={16} strokeWidth={2.5} />
                            <span className="cta-text">Call Us</span>
                        </a>

                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={22} strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Slide-out Menu */}
            <aside className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <img src="/images/logo.png" alt="Blue Star" className="mobile-logo" />
                    <button
                        className="mobile-close-btn"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={20} strokeWidth={2} />
                    </button>
                </div>

                <nav className="mobile-nav">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`mobile-nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, link.href)}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <span>{link.label}</span>
                            <ChevronRight size={16} className="mobile-nav-arrow" />
                        </a>
                    ))}

                    {/* 3D Model button in mobile menu */}
                    <button
                        className="mobile-nav-link mobile-explore-link"
                        onClick={handleExploreClick}
                        style={{ animationDelay: `${navLinks.length * 50}ms` }}
                    >
                        <span><Box size={16} />Tooth Anatomy (3D)</span>
                    </button>
                </nav>

                <div className="mobile-menu-footer">
                    <a href="tel:+919645751111" className="mobile-cta">
                        <Phone size={18} />
                        <span>+91 96457 51111</span>
                    </a>
                    <p className="mobile-menu-tagline">Expert Dental Care in Adimali</p>
                </div>
            </aside>
        </>
    );
}

