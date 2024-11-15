export type MovieType = {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
}

export type WatchedMovieType = {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    runtime: number;
    imdbRating: number;
    userRating: number;
}