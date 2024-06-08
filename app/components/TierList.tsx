'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { findFlag } from '../utils';
import { Tier0, Img, SearchField } from '@/app/components';
import { SourcesInterface, TierListInterface } from '@/app/interface';

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

    const renderList = (tierData: SourcesInterface[], tierName: string) => (
        <>
            {tierData?.length >= 1 && (
                <>
                    <hr />
                    <div
                        key={tierName}
                        className="grid grid-cols-[80px_auto] mb-4 mt-4 
                                    3xl:grid-cols-[200px_auto] 
                                    2xl:grid-cols-[200px_auto] 
                                    xl:grid-cols-[150px_auto] 
                                    lg:grid-cols-[80px_auto] 
                                    md:grid-cols-[150px_auto] 
                                    sm:grid-cols-[150px_auto]"
                    >
                        <h2>{tierName.replace('_', ' ')}</h2>
                        <ul className="grid grid-cols-1 3xl:grid-cols-3 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
                            {tierData?.map((item, index) => (
                                <Link
                                    key={index}
                                    className="mb-4"
                                    href={
                                        item?.not_twitter_link
                                            ? `https://${item?.link}`
                                            : `https://www.twitter.com/${item?.link}`
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex mb-2 mt-2">
                                        <h3 className="mr-2">{item.name}</h3>
                                        {item.region && (
                                            <Img
                                                src={findFlag(item.region)}
                                                alt={`Flag of ${item.region}`}
                                                type={'flag'}
                                            />
                                        )}
                                    </div>
                                    <i>{item.workplace}</i>

                                    {Array.isArray(item?.club) && item?.club.length > 0 ? (
                                        <p>
                                            {item.club.map((club, clubIndex) => (
                                                <span key={club} className="mr-2">
                                                    {club}
                                                    {clubIndex !== item.club!.length - 1 && ','}
                                                </span>
                                            ))}
                                        </p>
                                    ) : (
                                        <p />
                                    )}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </>
    );

    useEffect(() => {
        if (data) {
            setFilteredData(data);
        }
    }, [data]);

    return (
        <div>
            <Tier0 />

            <div className="flex gap-5 items-center justify-center">
                <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
                <h3>dropdown</h3>
            </div>

            <div className="py-4">
                {Object.keys(filteredData).map(tier =>
                    // @ts-ignore
                    renderList(filteredData[tier], tier)
                )}
            </div>
        </div>
    );
};

export default List;
