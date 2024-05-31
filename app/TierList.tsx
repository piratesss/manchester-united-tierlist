'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { SourcesInterface, TierListInterface } from '@/app/interface';

import { findFlag } from './utils';

const List: React.FC<TierListInterface> = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        if (term === '') {
            setFilteredData(data);
        } else {
            const filtered = data.filter(item =>
                Object.values(item).some(value => value.toString().toLowerCase().includes(term))
            );
            setFilteredData(filtered);
        }
    };

    // console.log("data", data);

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search" />
            <ul>
                {filteredData.map((item: SourcesInterface, index: number) => (
                    <>
                        <div>
                            <div className="flex mb-2 mt-2">
                                <h2 key={index} className="mr-2">
                                    {item.name}
                                </h2>

                                {item?.region && (
                                    <Image
                                        src={findFlag(item?.region)}
                                        width={30}
                                        height={30}
                                        alt={`Picture of the ${item?.region}`}
                                    />
                                )}
                            </div>
                        </div>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default List;
