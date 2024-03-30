
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Nav () {
    return(
      <nav>
        <Link to="/">CashFlow</Link>
        <ul>
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/settings">Settings</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
        </ul>
      </nav>
    );
}

function CustomLink( { to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return (
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
    </li>
  )
}

export default Nav;