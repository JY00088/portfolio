import React from 'react';
import '../css/Work.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../css/imgs/logo_w_title.svg';

// scroll 이벤트
import Scro from './Scro';
import scrollbar from 'smooth-scrollbar';

// swiper
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/styles.css';
// import required modules
import { Navigation } from 'swiper';

const Work = () => {
  return (
    <div className="bodywork" id="smooth-wrapper">
      <div id="smooth-content">
        <header className="workheader">
          <div className="lobox">
            <Logo className="logow" />
          </div>

          <nav>
            <Link to="/">work</Link>
            <Link onClick={() => window.open('../이지영_이력서.pdf', '_blank')}>
              reume
            </Link>
            <Link to="/about">about</Link>
          </nav>
          <div className="blank_space"></div>
        </header>

        <main className="workmain">
          {/* 첫번째 단락 */}
          <section className="section01">
            <article className="section01a">
              <ul>
                <li className="paragraph01">
                  TO <strong>LISTEN</strong> AND <strong>RESOLVE</strong> <br />
                  WEB PUBLISHER WORKKING HARD
                  <br />
                  THIS IS <strong>JIYOUNG LEE.</strong>
                </li>
                {/*  <li className="paragraph02">Works.</li> */}
                <li className="paragraph03">
                  <div className="stbox">
                    <h2 className="strong">CONTACT </h2>
                    <div className="vvmail">
                      <img src="../img/one.png" />
                    </div>
                  </div>

                  <p>dobisms@gmail.com</p>
                </li>
              </ul>
            </article>
            <article className="section02a">
              <img src="../img/icons8-down-90.png" />
              <h1>Works.</h1>
            </article>
            <div className="float">
              <div className="secfloat01"></div>
              <div className="secfloat02"></div>
            </div>
          </section>

          {/* 두번째 단락 스크롤 취미 */}
          {/* <section className="section02">
            <div className="rotatebox">{<Scro />}</div>

            <video className="vid01" muted autoPlay loop>
              <source src="/videos/Video01.mp4" type="video/mp4" />
            </video>
            <video className="vid02" muted autoPlay loop>
              <source src="/videos/Video02.mp4" type="video/mp4" />
            </video>
            <img className="ponimg01" src="../img/pon.png" />
            <img className="ponimg02" src="../img/pon.png" />
          </section> */}

          {/* 세번째 단락 슬라이드 (나의 프로젝트) */}

          <section className="section03">
            <div className="probox">
              <div className="pro">Project</div>
            </div>
            <div className="container">
              <div
                className="card"
                onClick={() =>
                  window.open('https://jy00088.github.io/man/', '_blank')
                }
              >
                <div className="cardbox">
                  <div className="pro_title">
                    <h2>
                      01.<p>CLONE-CODING</p>
                    </h2>
                  </div>
                  <div className="datail_probox">
                    <p>프로젝트 명 : 맹그로브 mangrove </p>
                    <p>프로젝트 구성 : 반응형웹 + 크로스브라우징 main</p>
                    <p>프로젝트 참여도 : 100%(1인 프로젝트)</p>
                    <p>TOOL : HTML, CSS, JS</p>
                  </div>
                  <div className="live02">
                    <img src="../img/colone02.png" />
                  </div>
                </div>
              </div>
              <div
                className="card"
                onClick={() =>
                  window.open(
                    'https://web-splatoon-108dypx2ale8404ww.sel3.cloudtype.app/',
                    '_blank'
                  )
                }
              >
                <div className="cardbox">
                  <div className="pro_title">
                    <h2>
                      02.<p>CLONE-CODING</p>
                    </h2>
                  </div>
                  <div className="datail_probox">
                    <p>프로젝트 명 : 스플래툰 Splatoon </p>
                    <p>프로젝트 구성 : 반응형웹 + 크로스브라우징 main</p>
                    <p>프로젝트 참여도 : 100%(1인 프로젝트)</p>
                    <p>TOOL : HTML, CSS, JS, REACT</p>
                  </div>
                  <div className="live02">
                    <img src="../img/splatoon.webp" />
                  </div>
                </div>
              </div>
              <div
                className="card"
                onClick={() =>
                  window.open(
                    'https://weatherlook.github.io/WeatherLook/',
                    '_blank'
                  )
                }
              >
                <div className="cardbox">
                  <div className="pro_title">
                    <h2>
                      03.<p>TEAM-PROJECT</p>
                    </h2>
                  </div>
                  <div className="datail_probox">
                    <p>프로젝트 명 : 맹그로브 mangrove </p>
                    <p>
                      프로젝트 구성 : 반응형웹 + 크로스브라우징 intro + main +
                      sub
                    </p>
                    <p>프로젝트 참여도 : 33.3%(3인 프로젝트)</p>
                    <p>TOOL : HTML, CSS, JS, ILLUSTRATION</p>
                  </div>
                  <div className="live02">
                    <img src="../img/t1.png" />
                  </div>
                </div>
              </div>
              <div
                className="card"
                onClick={() =>
                  window.open('http://yechan7738.dothome.co.kr/', '_blank')
                }
              >
                <div className="cardbox">
                  <div className="pro_title">
                    <h2>
                      04.<p>PRODUCTION-SITE</p>
                    </h2>
                  </div>
                  <div className="datail_probox">
                    <p>프로젝트 명 : 일몰 일출 지도맵 SUNSET SUNRISE MAP </p>
                    <p>프로젝트 구성 : 반응형웹 + 크로스브라우징 main + sub</p>
                    <p>프로젝트 참여도 : 100%(1인 프로젝트)</p>
                    <p>
                      TOOL : HTML, CSS, JS, REACT, FIGAM, PHOTOSHOP,
                      ILLUSTRATION
                    </p>
                  </div>
                  <div className="live02">
                    <img src="../img/sunset.png" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Work;
