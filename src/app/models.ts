export interface Game {
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publisher>;
  rating: Array<Rating>;
  screenshots: Array<ScreenShots>;
  trailers: Array<Trailer>;
}

export interface APIResponse<T> {
  retults: Array<T>;
}
interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    name: string;
  };
}

interface Publisher {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface ScreenShots {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}
