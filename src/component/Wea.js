import React from 'react';
import '../css/Wea.scss';
import { ReactComponent as Mal } from '../css/imgs/malpong01.svg';
import { ReactComponent as Mae } from '../css/imgs/malpong02.svg';
const Wea = () => {
  return (
    <>
      <div className="bodycolor03">
        <section className="colorbak03">
          <article className="pone">
            <img src="../img/device.png" />
          </article>

          <video muted autoPlay loop>
            <source src="/videos/Video03.mp4" type="video/mp4" />
          </video>

          <article className="backslid03">
            <h1>
              WEATHERLOOK WEATHERLOOK WEATHERLOOK WEATHERLOOK WEATHERLOOK
              WEATHERLOOK{' '}
            </h1>
          </article>

          <article className="imove">
            <img className="maimg013" src="../img/mainicon04.png" />
            <img className="maimg02" src="../img/icon04.png" />
            <img className="maimg03" src="../img/icon03.png" />
          </article>

          <article className="mantext">
            <div className="ahrck">
              <div className="grenbox"></div>
              <h2 className="tntwk01">03.</h2>
              <h2 className="rmfwk01">TEAM-PROJECT</h2>
            </div>
          </article>

          <article className="svgimgbox">
            <Mal className="Mal" />
            <p className="fel01">프로젝트 명 : WEATHERLOOK</p>

            <Mae className="Mae" />
            <p className="fel02">
              프로젝트 참여도 : 33.3%(3인 프로젝트) <br />
              TOOL : HTML, CSS, JS, ILLUSTRATION
            </p>
            <div className="Mam">
              <p className="fel03">
                2023년에 제작한 반응형 웹사이트 입니다.
                <br /> 크로스브라우징 intro 를 제작하고 MAIN + SUB 사이트를
                구측하였습니다.
                <br /> 코드팬을 이용한 애니메이션 등을 이용하여 <br />
                다양한 웹사이트를 제작하였습니다.
              </p>
            </div>
          </article>

          <div
            className="view"
            onClick={() =>
              window.open(
                'https://weatherlook.github.io/WeatherLook/',
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

export default Wea;
