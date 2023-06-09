import React from 'react';
import '../css/Work.scss';
import { Link } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/styles.css';

const Work = () => {
  return (
    <div className="bodywork">
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
          <article className="section02z">
            <h1>Works Works Works Works Works Works</h1>
          </article>
          <article className="section02a">
            <img src="../img/icons8-down-90.png" />
            <div className="probox">
              <div className="hwbox">
                <h2>PROJECT</h2>
              </div>
            </div>
          </article>
        </section>

        {/* 두번째 단락 */}
        <section className="section02">
          <article>
            <div className="titlepro">
              <h2>PROJECT</h2>
            </div>
            <div className="linkbox">
              <div className="weaderhover">
                <Link className="mainicon04" to="/Wea">
                  <img src="../img/mainicon04.png" />
                </Link>
                <div className="boxtex04">
                  <p className="text04">
                    WEATHERLOOK WEATHERLOOK WEATHERLOOK WEATHERLOOK WEATHERLOOK
                    WEATHERLOOK
                  </p>
                </div>
              </div>

              <div className="splahover">
                <Link className="mainicon03" to="/SPL">
                  <img src="../img/mainicon03.png" />
                </Link>
                <div className="boxtex03">
                  <p className="text03">
                    SPLATOON SPLATOON SPLATOON SPLATOON SPLATOON SPLATOON
                  </p>
                </div>
              </div>

              <div className="manhover">
                <Link className="mainicon02" to="/MAN">
                  <img src="../img/mainicon02.png" />
                </Link>
                <div className="boxtex02">
                  <p className="text02">
                    MANGROVE MANGROVE MANGROVE MANGROVE MANGROVE MANGROVE
                    MANGROVE
                  </p>
                </div>
              </div>

              <div className="suehover">
                <Link className="mainicon01" to="/Sue">
                  <img src="../img/mainicon01.png" />
                </Link>
                <div className="boxtex01">
                  <p className="text01">
                    SUNSET SUNSET SUNSET SUNSET SUNSET SUNSET SUNSET SUNSET
                    SUNSET
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Work;
