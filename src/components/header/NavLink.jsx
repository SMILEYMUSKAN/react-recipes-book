import { Link } from "react-router-dom";

const NavLink = ({ children, urlPath }) => (
  <Link to={urlPath} className="hover:text-sky-500 hover:transition">
    {children}
  </Link>
);

export default NavLink;
