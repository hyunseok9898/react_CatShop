import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <Link to="/" className="logo">
          <img src={`${process.env.PUBLIC_URL}/images/logo01.png`} alt="logo" />
        </Link>
        <nav>
          <div className="gnb">
            <Link to="/">스크래쳐</Link>
            <Link to="/Superblends">캣 타워</Link>
            <Link to="/">간식</Link>
            <Link to="/">모래</Link>
            <Link to="/">화장실/위생</Link>
            <Link to="/">사료</Link>
          </div>
          <div className="icon">
            <Link to="/">
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </Link>
            <Link to="/">
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </Link>
            <Link to="/Login">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#a646f4" }}
              ></FontAwesomeIcon>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
