import React, { useState } from 'react';
import '../css/Work.scss';
import '../css/About.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo2 } from '../css/imgs/logo_w_title.svg';

const Head = () => {
  const [t, setT] = useState(false);
  console.log(t);
  const test = () => {};

  return (
    <header className="aboutheader">
      <div className="toglebox">
        <input
          type="checkbox"
          id="check_box"
          onClick={() => {
            setT(!t);
          }}
        />
        <label for="check_box">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div id="side_menu" className={t ? 'active' : ''}>
          <ul className="ulbox">
            <li>
              <Link className="man" to="/Pro">
                MANGROVE
              </Link>
            </li>
            <li>
              <a className="spl" href="#">
                SPLATOON
              </a>
            </li>
            <li>
              <a className="wea" href="#">
                WEATHERLOOK
              </a>
            </li>
            <li>
              <a className="sue" href="#">
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
        <Link onClick={() => window.open('../이지영_이력서.pdf', '_blank')}>
          reume
        </Link>
        <Link to="/about">about</Link>
      </nav>
    </header>
  );
};

export default Head;
