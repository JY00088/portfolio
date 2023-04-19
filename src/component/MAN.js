import React from 'react';
import '../css/MAN.scss';
import { Link } from 'react-router-dom';
import Head from './Head';
import { ReactComponent as Mal } from '../css/imgs/malpong01.svg';
import { ReactComponent as Mae } from '../css/imgs/malpong02.svg';

const MAN = () => {
  return (
    <>
      {/* <Head id="man" /> */}
      <div className="bodycolor">
        <section className="colorbak">
          <article className="pone">
            <img src="../img/device.png" />
          </article>

          <video muted autoPlay loop>
            <source src="/videos/Video01.mp4" type="video/mp4" />
          </video>

          <article className="backslid">
            <h1>MANGROVE MANGROVE MANGROVE MANGROVE MANGROVE MANGROVE </h1>
          </article>

          <article className="imove">
            <img className="maimg01" src="../img/mainicon02.png" />
            <img className="maimg02" src="../img/icon06.png" />
            <img className="maimg03" src="../img/icon02.png" />
          </article>

          <article className="mantext">
            <div className="ahrck">
              <div className="grenbox"></div>
              <h2 className="tntwk01">01.</h2>
              <h2 className="rmfwk01">CLONE-CODING</h2>
            </div>
          </article>

          <article className="svgimgbox">
            <Mal className="Mal" />
            <p className="fel01">프로젝트 명 : MANGROVE</p>

            <Mae className="Mae" />
            <p className="fel02">
              프로젝트 참여도 : 100% (1인프로젝트) <br />
              Tool : HTML, CSS
            </p>
            <div className="Mam">
              <p className="fel03">
                2022년에 제작한 반응형 웹사이트 입니다.
                <br /> 웹사이트 메인을 구축하였고, 반응형 슬라이더,
                <br /> clippy을 이용한 애니메이션 등을 이용하여 <br />
                다양한 웹사이트를 제작하였습니다.
              </p>
            </div>
          </article>

          <div
            className="view"
            onClick={() =>
              window.open('https://jy00088.github.io/man/', '_blank')
            }
          >
            view ▸
          </div>
        </section>
      </div>
    </>
  );
};

export default MAN;
