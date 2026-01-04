import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Doctors.css';

const doctors = [
    {
        name: 'Dr. Priya Sharma',
        qualification: 'BDS, MDS (Orthodontics)',
        specialty: 'Orthodontist & Smile Makeover Specialist',
        bio: 'With over 12 years of experience in orthodontics, Dr. Priya specializes in creating beautiful smiles using the latest braces and aligner technology. Her gentle approach makes even the youngest patients feel at ease.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=faces',
    },
    {
        name: 'Dr. Rajesh',
        qualification: 'BDS, MDS (Endodontics)',
        specialty: 'Root Canal & Restorative Dentistry',
        bio: 'Dr. Rajesh has performed over 5,000 successful root canal procedures. Known for his painless techniques and patient-first philosophy, he ensures every treatment is as comfortable as possible.',
        image: '/images/doctor_portrait.png',
    },
    {
        name: 'Dr. Ananya Reddy',
        qualification: 'BDS, MDS (Prosthodontics)',
        specialty: 'Dental Implants & Cosmetic Dentistry',
        bio: 'A perfectionist at heart, Dr. Ananya transforms smiles with precision implants and cosmetic procedures. Her artistic eye and technical expertise deliver stunning, natural-looking results.',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=faces',
    },
];

export default function Doctors() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

    return (
        <section id="doctors" className="doctors section section-alt">
            <div className="container">
                <div
                    ref={titleRef}
                    className={`doctors-header scroll-animate ${titleVisible ? 'visible' : ''}`}
                >
                    <span className="section-label">Our Experts</span>
                    <h2 className="section-title">Meet Our Doctors</h2>
                    <p className="section-subtitle">
                        Our team of highly qualified dental professionals combines years of
                        experience with a passion for patient care and the latest techniques.
                    </p>
                </div>

                <div className="doctors-grid">
                    {doctors.map((doctor, index) => (
                        <DoctorCard key={index} doctor={doctor} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function DoctorCard({ doctor, index }) {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`doctor-card scroll-animate stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
        >
            <div className="doctor-image-wrapper">
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                <div className="doctor-overlay">
                    <div className="doctor-overlay-content">
                        <p className="doctor-bio">{doctor.bio}</p>
                    </div>
                </div>
            </div>
            <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-qualification">{doctor.qualification}</p>
                <p className="doctor-specialty">{doctor.specialty}</p>
            </div>
        </div>
    );
}
