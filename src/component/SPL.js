import React from 'react';
import '../css/SPL.scss';
import { ReactComponent as Mal } from '../css/imgs/malpong01.svg';
import { ReactComponent as Mae } from '../css/imgs/malpong02.svg';

const SPL = () => {
  return (
    <>
      <div className="bodycolor02">
        <section className="colorbak02">
          <article className="pone">
            <img src="../img/device.png" />
          </article>

          <video muted autoPlay loop>
            <source src="/videos/Video02.mp4" type="video/mp4" />
          </video>

          <article className="backslid02">
            <h1>SPLATOON SPLATOON SPLATOON SPLATOON SPLATOON SPLATOON </h1>
          </article>

          <article className="imove">
            <img className="maimg011" src="../img/mainicon03.png" />
            <img className="maimg02" src="../img/icon08.png" />
            <img className="maimg03" src="../img/icon05.png" />
          </article>

          <article className="mantext">
            <div className="ahrck">
              <div className="grenbox"></div>
              <h2 className="tntwk01">02.</h2>
              <h2 className="rmfwk01">CLONE-CODING</h2>
            </div>
          </article>

          <article className="svgimgbox">
            <Mal className="Mal" />
            <p className="fel01">프로젝트 명 : SPLATOON</p>

            <Mae className="Mae" />
            <p className="fel02">
              프로젝트 참여도 : 100% (1인프로젝트) <br />
              Tool : HTML, SCSS, REACT, JS
            </p>
            <div className="Mam">
              <p className="fel03">
                2023년에 제작한 반응형 웹사이트 입니다.
                <br /> 웹사이트 메인을 구축하였고, 리액트 슬라이스 라이브러리,
                <br /> 코드팬을 이용한 애니메이션 등을 이용하여 <br />
                다양한 웹사이트를 제작하였습니다.
              </p>
            </div>
          </article>

          <div
            className="view"
            onClick={() =>
              window.open(
                'https://web-splatoon-108dypx2ale8404ww.sel3.cloudtype.app/',
                '_blank'
              )
            }
          >
            view ▸
          </div>
        </section>
      </div>
    </>
  );
};

export default SPL;
