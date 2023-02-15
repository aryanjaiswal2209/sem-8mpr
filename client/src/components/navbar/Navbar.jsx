import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../button";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          {/* <span className="logo">lamabooking</span> */}
        </Link>
        {user ? 
        (
        <>
        <p>{user.username}</p>
          <div className="navItems">
          <Link to="/login">
          <button className="navButton">Logout</button>
          </Link>          
        </div>
        </>
        )         
        
        : (
          <div className="navItems">
            <Link to="/register">
            <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
            <button className="navButton">Login</button>
            </Link>
          </div>
        )}
          
        
      </div>
    </div>
  );
};

export default Navbar;
