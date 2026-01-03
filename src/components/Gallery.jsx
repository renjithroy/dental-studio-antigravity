import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Gallery.css';

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
        alt: 'Modern dental clinic reception area',
        size: 'large',
    },
    {
        src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
        alt: 'State-of-the-art dental equipment',
        size: 'small',
    },
    {
        src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop',
        alt: 'Comfortable treatment room',
        size: 'small',
    },
    {
        src: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=500&fit=crop',
        alt: 'Advanced dental technology',
        size: 'tall',
    },
    {
        src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=300&fit=crop',
        alt: 'Bright and clean clinic interior',
        size: 'wide',
    },
    {
        src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop',
        alt: 'Professional dental tools',
        size: 'small',
    },
];

export default function Gallery() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

    return (
        <section id="gallery" className="gallery section section-alt">
            <div className="container">
                <div
                    ref={titleRef}
                    className={`gallery-header scroll-animate ${titleVisible ? 'visible' : ''}`}
                >
                    <span className="section-label">Our Space</span>
                    <h2 className="section-title">Clinic Gallery</h2>
                    <p className="section-subtitle">
                        Take a virtual tour of our modern facility designed for your comfort
                        and equipped with the latest dental technology.
                    </p>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <GalleryItem key={index} image={image} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function GalleryItem({ image, index }) {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`gallery-item gallery-item-${image.size} scroll-animate stagger-${(index % 3) + 1} ${isVisible ? 'visible' : ''}`}
        >
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="gallery-overlay">
                <span className="gallery-caption">{image.alt}</span>
            </div>
        </div>
    );
}
