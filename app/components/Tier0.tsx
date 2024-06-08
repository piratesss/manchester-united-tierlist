import React from 'react';

import Img from './Img';
import { TIER_ZERO } from '@/app/data/tierZero';

export const Tier0: React.FC = () => {
    return (
        <div className="px-4 flex gap-5 lg:items-center justify-center py-8 flex-col md:flex-row md:items-start lg:flex-wrap">
            <h3>Official</h3>
            <Tier0List />
        </div>
    );
};

export const Tier0List = () => {
    return (
        <div className="flex gap-4 flex-col md:flex-row lg:flex-wrap">
            {TIER_ZERO.map((link, index) => (
                <div key={index} className="flex items-center">
                    <Img src={link.src} alt={link.alt} className="mr-2" />
                    <div>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};
