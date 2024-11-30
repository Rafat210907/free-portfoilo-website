import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="max-w-[100%] fixed backdrop-blur-lg bg-transparent  border-b border-white/5 top-0 z-50 w-full">
      <div className="max-width flex h-16 sm:h-20 w-full justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="h-10" src={logo} alt="Logo" />
            <h1 className="text-lg sm:text-3xl font-semibold text-green-500">
              Design
            </h1>
          </div>
        </Link>

        <nav >
          <ul
            className={
              isOpen ? "side-nav" : "nav-links  md:flex gap-x-10 text-[17px]"
            }
          >
            <NavLink to="/#about">
              <li
                className="text-black duration-300 mt-6 md:mt-0 hover:text-green-400 nab"
                onClick={handleClose}
              >
                About
              </li>
            </NavLink>

            <NavLink to="/#skills">
              <li
                className="text-black duration-300 hover:text-green-400 nab "
                onClick={handleClose}
              >
                Skills
              </li>
            </NavLink>

            <li
              className="text-black duration-300 hover:text-green-400 nab"
              onClick={handleClose}
            >
              <NavLink to="/#Portfolio">Portfolio</NavLink>
            </li>
            <li
              className="text-black duration-300 hover:text-green-400 nab"
              onClick={handleClose}
            >
              <NavLink to="/#Testimonial">Testimonial</NavLink>
            </li>
            <li>
            <Link to='/' className="px-4 py-4 border-2 border-green-600 hover:border-transparent hover:bg-green-600 rounded-[10px] font-semibold  duration-300 text-white md:hidden">Download CV</Link>
            </li>
          </ul>
        </nav>
        <div className="max-[888px]:hidden">
          <Link to='/' className="px-4 py-4 border-2 border-green-600 hover:border-transparent hover:bg-green-600 rounded-[10px] font-semibold  duration-300 text-black">Download CV</Link>
        </div>
        <div
          className="md:hidden w-10 h-[35px] p-2  rounded-[4px] cursor-pointer flex justify-center items-center z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={isOpen ? "active-navbar" : "navbar"}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
