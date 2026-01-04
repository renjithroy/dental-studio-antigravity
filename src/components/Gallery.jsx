import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Maximize2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Gallery.css';

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
        alt: 'Modern dental clinic reception area',
        category: 'Interior',
    },
    {
        src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
        alt: 'State-of-the-art dental equipment',
        category: 'Equipment',
    },
    {
        src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=800&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop',
        alt: 'Comfortable treatment room',
        category: 'Treatment',
    },
    {
        src: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=1200&h=800&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=500&fit=crop',
        alt: 'Advanced dental technology',
        category: 'Technology',
    },
    {
        src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&h=800&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=300&fit=crop',
        alt: 'Bright and clean clinic interior',
        category: 'Interior',
    },
    {
        src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=800&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop',
        alt: 'Professional dental tools',
        category: 'Equipment',
    },
];

export default function Gallery() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    // Open lightbox
    const openLightbox = useCallback((index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    // Close lightbox
    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    }, []);

    // Navigate to next image
    const goNext = useCallback(() => {
        setIsLoading(true);
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, []);

    // Navigate to previous image
    const goPrev = useCallback(() => {
        setIsLoading(true);
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;

            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    goNext();
                    break;
                case 'ArrowLeft':
                    goPrev();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, closeLightbox, goNext, goPrev]);

    return (
        <>
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
                            <GalleryItem
                                key={index}
                                image={image}
                                index={index}
                                onClick={() => openLightbox(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Lightbox */}
            <div className={`lightbox ${lightboxOpen ? 'active' : ''}`}>
                {/* Backdrop */}
                <div className="lightbox-backdrop" onClick={closeLightbox} />

                {/* Close Button */}
                <button className="lightbox-close" onClick={closeLightbox} aria-label="Close gallery">
                    <X size={24} strokeWidth={1.5} />
                </button>

                {/* Image Counter */}
                <div className="lightbox-counter">
                    <span className="counter-current">{currentIndex + 1}</span>
                    <span className="counter-separator">/</span>
                    <span className="counter-total">{galleryImages.length}</span>
                </div>

                {/* Main Image Container */}
                <div className="lightbox-content">
                    {/* Previous Button */}
                    <button className="lightbox-nav lightbox-prev" onClick={goPrev} aria-label="Previous image">
                        <ChevronLeft size={32} strokeWidth={1.5} />
                    </button>

                    {/* Image */}
                    <div className="lightbox-image-container">
                        <img
                            src={galleryImages[currentIndex]?.src}
                            alt={galleryImages[currentIndex]?.alt}
                            className={`lightbox-image ${isLoading ? 'loading' : ''}`}
                            onLoad={() => setIsLoading(false)}
                        />
                        {isLoading && (
                            <div className="lightbox-loader">
                                <div className="loader-spinner"></div>
                            </div>
                        )}
                    </div>

                    {/* Next Button */}
                    <button className="lightbox-nav lightbox-next" onClick={goNext} aria-label="Next image">
                        <ChevronRight size={32} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Caption */}
                <div className="lightbox-caption">
                    <span className="caption-category">{galleryImages[currentIndex]?.category}</span>
                    <p className="caption-text">{galleryImages[currentIndex]?.alt}</p>
                </div>

                {/* Thumbnail Strip */}
                <div className="lightbox-thumbnails">
                    {galleryImages.map((image, index) => (
                        <button
                            key={index}
                            className={`thumbnail-item ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                setIsLoading(true);
                                setCurrentIndex(index);
                            }}
                        >
                            <img src={image.thumbnail} alt={image.alt} />
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

function GalleryItem({ image, index, onClick }) {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`gallery-item scroll-animate stagger-${(index % 3) + 1} ${isVisible ? 'visible' : ''}`}
            onClick={onClick}
        >
            <img src={image.thumbnail} alt={image.alt} className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                    <Maximize2 size={24} strokeWidth={1.5} className="gallery-icon" />
                    <span className="gallery-category">{image.category}</span>
                    <span className="gallery-caption">{image.alt}</span>
                </div>
            </div>
        </div>
    );
}
