import {
    Argentina,
    England,
    France,
    Italy,
    Spain,
    Germany,
    Uruguay,
    Netherlands,
    Manutd,
    Mancity,
    Liverpool,
    Everton,
    Realmadrid,
    Juventus,
    BayernMunich,
    Chelsea,
    BVB,
} from '@/public';

export const turnToLowercase = (value: string) => {
    return value?.toLowerCase();
};

export const FLAGS: { [key: string]: any } = {
    england: England,
    italy: Italy,
    france: France,
    argentina: Argentina,
    spain: Spain,
    germany: Germany,
    uruguay: Uruguay,
    netherlands: Netherlands,
};

export const CLUBS: { [key: string]: any } = {
    'manchester united': Manutd,
    'manchester city': Mancity,
    liverpool: Liverpool,
    everton: Everton,
    'real madrid': Realmadrid,
    juventus: Juventus,
    'bayern munich': BayernMunich,
    chelsea: Chelsea,
    bvb: BVB,
};

export const findFlag = (country: string) => {
    const countryToLowercase = turnToLowercase(country);

    if (Object.keys(FLAGS).includes(countryToLowercase)) {
        return FLAGS[countryToLowercase];
    }

    return undefined;
};

export const findClub = (club: string) => {
    const clubToLowercase = turnToLowercase(club);

    if (Object.keys(CLUBS).includes(clubToLowercase)) {
        return CLUBS[clubToLowercase];
    }

    return undefined;
};
