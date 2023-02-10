import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";


export default function Navbar() {
  const { user } = useUserAuth();
    return (
      <nav className="nav">
        <Link to="/home" className="site-title">
          DesireToDesign
        </Link>
        <ul>
          {user && (
            <CustomLink to="/signout">Sign Out</CustomLink>
          )}
          {!user && (
            <CustomLink to="/signup">Sign Up</CustomLink>
          )}
          {user && (
            <CustomLink to={`/user/${user.email}`}>{user.email}</CustomLink>
          )}
        </ul>
      </nav> 
    )
  }
  
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }