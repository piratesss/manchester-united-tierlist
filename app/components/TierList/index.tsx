'use client';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

import { renderList } from './helpers';
import { getTierCredibility } from '@/app/utils';
import { TierListInterface } from '@/app/interface';
import { useCurrentScrollPosiion } from '@/app/hooks';
import { Tier0, SearchField, ScrollToTop } from '@/app/components';

const List: React.FC<TierListInterface> = ({ data }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [prevSection, setPrevSection] = useState('');
    const [filteredData, setFilteredData] = useState({});
    const [currentSection, setCurrentSection] = useState('');

    const { scrollPosition } = useCurrentScrollPosiion();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (term === '') {
            setFilteredData(data);
        } else {
            const filtered = Object.keys(data).reduce((acc, tier) => {
                // @ts-ignore
                acc[tier] = data[tier].filter(item =>
                    // @ts-ignore
                    Object.values(item).some(value => value.toString().toLowerCase().includes(term))
                );
                return acc;
            }, {});
            setFilteredData(filtered);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('h2');
            let current = prevSection;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
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

    useEffect(() => {
        if (data) {
            setFilteredData(data);
        }
    }, [data]);

    useEffect(() => {
        router?.push(`?search=${searchTerm}`);
    }, [searchTerm]);

    return (
        <div>
            <Tier0 />

            <div className="sticky top-0 z-10 w-full">
                <div className="bg-background flex gap-5 items-center justify-center p-4">
                    <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
                </div>
                {scrollPosition >= 153 && (
                    <>
                        <div className="flex items-center absolute p-2 bg-background w-full text-center md:text-start">
                            <h2>{currentSection}</h2>&nbsp;
                            <span className="font-medium">
                                - {getTierCredibility(currentSection)}
                            </span>
                        </div>
                    </>
                )}
            </div>

            <div className="py-4">
                {Object.keys(filteredData).map((tier, tierIndex) => (
                    // @ts-ignore
                    <div key={tierIndex}>{renderList(filteredData[tier], tier)}</div>
                ))}
            </div>

            <ScrollToTop />
        </div>
    );
};

export default List;
