import { Argentina, England, France, Italy, Spain, Germany, Uruguay, Netherlands } from '@/public';

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

export const findFlag = (country: string) => {
    const countryToLowercase = turnToLowercase(country);

    if (Object.keys(FLAGS).includes(countryToLowercase)) {
        return FLAGS[countryToLowercase];
    }

    return undefined;
};
