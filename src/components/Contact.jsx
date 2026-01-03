import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

const contactInfo = [
    {
        icon: Phone,
        label: 'Call Us',
        value: '+91 98765 43210',
        href: 'tel:+919876543210',
        description: 'Mon-Sat, 9AM-8PM',
    },
    {
        icon: MessageCircle,
        label: 'WhatsApp',
        value: '+91 98765 43210',
        href: 'https://wa.me/919876543210?text=Hello! I would like to book an appointment.',
        description: 'Quick responses',
    },
    {
        icon: Mail,
        label: 'Email Us',
        value: 'hello@smilecare.in',
        href: 'mailto:hello@smilecare.in',
        description: "We'll reply within 24 hours",
    },
    {
        icon: MapPin,
        label: 'Visit Us',
        value: '123 Smile Street, Koramangala',
        href: 'https://maps.google.com',
        description: 'Bangalore, Karnataka 560034',
    },
];

const timings = [
    { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
];

export default function Contact() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
    const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send this data to a server
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div
                    ref={titleRef}
                    className={`contact-header scroll-animate ${titleVisible ? 'visible' : ''}`}
                >
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-subtitle">
                        Ready to transform your smile? Reach out to us today to schedule an
                        appointment or learn more about our services.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Form */}
                    <div
                        ref={formRef}
                        className={`contact-form-wrapper scroll-animate-left ${formVisible ? 'visible' : ''}`}
                    >
                        <div className="contact-form-card">
                            <h3 className="form-title">Book an Appointment</h3>
                            <p className="form-subtitle">
                                Fill out the form and we'll get back to you within 24 hours.
                            </p>

                            {isSubmitted ? (
                                <div className="success-message">
                                    <div className="success-icon">✓</div>
                                    <h4>Thank You!</h4>
                                    <p>We've received your message and will contact you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your dental needs..."
                                            rows={4}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg submit-btn">
                                        <Send size={20} />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div
                        ref={infoRef}
                        className={`contact-info-wrapper scroll-animate-right ${infoVisible ? 'visible' : ''}`}
                    >
                        <div className="contact-info-cards">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.href}
                                    target={info.href.startsWith('http') ? '_blank' : undefined}
                                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="contact-info-card"
                                >
                                    <div className="info-icon-wrapper">
                                        <info.icon size={22} />
                                    </div>
                                    <div className="info-content">
                                        <span className="info-label">{info.label}</span>
                                        <span className="info-value">{info.value}</span>
                                        <span className="info-description">{info.description}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Clinic Timings */}
                        <div className="timings-card">
                            <div className="timings-header">
                                <Clock size={20} />
                                <h4>Clinic Hours</h4>
                            </div>
                            <div className="timings-list">
                                {timings.map((timing, index) => (
                                    <div key={index} className="timing-row">
                                        <span className="timing-day">{timing.day}</span>
                                        <span className={`timing-hours ${timing.hours === 'Closed' ? 'closed' : ''}`}>
                                            {timing.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5831955983474!2d77.61448!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjciTiA3N8KwMzYnNTIuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Clinic Location"
                                className="map-iframe"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
