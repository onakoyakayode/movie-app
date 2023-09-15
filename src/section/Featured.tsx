import React, { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./Card";
import axios from "axios";

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
  backgroundImageUrl: string;
}

type MovieProps = {
  movie: MovieCard;
};

type handleProps = {
  handleNameFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Featured: React.FC<MovieProps> = ({ movie }) => {
  const [movies, setAllMovies] = useState<MovieCard[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<MovieCard[]>([]);
  //   const [loading, setLoading] = useState(true);
  const handleViewMore = async () => {
    const apiKey = "de614f24f1ece2acc56df774d220298f";
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      setAllMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [viewMore, setViewMore] = useState(false);

  const handleViewAll = () => {
    setViewMore(false);
    // Your logic here
  };

  useEffect(() => {
    const filtered: any = movies.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())
    );
    setFilteredMovies(filtered);
  }, [nameFilter, movies]);

  return (
    <div className={`${styles.featured} ${styles.container}`}>
      <div className={styles.featuredTop}>
        <h2>Featured Movie</h2>
        <p className={styles.seeMore} onClick={handleViewAll}>
          See more
          <IoIosArrowForward className={styles.seeMoreIcon} />
        </p>
      </div>
      <Card movie={movie} />
    </div>
  );
};

export default Featured;
