import { Argentina, England, France, Italy, Spain } from '@/public';

export const turnToLowercase = (value: string) => {
    return value?.toLowerCase();
};

export const FLAGS: { [key: string]: any } = {
    england: England,
    italy: Italy,
    france: France,
    argentina: Argentina,
    spain: Spain,
};

export const findFlag = (country: string) => {
    const countryToLowercase = turnToLowercase(country);

    if (Object.keys(FLAGS).includes(countryToLowercase)) {
        return FLAGS[countryToLowercase];
    }

    return undefined;
};