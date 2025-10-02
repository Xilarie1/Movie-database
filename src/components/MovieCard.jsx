export default function MovieCard({ item }) {
  const IMG = (path) =>
    path
      ? `https://image.tmdb.org/t/p/w342${path}`
      : "https://placehold.co/342x513?text=No+Image";
  const { title, poster_path } = item;

  return (
    <>
      <h2>{title}</h2>
      <img src={IMG(poster_path)} alt={title} />
    </>
  );
}
