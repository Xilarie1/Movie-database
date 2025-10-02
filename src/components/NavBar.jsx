import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
export default function NavBar() {
  return (
    <header>
      <Link to="/">Home</Link>
      <SearchBar />
    </header>
  );
}
