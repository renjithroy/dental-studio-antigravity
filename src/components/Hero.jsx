import { Calendar, Phone, MessageCircle } from 'lucide-react';
import './Hero.css';

export default function Hero() {
    const handleScrollToContact = (e) => {
        e.preventDefault();
        const element = document.getElementById('contact');
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
        <section id="home" className="hero">
            {/* Background Decorations */}
            <div className="hero-bg-shapes">
                <div className="hero-shape hero-shape-1"></div>
                <div className="hero-shape hero-shape-2"></div>
                <div className="hero-shape hero-shape-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge animate-fade-in">
                        ✨ Trusted by 10,000+ Happy Patients
                    </span>
                    <h1 className="hero-title animate-fade-in-up">
                        Your Smile, <br />
                        <span className="text-gradient">Our Priority</span>
                    </h1>
                    <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Experience world-class dental care in a comfortable, modern environment.
                        Our expert team is dedicated to giving you the smile you deserve —
                        with gentle care and advanced technology.
                    </p>
                    <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a href="#contact" className="btn btn-primary btn-lg" onClick={handleScrollToContact}>
                            <Calendar size={20} />
                            Book Appointment
                        </a>
                        <a href="tel:+919876543210" className="btn btn-secondary btn-lg">
                            <Phone size={20} />
                            Call Now
                        </a>
                    </div>
                    <div className="hero-quick-contact animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <a
                            href="https://wa.me/919876543210?text=Hello! I would like to book an appointment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-link"
                        >
                            <MessageCircle size={18} />
                            Chat on WhatsApp
                        </a>
                        <span className="divider">|</span>
                        <span className="open-hours">Open Mon-Sat: 9AM - 8PM</span>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="hero-image-wrapper">
                        <div className="hero-image-bg"></div>
                        {/* <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=700&fit=crop&crop=faces"
                            alt="Modern dental clinic interior"
                            className="hero-image"
                        /> */}
                        <img
                            src="/images/doctor_portrait.png"
                            alt="Modern dental clinic interior"
                            className="hero-image max-h-[500px]"
                        />
                        {/* Floating Cards */}
                        <div className="floating-card floating-card-1">
                            <span className="floating-card-icon">🦷</span>
                            <div className="floating-card-content">
                                <span className="floating-card-number">15+</span>
                                <span className="floating-card-text">Years Experience</span>
                            </div>
                        </div>
                        <div className="floating-card floating-card-2">
                            <span className="floating-card-icon">⭐</span>
                            <div className="floating-card-content">
                                <span className="floating-card-number">4.9</span>
                                <span className="floating-card-text">Patient Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="hero-wave">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                        d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
                        fill="var(--color-background)"
                    />
                </svg>
            </div>
        </section>
    );
}
