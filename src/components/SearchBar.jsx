import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/?query=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies, titles, actors..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
