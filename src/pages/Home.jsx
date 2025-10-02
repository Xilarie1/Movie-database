import Carousel from "../components/Carousel.jsx";
import { useSearchParams } from "react-router-dom";
import { useTrending, usePopularMovies, useSearch } from "../hooks/useTmdb.js";
import MovieCard from "../components/MovieCard.jsx";

export default function Home() {
  const [params] = useSearchParams();
  const query = params.get("query");

  const { data: trending } = useTrending("movie", "week");
  const { data: popular, error } = usePopularMovies();
  const { data: search } = useSearch(query || undefined);

  if (query) {
    return (
      <div className="grid">
        <h2>Search results</h2>
        <div className="grid-cards">
          {search?.results?.map((item) => (
            <MovieCard key={`${item.media_type} ${item.id}`} item={item} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Carousel title="Trending this week" items={trending?.results} />
      <Carousel title="Popular" items={popular?.results} />
    </>
  );
}
