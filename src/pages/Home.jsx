import MovieCard from "../components/MovieCard";
import { useTrending, usePopularMovies } from "../hooks/useTmdb";

export default function Home() {
  const { data: trending } = useTrending();
  const { data: popular } = usePopularMovies();

  return (
    <>
      <h1>hello from home</h1>
      <MovieCard />
      {trending.results.map((itme) => (
        <MovieCard key={itme.id} item={item} />
      ))}
    </>
  );
}
