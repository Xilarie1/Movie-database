export default function MovieCard({ itme }) {
  const IMG = (path) => {
    return path
      ? `https://image.tmdb.org/t/p/w342$%7Bpath%7D%60${path}`
      : "https://placehold.co/342x513?text=No+Image";
  };

  const { title, poster_path } = itme;
  return (
    <>
      <h1>MovieCard</h1>
      <h2>{title}</h2>
      <img src={IMG(itme.poster_path)} alt="" />
    </>
  );
}
