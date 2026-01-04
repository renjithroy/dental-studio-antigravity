import { Shield, Heart, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const features = [
    {
        icon: Shield,
        title: 'Strict Hygiene',
        description: 'Following international sterilization protocols for your safety',
    },
    {
        icon: Heart,
        title: 'Gentle Care',
        description: 'Pain-free treatments with a compassionate approach',
    },
    {
        icon: Award,
        title: '15+ Years',
        description: 'Trusted expertise serving families across generations',
    },
    {
        icon: Users,
        title: '10,000+ Patients',
        description: 'A growing community of happy, healthy smiles',
    },
];

export default function About() {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
    const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-grid">
                    <div
                        ref={imageRef}
                        className={`about-image-wrapper scroll-animate-left ${imageVisible ? 'visible' : ''}`}
                    >
                        <div className="about-image-bg"></div>
                        <img
                            src="/images/clinic-about.jpg"
                            alt="Our dental clinic team with a happy patient"
                            className="about-image"
                        />
                        <div className="about-experience-badge">
                            <span className="experience-number">15+</span>
                            <span className="experience-text">Years of Excellence</span>
                        </div>
                    </div>

                    <div
                        ref={sectionRef}
                        className={`about-content scroll-animate-right ${sectionVisible ? 'visible' : ''}`}
                    >
                        <span className="about-label">About Us</span>
                        <h2 className="about-title">
                            Your Family's Smile is <span className="text-gradient">Our Mission</span>
                        </h2>
                        <p className="about-description">
                            Welcome to Blue Star Dental Clinic — where modern dentistry meets
                            compassionate care. Located in the heart of the city, we've been
                            serving families for over 15 years with a commitment to excellence
                            that goes beyond just dental procedures.
                        </p>
                        <p className="about-description">
                            Our state-of-the-art facility combines the latest dental technology
                            with a warm, welcoming atmosphere. Whether you're here for a routine
                            checkup or a complete smile makeover, our experienced team ensures
                            every visit is comfortable, efficient, and tailored to your unique needs.
                        </p>

                        <div className="about-features">
                            {features.map((feature, index) => (
                                <div key={index} className="about-feature">
                                    <div className="feature-icon-wrapper">
                                        <feature.icon size={24} />
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="feature-title">{feature.title}</h4>
                                        <p className="feature-description">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


