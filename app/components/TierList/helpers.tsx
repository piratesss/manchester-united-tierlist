import Link from 'next/link';

import { Img } from '@/app/components';
import { SourcesInterface } from '@/app/interface';
import { capitalizeFirstLetter, findClub, findFlag } from '@/app/utils';

export const tierListClass = `flex flex-col px-4 mb-4 mt-4 
                            3xl:grid-cols-[200px_auto] 
                            2xl:grid-cols-[200px_auto] 
                            xl:grid-cols-[150px_auto] 
                            lg:grid-cols-[150px_auto] 
                            md:grid-cols-[150px_auto] 
                            sm:grid grid-cols-[80px_auto]
`;

export const renderList = (tierData: SourcesInterface[], tierName: string) => (
    <>
        {tierData?.length >= 1 && (
            <>
                <hr />
                <div key={tierName} className={tierListClass}>
                    <h2>{capitalizeFirstLetter(tierName.replace('_', ' '))}</h2>
                    <ul className="grid grid-cols-1 3xl:grid-cols-3 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
                        {tierData?.map(item => {
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

export const getClubDetails = (item: SourcesInterface) => {
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
