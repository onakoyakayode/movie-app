// import Homepage from "@/components/Homepage";
import Homepage from "@/components/Homepage";

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

const Home: React.FC<MovieProps> = ({ movie }) => {
  return (
    <main>
      <Homepage movie={movie} />
    </main>
  );
};

export default Home;
