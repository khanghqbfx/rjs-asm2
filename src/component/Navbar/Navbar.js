import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { FaSearch } from "react-icons/fa";
import React from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
const Navbar = () => {
  // Sự kiện click logo home
  const onClickHomeHandler = () => {
    window.location.replace("/");
  };

  const [showModal, setShowModal] = useState(false);
  // Sự kiện click icon search
  
  const hideModalSearch = () => {
    setShowModal(false);
    window.location.replace("/search")
    
  };

  const [backgroundNavbar, setBackgroundNavbar] = useState(true);

  //Kéo xuống quá 100xp background đổi thành màu đen
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setBackgroundNavbar(true);
      } else setBackgroundNavbar(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${classes.navbar} ${
        backgroundNavbar ? classes.bgcolor1 : classes.bgcolor2
      }`}
    >
      <h2 onClick={onClickHomeHandler}>Movie App</h2>
      <Link to="/search">
        <FaSearch    className={classes.icon} />
      </Link>
  
      {showModal && <Item onClose={hideModalSearch} />}
    </div>
  );
};

export default Navbar;