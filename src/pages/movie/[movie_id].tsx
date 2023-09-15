import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import MovieDetails from "../MovieDetails";
import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
interface MovieCard {
  id: number;
  title: string;
  adult: boolean;
  genre_ids: number[];
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
  movieId: string | string[] | undefined;
}

interface MoviePageProps {
  movie: MovieCard;
}

const MoviePage: React.FC<MoviePageProps> = ({}) => {
  const router = useRouter();
  const { movie_id } = router.query;
  // const movieId = typeof movie_id === "string" ? parseInt(movie_id, 10) : -1;
  const [movie, setMovie] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (movie_id) {
      // Make an API request to fetch movie details
      const apiKey = "de614f24f1ece2acc56df774d220298f";

      axios
        .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`)
        .then((response) => {
          const movieData = response.data;
          setIsLoading(false);
          setMovie(movieData);
          console.log(movieData);
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
          setIsLoading(false);
        });
    }
  }, [movie_id]);

  if (router.isFallback || !movie) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <Dashboard>
      <MovieDetails movie={movie} movieId={movie_id as string} />
    </Dashboard>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], // No pre-rendered paths
    fallback: true, // Render on-demand
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { movie_id } = params as { movie_id: string };
  if (!movie_id) {
    return {
      notFound: true,
    };
  }
  try {
    const apiKey = "de614f24f1ece2acc56df774d220298f";

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`
    );

    const movie = response.data as MovieCard;
    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return {
      notFound: true,
    };
  }
};

export default MoviePage;
