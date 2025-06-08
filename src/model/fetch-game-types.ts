
export interface Platform {
    platform: {
        slug: string
    }
    
}
export interface Game {
    id: number;
    name: string;
    background_image: string,
    metacritic: number,
    parent_platforms: Platform[],
    rating: number
}
