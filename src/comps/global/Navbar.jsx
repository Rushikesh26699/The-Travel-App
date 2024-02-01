import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "../styles/NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState({clicked:false});

  const handleClick =()=>{
    setClick({clicked : !click.clicked})
  }
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">lets.GO</h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={click.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={click.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.className} to={item.url}>
                <i class={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
