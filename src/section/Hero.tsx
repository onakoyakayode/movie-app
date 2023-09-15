import React, { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import logo from "../assets/tv.svg";
import Menu from "../assets/Menu.svg";
import Image from "next/image";
import IMDB from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";
import tomato from "../assets/PngItem_1381056 1.svg";
import { BiSearch } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";
// import MyPagination from "@/component/MyPagination";
import axios from "axios";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

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

type handleProps = {
  handleNameFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Hero: React.FC<handleProps> = ({ handleNameFilter }) => {
  const [movies, setMovies] = useState<MovieCard[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string | null>(
    null
  );
  const [nameFilter, setNameFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<MovieCard[]>([]);
  const itemsPerPage: number = 1;
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  // const totalItems = 5;

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const apiKey = "de614f24f1ece2acc56df774d220298f";

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
      );
      const popularMovies = response.data.results;
      const firstFiveMovies = popularMovies.slice(0, 5);
      setCurrentPage(firstFiveMovies.currentPage);

      setMovies(firstFiveMovies);

      setCurrentPage(1);
      if (firstFiveMovies.length > 0) {
        setBackgroundImageUrl(
          `https://image.tmdb.org/t/p/original/${firstFiveMovies[0].backdrop_path}`
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const filtered: any = movies.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())
    );
    setFilteredMovies(filtered);
  }, [nameFilter, movies]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const [itemsToShow, setItemsToShow] = useState<MovieCard[]>([]);
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow: MovieCard[] = movies.slice(startIndex, endIndex);
    setItemsToShow(itemsToShow);
    if (itemsToShow.length > 0) {
      setBackgroundImageUrl(
        `https://image.tmdb.org/t/p/original/${itemsToShow[0].backdrop_path}`
      );
    }
  }, [currentPage, movies]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${
            backgroundImageUrl || null
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "650px",
        }}
        className={`${styles.hero}  ${styles.container}`}
      >
        <nav className={styles.nav}>
          <div className={styles.navLogo}>
            <Image src={logo} alt="Logo" />
            <h3 className="text-[#fff]">MovieBox</h3>
          </div>
          <div className={styles.searchBox}>
            <label htmlFor="search">
              <input
                id="search"
                type="text"
                placeholder="What do you want to watch?"
                onChange={handleNameFilter}
              />
            </label>
            <BiSearch className={styles.searchIcon} />
          </div>
          <div className={styles.signIn}>
            <Link href="#">Sign in</Link>
            <Image src={Menu} alt="MenuBar" className={styles.menuIcon} />
          </div>
        </nav>
        <div className={styles.heroBox}>
          <div className={styles.heroTitle}>
            {itemsToShow.map((movie) => (
              <div
                style={{
                  backgroundImage: `url(${movie.backgroundImageUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  // minHeight: "650px",
                }}
                key={movie.id}
              >
                <div className={styles.descriptionBox}>
                  <h1>{movie.title}</h1>
                  <div className={styles.rating}>
                    <div className={styles.rating1}>
                      <Image
                        src={IMDB}
                        alt={IMDB}
                        className={styles.ratingImg}
                      />
                      <p> 86.0 / 100</p>
                    </div>
                    <div className={styles.rating2}>
                      <Image
                        src={tomato}
                        alt={tomato}
                        className={styles.ratingImg2}
                      />
                      <p>97%</p>
                    </div>
                  </div>
                  <p className={styles.descriptionBoxText}>{movie.overview}</p>
                  <button className={styles.buttonTrailer}>
                    <AiFillPlayCircle className={styles.buttonTrailerIcon} />
                    Watch trailer
                  </button>
                </div>
              </div>
            ))}

            <Pagination className={styles.pagination}>
              {[...Array(totalPages)].map((_, index: number) => (
                <PaginationItem
                  key={index}
                  active={index + 1 === currentPage}
                  className={styles.pageActive}
                >
                  <PaginationLink onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
