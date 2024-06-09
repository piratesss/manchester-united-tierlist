import { useEffect, useState } from 'react';

import { getTierCredibility } from '@/app/utils';
import { useCurrentScrollPosiion } from '@/app/hooks';

const StickyTierHeader = () => {
    const { scrollPosition } = useCurrentScrollPosiion();

    const [prevSection, setPrevSection] = useState<string>('');
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('h2');
            let current = prevSection;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 153;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.textContent || '';
                }
            });

            if (current !== prevSection) {
                setCurrentSection(current);
                setPrevSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevSection]);

    return (
        <div>
            {scrollPosition >= 153 && (
                <>
                    <div className="flex items-center absolute p-2 bg-background w-full text-center md:text-start text-nowrap">
                        <h2>{currentSection}</h2>&nbsp;
                        <span className="font-medium">- {getTierCredibility(currentSection)}</span>
                    </div>
                </>
            )}
        </div>
    );
};
export default StickyTierHeader;
