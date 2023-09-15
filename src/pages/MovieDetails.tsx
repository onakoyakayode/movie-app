import React from "react";

interface MovieCard {
  id: number;
  title: string;
  adult: boolean;
  genres: { id: number; name: string }[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  backgroundImageUrl: string;
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  revenue: number;
  runtime: number;
}

interface MovieDetailProps {
  movie: MovieCard;
  movieId: string | string[] | undefined;
}

const MovieDetails: React.FC<MovieDetailProps> = ({ movie }) => {
  // const localDate = new Date(movie.release_date);
  // const utcDate = localDate.toISOString().split("T")[0];
  function convertMinutesToHoursAndMinutes(minutes: number): string {
    if (isNaN(minutes)) {
      return "Invalid Input";
    }

    const hours: number = Math.floor(minutes / 60);
    const remainingMinutes: number = minutes % 60;

    const hoursText: string = hours > 0 ? `${hours}h` : "";
    const minutesText: string =
      remainingMinutes > 0 ? `${remainingMinutes}min` : "";

    return `${hoursText} ${minutesText}`;
  }
  // const formattedRuntime: string = convertMinutesToHoursAndMinutes(
  //   movie.runtime
  // );
  return (
    <div className="font-Poppins">
      {movie ? (
        <div className="w-[100%]">
          <div className="h-[449px] w-[100%] rounded-[20px] overflow-hidden mb-[31px]">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
              className="h-[100%] w-full aspect-video object-fill rounded-[20px]"
            />
          </div>

          <div className="flex flex-col justify-start items-start mb-[30px]">
            <div className="flex items-center justify-start gap-[17px] mb-[25px]">
              <div className="font-[400] leading-[34.5px] text-[23px] flex items-center justify-start gap-[10px]">
                <p data-testid="movie-title">{movie.title}</p>
                <span>•</span>
                <p data-testid="movie-release-date" className="text-[12px]">
                  {movie.release_date}
                </p>
                <span>•</span>
                <p data-testid="movie-runtime">
                  {movie.runtime
                    ? convertMinutesToHoursAndMinutes(movie.runtime)
                    : ""}
                </p>
                <p>{movie.adult ? "PG-18" : "PG-13"}</p>
              </div>
              <div className="flex justify-start items-center gap-[11px]">
                {movie.genres.map((genre) => (
                  <li
                    key={genre.id}
                    className="list-none flex items-center justify-center bg-[#f8e7eb] rounded-[15px] h-[30px] w-[84px] text-[#b91c1c] font-[500] text-[15px] leading-[22.5px]"
                  >
                    {genre.name}
                  </li>
                ))}
              </div>
            </div>
            <p
              className="font-[400] text-[20px] leading-[30px] text-[#333]"
              data-testid="movie-overview"
            >
              {movie.overview}
            </p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MovieDetails;
