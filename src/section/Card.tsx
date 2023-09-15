import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/styles.module.css";
import Link from "next/link";
// import Image from "next/image";

interface MovieCard {
  id: number;
  title: string;
  adult: boolean;
  genre_ids: [];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
}

type MovieProps = {
  movie: MovieCard;
};

type handleProps = {
  handleNameFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onViewAll: () => void;
};

const Card: React.FC<MovieProps> = ({ movie }) => {
  const [apiKey] = useState("de614f24f1ece2acc56df774d220298f");
  const [moviesData, setMoviesData] = useState<MovieCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<MovieCard[]>([]);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
      );
      const popularMovies = response.data.results;
      const firstTenMovies = popularMovies.slice(0, 10);
      setMoviesData(firstTenMovies);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const filtered: any = moviesData.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())
    );
    setFilteredMovies(filtered);
  }, [nameFilter, moviesData]);

  const viewAllMovies = () => {
    useEffect(() => {
      const fetchMovies = async () => {
        const apiKey = "de614f24f1ece2acc56df774d220298f";

        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
          );
          const popularMovies = response.data.results;
          setMoviesData(popularMovies);
          setLoading(false);
        } catch (error) {
          console.error("Error:", error);
          setLoading(false);
        }
      };

      fetchMovies();
    }, []);
  };

  const handleViewAll = () => {
    setViewMore(false);
    viewAllMovies();
    // onViewAll();
  };

  return (
    <div>
      <div>
        {loading ? (
          <p>loading</p>
        ) : (
          <div>
            {!viewAllMovies ? (
              <ul data-testid="movie-card" className={`${styles.movieLists}`}>
                {filteredMovies.map((movie) => (
                  <Link
                    href="/movie/[movie_id]"
                    as={`/movie/${movie.id}?${apiKey}`}
                    key={movie.id}
                    className={styles.moviePoster}
                    data-testid="movie-poster"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={`${movie.title} Poster`}
                      className={styles.cardImg}
                    />
                    <div className={styles.movieDetails}>
                      <h5
                        className={styles.cardTitle}
                        data-testid="movie-title"
                      >
                        {movie.title}
                      </h5>
                      <p
                        className={styles.release_date}
                        data-testid="movie-release-date"
                      >
                        {movie.release_date}
                      </p>
                    </div>
                  </Link>
                ))}
              </ul>
            ) : (
              <ul data-testid="movie-card" className={`${styles.movieLists}`}>
                {moviesData.map((movie) => (
                  <Link
                    href="/movie/[movie_id]"
                    as={`/movie/${movie.id}?${apiKey}`}
                    key={movie.id}
                    className={styles.moviePoster}
                    data-testid="movie-poster"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={`${movie.title}`}
                      className={styles.cardImg}
                    />
                    <h5 className={styles.cardTitle}>{movie.title}</h5>
                    <p
                      className={styles.release_date}
                      data-testid="movie-title"
                    >
                      {movie.release_date}
                    </p>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
