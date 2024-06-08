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
    Brazil,
    WestHamUnited,
    Porgugal,
    Schalke,
    Gladbach,
    AcMilan,
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
    brazil: Brazil,
    portugal: Porgugal,
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
    'west ham united': WestHamUnited,
    schalke: Schalke,
    gladbach: Gladbach,
    'ac milan': AcMilan,
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

export const capitalizeFirstLetter = (value: string) => {
    if (!value) return '';

    return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};
