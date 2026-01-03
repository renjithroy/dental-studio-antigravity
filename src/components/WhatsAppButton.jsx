import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
    const phoneNumber = '919876543210';
    const message = 'Hello! I would like to book an appointment at SmileCare Dental Clinic.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <div className="whatsapp-pulse"></div>
            <div className="whatsapp-icon">
                <MessageCircle size={28} />
            </div>
            <span className="whatsapp-tooltip">Chat with us!</span>
        </a>
    );
}
