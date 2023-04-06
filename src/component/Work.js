import React from 'react';
import '../css/Work.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../css/imgs/logo_copy_w.svg';

// scroll 이벤트
import Scro from './Scro';

// swiper
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/styles.css';
// import required modules
import { Navigation } from 'swiper';

const Work = () => {
  return (
    <>
      <div className="intro">{/* <img src="../img/noiz.jpg" /> */}</div>
      <header>
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

      <main>
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
                    <img src="https://img.icons8.com/ios-glyphs/30/null/mail-account.png" />
                  </div>
                </div>

                <p>dobisms@gmail.com</p>
              </li>
            </ul>
          </article>
          <article className="section02a">
            <img src="../img/icons8-down-90.png" />
            <h1>Works.</h1>
            {/* <div className="paragraphbox">
              <img className="memoji01" src="../img/03.png" />
              <img className="noi" src="../img/noiz.jpg " />
            </div> */}
          </article>
          <article className="section03a">
            <p>
              해당 작업물은 해상도 1920*1080에 최적화되어 있습니다.
              <br /> 본 페이지는 상업적 목적이 아닌 개인 포트폴리용으로 만들어진
              사이트입니다. LEEJIYOUNG ⓒ 2023 PORTFOLIO
            </p>
          </article>
        </section>

        {/* 두번째 단락 스크롤 취미 */}
        <section className="section02">
          <div className="rotatebox">{<Scro />}</div>

          <img src="../img/01.png" />
        </section>

        {/* 세번째 단락 슬라이드 (나의 프로젝트) */}
        <section className="section03">
          <div className="swiperbox">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="slide1">
                <div className="project_1">
                  <div className="pro_title">
                    <h2>
                      01.<p>CLONE-CODING</p>
                    </h2>
                  </div>
                  {/* 타이틀밑에선 */}
                  <div className="title_boder"></div>

                  <div className="pro_detail">
                    <div className="imgbox">
                      <div className="live02">
                        <img src="../img/colone02.png" />
                      </div>
                      <div className="datail_probox">
                        <p>프로젝트 명 : 맹그로브 mangrove </p>
                        <p>프로젝트 구성 : 반응형웹 + 크로스브라우징 main</p>
                        <p>프로젝트 참여도 : 100%(1인 프로젝트)</p>
                        <p>TOOL : HTML, CSS, JS</p>
                        <button
                          onClick={() =>
                            window.open(
                              'https://web-man-108dypx2ale8404ww.sel3.cloudtype.app/',
                              '_blank'
                            )
                          }
                        >
                          VIEW ➔
                        </button>
                      </div>
                    </div>

                    {/* 선 */}
                    <div className="boderbox">
                      {/*  <div className="order_boder01"></div> */}
                      <div className="order_boder02"></div>
                    </div>

                    <div className="pro_order">
                      <h2 className="so">1/4</h2>
                    </div>
                  </div>

                  {/* 이미지 밑에 선 */}
                  <div className="detail_boder"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide2">
                <div className="project_2">
                  <div className="pro_title">
                    <h2>
                      02.<p>CLONE-CODING</p>
                    </h2>
                  </div>
                  {/* 타이틀밑에선 */}
                  <div className="title_boder"></div>

                  <div className="pro_detail">
                    <div className="imgbox">
                      <div className="live02">
                        <img src="../img/splatoon.webp" />
                      </div>
                      <div className="datail_probox">
                        <p>프로젝트 명 : 스플래툰 Splatoon </p>
                        <p>프로젝트 구성 : 반응형웹 + 크로스브라우징 main</p>
                        <p>프로젝트 참여도 : 100%(1인 프로젝트)</p>
                        <p>TOOL : HTML, CSS, JS, REACT</p>
                        <button
                          onClick={() =>
                            window.open(
                              'https://web-splatoon-108dypx2ale8404ww.sel3.cloudtype.app/',
                              '_blank'
                            )
                          }
                        >
                          VIEW ➔
                        </button>
                      </div>
                    </div>

                    {/* 선 */}
                    <div className="boderbox">
                      {/*  <div className="order_boder01"></div> */}
                      <div className="order_boder02"></div>
                    </div>

                    <div className="pro_order">
                      <h2 className="so">2/4</h2>
                    </div>
                  </div>

                  {/* 이미지 밑에 선 */}
                  <div className="detail_boder"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide3">
                <div className="project_3">
                  <div className="pro_title">
                    <h2>
                      03.<p>TEAM-PROJECT</p>
                    </h2>
                  </div>
                  {/* 타이틀밑에선 */}
                  <div className="title_boder"></div>

                  <div className="pro_detail">
                    <div className="imgbox">
                      <div className="live02">
                        <img src="../img/t1.png" />
                      </div>
                      <div className="datail_probox">
                        <p>프로젝트 명 : 맹그로브 mangrove </p>
                        <p>
                          프로젝트 구성 : 반응형웹 + 크로스브라우징 intro +
                          main+ sub
                        </p>
                        <p>프로젝트 참여도 : 33.3%(3인 프로젝트)</p>
                        <p>TOOL : HTML, CSS, JS, ILLUSTRATION</p>
                        <button
                          onClick={() =>
                            window.open(
                              'https://web-sunset-108dypx2ale8404ww.sel3.cloudtype.app/',
                              '_blank'
                            )
                          }
                        >
                          VIEW ➔
                        </button>
                      </div>
                    </div>
                    {/* 선 */}
                    <div className="boderbox">
                      {/* <div className="order_boder01"></div> */}
                      <div className="order_boder02"></div>
                    </div>
                    <div className="pro_order">
                      <h2 className="so">3/4</h2>
                    </div>
                  </div>

                  {/* 이미지 밑에 선 */}
                  <div className="detail_boder"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide4">
                <div className="project_4">
                  <div className="pro_title">
                    <h2>
                      04.<p>PRODUCTION-SITE</p>
                    </h2>
                  </div>
                  {/* 타이틀밑에선 */}
                  <div className="title_boder"></div>

                  <div className="pro_detail">
                    <div className="imgbox">
                      <div className="live02">
                        <img src="../img/sunset.png" />
                      </div>
                      <div className="datail_probox">
                        <p>프로젝트 명 : 일몰일출지도맵 SUNSET SUNRISE MAP </p>
                        <p>
                          프로젝트 구성 : 반응형웹 + 크로스브라우징 main+sub
                        </p>
                        <p>프로젝트 참여도 : 100%(1인 프로젝트)</p>
                        <p>
                          TOOL : HTML, CSS, JS, REACT, FIGAM, PHOTOSHOP,
                          ILLUSTRATION
                        </p>
                        <button
                          onClick={() =>
                            window.open(
                              'https://web-sunset-108dypx2ale8404ww.sel3.cloudtype.app/',
                              '_blank'
                            )
                          }
                        >
                          VIEW ➔
                        </button>
                      </div>
                    </div>

                    {/* 선 */}
                    <div className="boderbox">
                      {/* <div className="order_boder01"></div> */}
                      <div className="order_boder02"></div>
                    </div>

                    <div className="pro_order">
                      <h2 className="so">4/4</h2>
                    </div>
                  </div>

                  {/* 이미지 밑에 선 */}
                  <div className="detail_boder"></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
};

export default Work;
