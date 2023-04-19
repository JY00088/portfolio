import React from 'react';
import '../css/Sue.scss';
import { ReactComponent as Mal } from '../css/imgs/malpong01.svg';
import { ReactComponent as Mae } from '../css/imgs/malpong02.svg';
const Sue = () => {
  return (
    <>
      <div className="bodycolor04">
        <section className="colorbak04">
          <article className="pone">
            <img src="../img/device.png" />
          </article>

          <video muted autoPlay loop>
            <source src="/videos/Video04.mp4" type="video/mp4" />
          </video>

          <article className="backslid04">
            <h1>SPLATOON SPLATOON SPLATOON SPLATOON SPLATOON SPLATOON </h1>
          </article>

          <article className="imove">
            <img className="maimg014" src="../img/mainicon01.png" />
            <img className="maimg02" src="../img/icon03.png" />
            <img className="maimg03" src="../img/icon06.png" />
          </article>

          <article className="mantext">
            <div className="ahrck">
              <div className="grenbox"></div>
              <h2 className="tntwk01">04.</h2>
              <h2 className="rmfwk01">PRODUCTION-SITE</h2>
            </div>
          </article>

          <article className="svgimgbox">
            <Mal className="Mal" />
            <p className="fel01">
              프로젝트 명 : <br />
              SUNSET SUNRISE MAP
            </p>

            <Mae className="Mae" />
            <p className="fel02">
              프로젝트 참여도 : 100% (1인프로젝트) <br />
              TOOL : HTML, CSS, JS, REACT, FIGAM, Ps, Ai
            </p>
            <div className="Mam">
              <p className="fel03">
                2023년에 제작한 반응형 웹사이트 입니다.
                <br /> 웹사이트 메인과 서브페이지를 구축하였고, <br />
                라이브러리 애니메이션 등을 이용하여 <br />
                다양한 웹사이트를 제작하였습니다.
              </p>
            </div>
          </article>

          <div
            className="view"
            onClick={() =>
              window.open('http://yechan7738.dothome.co.kr/', '_blank')
            }
          >
            view ▸
          </div>
        </section>
      </div>
    </>
  );
};

export default Sue;
