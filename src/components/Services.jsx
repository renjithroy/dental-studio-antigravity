import {
    Stethoscope,
    Activity,
    Smile,
    CircleDot,
    Sparkles,
    ShieldCheck,
    Scan,
    Baby
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

const services = [
    {
        icon: Stethoscope,
        title: 'General Checkup',
        description: 'Comprehensive oral examination with digital X-rays to catch issues early and keep your smile healthy.',
    },
    {
        icon: Activity,
        title: 'Root Canal Treatment',
        description: 'Pain-free root canal therapy using advanced rotary instruments and modern anesthesia techniques.',
    },
    {
        icon: Smile,
        title: 'Braces & Aligners',
        description: 'Traditional braces and invisible aligners for all ages — achieve the perfect smile you deserve.',
    },
    {
        icon: CircleDot,
        title: 'Dental Implants',
        description: 'Permanent tooth replacement with high-quality titanium implants for a natural look and feel.',
    },
    {
        icon: Sparkles,
        title: 'Teeth Whitening',
        description: 'Professional whitening treatments that safely brighten your smile by several shades in one visit.',
    },
    {
        icon: ShieldCheck,
        title: 'Cleaning & Scaling',
        description: 'Thorough cleaning to remove plaque and tartar, preventing gum disease and maintaining oral health.',
    },
    {
        icon: Scan,
        title: 'Cosmetic Dentistry',
        description: 'Veneers, bonding, and smile makeovers to transform your appearance and boost confidence.',
    },
    {
        icon: Baby,
        title: 'Kids Dentistry',
        description: 'Gentle pediatric care in a fun, friendly environment to build healthy habits from an early age.',
    },
];

export default function Services() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

    return (
        <section id="services" className="services section">
            <div className="container">
                <div
                    ref={titleRef}
                    className={`services-header scroll-animate ${titleVisible ? 'visible' : ''}`}
                >
                    <span className="section-label">What We Offer</span>
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        From routine checkups to advanced cosmetic procedures, we offer a complete
                        range of dental services to keep your smile healthy and beautiful.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }) {
    const { ref, isVisible } = useScrollAnimation();
    const Icon = service.icon;

    return (
        <div
            ref={ref}
            className={`service-card scroll-animate stagger-${(index % 4) + 1} ${isVisible ? 'visible' : ''}`}
        >
            <div className="service-icon-wrapper">
                <Icon size={28} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-hover-line"></div>
        </div>
    );
}
