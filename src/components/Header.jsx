import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// import logo from "../assets/images/logo.png";
import {
  LuBriefcase,
  LuFileText,
  LuHome,
  LuMenu,
  LuUser2,
  LuX,
} from "react-icons/lu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fixedHeader, setFixedHeader] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setFixedHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-300 ease-in-out ${
        fixedHeader
          ? "fixed top-0 shadow-md backdrop-blur bg-gray-950/80"
          : "relative bg-gray-950"
      } border-b border-gray-800 w-full z-20`}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center gap-2">
          {/* <img src={logo} alt="Sonu Munda" className="h-10 rounded" /> */}
          <h1 className="text-xl font-bold uppercase text-white flex gap-1  px-3 py-2">
            <span className="text-gray-200">Sonu</span>
            <span className="text-sky-400">Munda</span>
          </h1>
        </div>

        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>

        {/* Navigation */}
        <nav
          className={`md:flex md:items-center md:gap-6 font-medium text-white absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-500 ease-in-out ${
            menuOpen
              ? "opacity-100 max-h-[500px]"
              : "opacity-0 max-h-0 overflow-hidden md:opacity-100 md:max-h-none"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-0 py-4 md:py-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 px-3 rounded-full hover:text-sky-300 transition ${
                    isActive ? "text-sky-400 bg-gray-800" : "text-white"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                <LuHome size={20} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 px-3 rounded-full hover:text-sky-300 transition ${
                    isActive ? "text-sky-400 bg-gray-800" : "text-white"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                <LuUser2 size={20} /> About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 px-3 rounded-full hover:text-sky-300 transition ${
                    isActive ? "text-sky-400 bg-gray-800" : "text-white"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                <LuFileText size={20} /> Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 px-3 rounded-full hover:text-sky-300 transition ${
                    isActive ? "text-sky-400 bg-gray-800" : "text-white"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                <LuBriefcase size={20} /> Work
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
