import React from 'react';

const test = () => {
  return (
    <div>
      <div className="swiperbox">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
                        window.open('https://jy00088.github.io/man/', '_blank')
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
                      프로젝트 구성 : 반응형웹 + 크로스브라우징 intro + main +
                      sub
                    </p>
                    <p>프로젝트 참여도 : 33.3%(3인 프로젝트)</p>
                    <p>TOOL : HTML, CSS, JS, ILLUSTRATION</p>
                    <button
                      onClick={() =>
                        window.open(
                          'https://weatherlook.github.io/WeatherLook/',
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
                    <p>프로젝트 명 : 일몰 일출 지도맵 SUNSET SUNRISE MAP </p>
                    <p>프로젝트 구성 : 반응형웹 + 크로스브라우징 main + sub</p>
                    <p>프로젝트 참여도 : 100%(1인 프로젝트)</p>
                    <p>
                      TOOL : HTML, CSS, JS, REACT, FIGAM, PHOTOSHOP,
                      ILLUSTRATION
                    </p>
                    <button
                      onClick={() =>
                        window.open(
                          'http://yechan7738.dothome.co.kr/',
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
    </div>
  );
};

export default test;
