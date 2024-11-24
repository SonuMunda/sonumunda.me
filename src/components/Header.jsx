import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";


const Header = () => {
  return (
    <header className="bg-slate-950 border-b border-slate-800 py-2 px-4 flex items-center md:justify-around justify-between fixed w-full z-10">
      <img
        src={logo}
        alt="Sonu Munda"
        className="logo h-10  rounded mx-2 sm:block md:hidden"
      />
      <h1 className="logo text-xl font-semibold py-2 flex gap-1 uppercase block hidden md:block">
        <span className="text-white">Sonu</span>
        <span className="text-cyan-300">Munda</span>
      </h1>
      <nav className="navbar">
        <ul className="nav-list flex gap-4 text-white">
          <li className="list-item">
            <NavLink to={"/"} className="nav-link md:p-2 p-0">
              Home
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to={"/about"} className="nav-link md:p-2 p-0">
              About
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to={"/resume"} className="nav-link md:p-2 p-0">
              Resume
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to={"/work"} className="nav-link md:p-2 p-0">
              Work
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
