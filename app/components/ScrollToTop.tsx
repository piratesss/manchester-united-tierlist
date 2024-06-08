import { useEffect, useState } from 'react';

import { UpArrow } from '@/public';
import { Img } from '@/app/components';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isBouncing, setIsBouncing] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        setIsBouncing(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        // Remove the bounce class after the animation ends
        setTimeout(() => {
            setIsBouncing(false);
        }, 1000); // Duration of the bounce animation
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 z-50 p-3 rounded-full bg-red-500 text-white transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            } ${isBouncing ? 'bounce' : ''}`}
        >
            <Img src={UpArrow} alt="up arrow" />
        </button>
    );
};

export default ScrollToTop;
