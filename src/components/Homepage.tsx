import React, { useState } from "react";
import styles from "../styles/styles.module.css";
import Hero from "@/section/Hero";
// import MyPagination from "./MyPagination";
import Featured from "@/section/Featured";
import Footer from "@/section/Footer";

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

const Homepage: React.FC<MovieProps> = ({ movie }) => {
  const [nameFilter, setNameFilter] = useState([]);

  const handleNameFilter = (e: any) => {
    setNameFilter(e.target.value);
  };

  return (
    <div className="">
      <Hero handleNameFilter={handleNameFilter} />
      <Featured movie={movie} />
      <Footer />
    </div>
  );
};

export default Homepage;
