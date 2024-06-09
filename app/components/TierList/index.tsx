'use client';

import React, { useState, useEffect } from 'react';

import {
    Tier0,
    SearchField,
    ScrollToTop,
    StickyTierHeader,
    MessageComponent,
} from '@/app/components';
import { isEmpty } from '@/app/utils';
import { renderList } from './helpers';
import { TierListInterface } from '@/app/interface';

const List: React.FC<TierListInterface> = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredData, setFilteredData] = useState<object>({});

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

    const isFilteredDataEmpty = () => {
        return Object.keys(filteredData).every(
            key =>
                // @ts-ignore
                filteredData[key].length === 0
        );
    };

    const renderTierList = () => {
        if (isEmpty(filteredData)) {
            return <MessageComponent message="Loading..." />;
        } else if (isFilteredDataEmpty()) {
            return <MessageComponent message="No data found" />;
        } else {
            return (
                <>
                    <div className="py-4">
                        {Object.keys(filteredData).map((tier, tierIndex) => (
                            // @ts-ignore
                            <div key={tierIndex}>{renderList(filteredData[tier], tier)}</div>
                        ))}
                    </div>
                </>
            );
        }
    };

    return (
        <div>
            <Tier0 />

            <div className="sticky top-0 z-10 w-full">
                <div className="bg-background flex gap-5 items-center justify-center p-4">
                    <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
                </div>
                <StickyTierHeader />
            </div>

            {renderTierList()}

            <ScrollToTop />
        </div>
    );
};

export default List;
