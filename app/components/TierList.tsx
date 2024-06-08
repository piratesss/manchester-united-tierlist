'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { Tier0, Img, SearchField, ScrollToTop } from '@/app/components';
import { SourcesInterface, TierListInterface } from '@/app/interface';
import { capitalizeFirstLetter, findClub, findFlag } from '@/app/utils';

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

    const tierListClass = `flex flex-col px-4 mb-4 mt-4 
                            3xl:grid-cols-[200px_auto] 
                            2xl:grid-cols-[200px_auto] 
                            xl:grid-cols-[150px_auto] 
                            lg:grid-cols-[150px_auto] 
                            md:grid-cols-[150px_auto] 
                            sm:grid grid-cols-[80px_auto]
                            `;

    const renderList = (tierData: SourcesInterface[], tierName: string) => (
        <>
            {tierData?.length >= 1 && (
                <>
                    <hr />
                    <div key={tierName} className={tierListClass}>
                        <h2>{capitalizeFirstLetter(tierName.replace('_', ' '))}</h2>
                        <ul className="grid grid-cols-1 3xl:grid-cols-3 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
                            {tierData?.map((item, index) => {
                                const isLinkEmpty = !item?.link;
                                const link = item?.not_twitter_link
                                    ? `https://${item?.link}`
                                    : `https://www.twitter.com/${item?.link}`;

                                return (
                                    <div className="mb-4">
                                        <div className="flex mb-2 mt-2">
                                            <h3
                                                className={`mr-2 ${
                                                    isLinkEmpty ? 'cursor-not-allowed' : ''
                                                }`}
                                            >
                                                {isLinkEmpty ? (
                                                    item?.name
                                                ) : (
                                                    <Link
                                                        href={link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="h2"
                                                    >
                                                        {item?.name}
                                                    </Link>
                                                )}
                                            </h3>
                                            {item.region && (
                                                <Img
                                                    src={findFlag(item.region)}
                                                    alt={`Flag of ${item.region}`}
                                                    type={'flag'}
                                                />
                                            )}
                                        </div>

                                        <i>{item.workplace}</i>
                                        {getClubDetails(item)}
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                </>
            )}
        </>
    );

    const getClubDetails = (item: SourcesInterface) => {
        return (
            <>
                {Array.isArray(item?.club) && item?.club.length > 0 ? (
                    <div className="flex items-center py-2">
                        {item.club.map((club, clubIndex) => (
                            <span key={clubIndex} className="mr-2">
                                {findClub(club) ? (
                                    <Img
                                        src={findClub(club)}
                                        alt={`Flag of ${item.region}`}
                                        type={'flag'}
                                    />
                                ) : (
                                    <span>{club}</span>
                                )}
                            </span>
                        ))}
                    </div>
                ) : (
                    <p />
                )}
            </>
        );
    };

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
                {/* <h3>dropdown</h3> */}
            </div>

            <div className="py-4">
                {Object.keys(filteredData).map(tier =>
                    // @ts-ignore
                    renderList(filteredData[tier], tier)
                )}
            </div>

            <ScrollToTop />
        </div>
    );
};

export default List;
