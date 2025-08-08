import {
  LuBriefcase,
  LuCode2,
  LuFolder,
  LuHome,
  LuMenu,
  LuX,
} from "react-icons/lu";
import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ handleScroll }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const tabs = [
    {
      label: "Home",
      Icon: LuHome,
      key: "home",
    },
    {
      label: "Skills",
      Icon: LuCode2,
      key: "skills",
    },
    {
      label: "Projects",
      Icon: LuFolder,
      key: "projects",
    },
    {
      label: "Profile",
      Icon: LuBriefcase,
      key: "profile",
    },
  ];

  return (
    <header
      className={`header fixed top-0 shadow-md backdrop-blur bg-neutral-950/80 border-b border-neutral-800 w-full z-20  transition-all duration-300 ease-in-out`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        <div
          className="logo cursive-text cursor-pointer flex items-center gap-2"
          onClick={() => {
            setMenuOpen(false);
            handleScroll("home");
          }}
        >
          {/* <img src={logo} alt="Sonu Munda" className="h-10 rounded" /> */}
          <h1 className="text-xl font-bold  text-white flex gap-1  px-3 py-2">
            <span className="text-neutral-200">Sonu</span>
            <span className="text-neutral-200">Munda</span>
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
          className={`md:flex md:items-center md:gap-6 font-medium text-white absolute md:static top-full left-0 w-full md:w-auto bg-neutral-900 md:bg-transparent transition-all duration-500 ease-in-out ${
            menuOpen
              ? "opacity-100 max-h-[500px]"
              : "opacity-0 max-h-0 overflow-hidden md:opacity-100 md:max-h-none"
          }`}
        >
          <ul className="flex flex-col md:flex-row">
            {tabs.map(({ label, Icon, key }, index) => {
              return (
                <li key={index} className="list-item">
                  <button
                    type="button"
                    className="flex block rounded hover:bg-neutral-800 items-center gap-3 w-full p-3 text-neutral-200 hover:text-white transition-colors duration-200"
                    onClick={() => {
                      setMenuOpen(false);
                      handleScroll(key);
                    }}
                  >
                    <Icon size={22} aria-hidden="true" />
                    <span className="text-base font-medium">{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleScroll: PropTypes.func.isRequired,
};

export default Header;
