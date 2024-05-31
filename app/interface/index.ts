export interface SourcesInterface {
    name: string;
    type: string;
    tier: number;
    workplace: string;
    link: string;
    region?: string;
    club?: string;
}

export interface TierListInterface {
    data: SourcesInterface[];
}
