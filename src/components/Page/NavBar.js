import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { db } from "../../firebase";
import { where, getDocs, query, collection } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function Navbar() {
  const { user } = useUserAuth();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const gettingData = async () => {
      const q = query(collection(db, "Users"), where("email", "==", user.email), where("userType", "==", "Admin"));
      const querySnapshot = await getDocs(q);
      let textArray = [];
    
      querySnapshot.forEach((doc) => {
        textArray.push({ id: doc.id, ...doc.data() });
      });  
      if (textArray.length > 0) {
        setAdmin(true);
      } 
    }
    gettingData();
  }, [user]);

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
          {(admin && user) && (
            <CustomLink to="/admin/home">Admin Mode</CustomLink>
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