import React, { useState } from 'react';
import '../css/Work.scss';
import '../css/About.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo2 } from '../css/imgs/logo_w_title.svg';

const Head = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [animated, setAnimated] = useState(false);
  const navigation = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
    }, 1000);
    setShowMenu(false);
    navigation('/MAN');
  };

  return (
    <header className="aboutheader">
      <div className="toglebox">
        <input
          type="checkbox"
          id="check_box"
          onClick={toggleMenu}
          checked={showMenu}
        />
        <label htmlFor="check_box">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div id="side_menu" className={showMenu ? 'active' : ''}>
          <ul className="ulbox">
            <li>
              <Link
                className={`man ${animated ? 'animated' : ''}`}
                to="/MAN"
                onClick={handleLinkClick}
              >
                MANGROVE
              </Link>
            </li>
            <li>
              <a
                className={`spl ${animated ? 'animated' : ''}`}
                href="#"
                onClick={handleLinkClick}
              >
                SPLATOON
              </a>
            </li>
            <li>
              <a
                className={`wea ${animated ? 'animated' : ''}`}
                href="#"
                onClick={handleLinkClick}
              >
                WEATHERLOOK
              </a>
            </li>
            <li>
              <a
                className={`sue ${animated ? 'animated' : ''}`}
                href="#"
                onClick={handleLinkClick}
              >
                SUNSET
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lobox">
        <Logo2 className="logow" />
      </div>

      <nav>
        <Link to="/">work</Link>
        <Link
          onClick={() => {
            window.open('../이지영_이력서.pdf', '_blank');
          }}
        >
          reume
        </Link>
        <Link to="/about">about</Link>
      </nav>
    </header>
  );
};

export default Head;
