import { useState, useEffect } from 'react';
import { X, RotateCcw, Expand, Mouse, Box } from 'lucide-react';
import './Explore.css';

export default function ExploreModal({ isOpen, onClose }) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="explore-modal">
            <div className="explore-backdrop" onClick={onClose} />

            <div className="explore-dialog">
                {/* Header */}
                <div className="explore-modal-header">
                    <div className="explore-modal-title">
                        <Box size={20} />
                        <span>Explore Dental Anatomy</span>
                    </div>
                    <button className="explore-close" onClick={onClose} aria-label="Close">
                        <X size={20} />
                    </button>
                </div>

                {/* 3D Model */}
                <div className="explore-model-wrapper">
                    <iframe
                        className="explore-iframe"
                        src="https://sketchfab.com/playlists/embed?collection=4c0d0548c40c463c8cdceb6e0d08df7f&autostart=0"
                        title="Permanent Teeth - 3D Anatomy Model"
                        frameBorder="0"
                        allowFullScreen
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                    ></iframe>
                </div>

                {/* Hints */}
                <div className="explore-hints">
                    <div className="hint-item">
                        <RotateCcw size={14} />
                        <span>Drag to rotate</span>
                    </div>
                    <div className="hint-item">
                        <Mouse size={14} />
                        <span>Scroll to zoom</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Trigger button component to use in About section
export function ExploreButton({ onClick }) {
    return (
        <button className="explore-trigger-btn" onClick={onClick}>
            <Box size={18} />
            <span>Explore 3D Tooth Anatomy</span>
        </button>
    );
}
