'use client';

import React, { useState, useEffect } from 'react';

import { renderList } from './helpers';
import { TierListInterface } from '@/app/interface';
import { Tier0, SearchField, ScrollToTop } from '@/app/components';

const List: React.FC<TierListInterface> = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState({});

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
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
        if (data) {
            setFilteredData(data);
        }
    }, [data]);

    return (
        <div>
            <Tier0 />

            <div className="sticky top-0 z-10 w-full">
                <div className="bg-background flex gap-5 items-center justify-center p-4">
                    <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
                </div>
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
