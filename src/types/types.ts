type Color = `#${string}`;

export type Photo = {
    alt: string;
    avg_color: Color;
    height: number;
    id: number;
    liked: boolean;
    photographer: string;
    photographer_id: number;
    photographer_url: string;
    src: {
        landscape: string;
        large: string;
        large2x: string;
        medium: string;
        original: string;
        portrait: string;
        small: string;
        tiny: string;
    };
    url: string;
    width: number;
};

export type Photos<T> = {
    page: number;
    per_page: number;
    photos: T[];
    total_results: number;
    next_page: string;
};