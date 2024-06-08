export interface SourcesInterface {
    name: string;
    type: string;
    tier: number;
    workplace: string;
    link: string;
    region?: string;
    club?: string;
    suspect?: boolean;
}

export interface TierListInterface {
    data: SourcesInterface[];
}

export interface TieredData {
    tier_one: SourcesInterface[];
    tier_two: SourcesInterface[];
    tier_three: SourcesInterface[];
    tier_four: SourcesInterface[];
}
