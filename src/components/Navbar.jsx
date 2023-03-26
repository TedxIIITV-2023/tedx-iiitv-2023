import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-[95%] flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </a>
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`/${nav.id}`} onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}>
                {nav.title}
              </a>
            </li>
          ))}
          <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
            <li className="bg-[#FF1D1D] font-poppins rounded text-white px-2 py-1 font-medium cursor-pointer text-[16px]">
              Register
            </li>
          </a>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl align-center text-center `}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    window.location.href = `/${nav.id}`; // Redirect to about.jsx page with the specified ID
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                <li className="bg-[#FF1D1D] rounded font-poppins text-white px-2 py-1 font-medium cursor-pointer text-[16px]">
                  Register
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
