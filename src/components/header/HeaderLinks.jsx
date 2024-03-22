import { Link } from "react-router-dom";
import SearchComponent from "./ui/SearchModal";
import NavLink from "./NavLink";

const HeaderLinks = () => {
  return (
    <nav className="flex gap-5 items-center text-slate-900 font-medium">
      <NavLink urlPath="/">Home</NavLink>
      <NavLink urlPath="/categories">Categories</NavLink>
      <SearchComponent />
    </nav>
  );
};

export default HeaderLinks;
