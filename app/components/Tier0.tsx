import React from 'react';

import Img from './Img';
import { TIER_ZERO } from '@/app/data/tierZero';

export const Tier0: React.FC = () => {
    return (
        <>
            <div>Official</div>
            <div>
                {TIER_ZERO.map((link, index) => (
                    <div key={index} className="flex">
                        <Img src={link.src} alt={link.alt} />
                        <div>
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.label}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
