import React, { useRef } from 'react';
import '../css/About.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo2 } from '../css/imgs/logo_w_title.svg';
import { ReactComponent as CC } from '../css/imgs/cont.svg';

// scroll 이벤트
import Ani from './Ani';

const About = () => {
  const scrollRef = useRef(null);

  const handleWheel = (event) => {
    const delta = Math.max(-1, Math.min(1, event.deltaY));
    const scrollRefCurrent = scrollRef.current;

    // 가로 스크롤의 너비 만큼 스크롤 속도 조절
    scrollRefCurrent.scrollLeft -= delta * 150;
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="bodyabout">
      <main className="aboutmain">
        {/* 첫번째 단락 */}
        <article className="section11">
          <section className="section11_1">
            <div className="fix">
              <div className="title11">
                <h1 className="bigtitle">
                  Publisher with a <img src="../img/mini37.png" /> sense of
                  design.
                </h1>
                <div className="bigp">
                  <p className="Petit">
                    please send us an email and we’ll get back shortly.
                  </p>
                  <div className="minititle">
                    <h3>2023</h3>
                    <img src="../img/mini_w.svg" />
                    <h3>RESUME</h3>
                  </div>
                  <div className="writing11">
                    <p>
                      하고 싶은 일이나 궁금한 것이 생기면 직접 부딪혀 보고,{' '}
                    </p>
                    <p>제 힘으로 알아내고 나서야 직성이 풀립니다.</p>
                  </div>
                  <div className="writing12">
                    <p>
                      아직 많이 부족하지만 계속해서 변화하는 세대에 맞춰
                      자기개발을
                    </p>
                    <p>미루지 않는 기본기 탄탄한 웹 퍼블리셔가 되겠습니다.</p>
                  </div>
                </div>
              </div>
              <div className="detail11">
                <div className="contact">
                  <h2>CONTACT</h2>
                  <h3>dobisms@gmail.com</h3>
                </div>
                <div className="meimg">
                  <img className="me" src="../img/me.png" />
                  <div className="line01"></div>
                  <div className="line02"></div>
                </div>
                <div className="name">
                  <h2>LEE JI YOUNG</h2>
                  <h3>1999.05.18</h3>
                </div>
              </div>
            </div>
            <div className="floating">
              <div className="flo01"></div>
              <div className="flo02"></div>
              <div className="flo03"></div>
              <div className="flo04"></div>
              <div className="flo05"></div>
              <div className="flo06"></div>
              <div className="flo07"></div>
            </div>
          </section>
        </article>

        {/* 두번째 단락 */}
        <article className="section12">
          <div className="lefttext">
            {/*  <h2>Certification</h2> */}
            <CC />
            {/* <h4>National & National technical Qualification </h4> */}
          </div>
          <div className="oneblue">
            <img src="../img/text.png" />
            <h2></h2>
            <div>
              <h3></h3>
              <img />
            </div>
          </div>

          <div
            className="horizontal-container"
            ref={scrollRef}
            onWheel={handleWheel}
          >
            <div className="horizontal-content">
              <div>GTQ1급</div>
              <div>GTQi 1급</div>
              <div>GTQid 1급</div>
              <div>시각디자인산업기사</div>
              <div>그래픽마스터</div>
              <div>컴퓨터그래픽스운용기능사</div>
              <div>운전면허증 2종 보통</div>
            </div>
          </div>
        </article>
        {/* 세번째 단락 */}
        <section className="section13">
          {/* 스킬 */}
          <article className="big_title">
            <div className="goebox">
              <Logo2 className="logoe" />
            </div>
            <h1>Skills.</h1>
          </article>
          <article className="sm_title">
            <h2>Programming Language</h2>
            <div className="paragraph01">
              <div className="HC">
                <div className="HTML">
                  <div className="number_01">01</div>
                  <div className="text_01">HTML</div>
                  <ul>
                    <li>시맨틱마크업</li>
                    <li>웹 표준 및 접근성 고려</li>
                    <li>크로스 브라우징</li>
                  </ul>
                </div>
                <div className="CSS">
                  <div className="number_02">02</div>
                  <div className="text_02">CSS</div>
                  <ul>
                    <li>SCSS,SASS를 이용한 작업</li>
                    <li>PC / MOBILE 레이아웃 구현 </li>
                    <li>미디어 쿼리, 반응형 작업</li>
                    <li>Transition / Animatio활용</li>
                    <li>부트스트랩</li>
                  </ul>
                </div>
              </div>
              <div className="JR">
                <div className="JS">
                  <div className="number_03">03</div>
                  <div className="text_03">JS</div>
                  <ul>
                    <li>자바스크립트 / 제이쿼리</li>
                    <li>바닐라 자바스크립트</li>
                    <li>기본 문법 이해, 동작 소스 작성</li>
                    <li>오픈 소스 활용 및 수정</li>
                  </ul>
                </div>
                <div className="REACT">
                  <div className="number_04">04</div>
                  <div className="text_04">REACT</div>
                  <ul>
                    <li>오픈 API 프로젝트 적용</li>
                    <li>Next.js</li>
                    <li>코드 재사용</li>
                    <li>컴포넌트, 라우터 사용</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article className="se_title">
            <h2>Deploy & Soft Wares & More</h2>
            <div className="paragraph02">
              <div className="DS">
                <div className="DEPLOY">
                  <div className="number_05">05</div>
                  <div className="text_05">DEPLOY</div>
                  <ul>
                    <li>Git / Git Desktop</li>
                    <li>FileZilla</li>
                    <li>Dothome</li>
                    <li>Cloudtype</li>
                    <li>Vercel</li>
                  </ul>
                </div>
                <div className="SOFT">
                  <div className="number_06">06</div>
                  <div className="text_06">SOFT WARES</div>
                  <ul>
                    <li>Photoshop</li>
                    <li>Illusrtation</li>
                    <li>InDesign</li>
                  </ul>
                </div>
              </div>
              <div className="M">
                <div className="MORE">
                  <div className="number_07">07</div>
                  <div className="text_07">MORE</div>
                  <ul>
                    <li>타고난 의사 소통 능력</li>
                    <li>누구보다 빠른 적응력</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article className="section02a">
            {/* <div className="paragraphbox">
              <img className="memoji01" src="../img/03.png" />
              <img className="noi" src="../img/noiz.jpg " />
            </div>{' '} */}
            <div className="email">CONTACT</div>
            <div className="dvmail">
              <div className="bail">
                <img src="https://img.icons8.com/ios-glyphs/30/null/mail-account.png" />
              </div>
              <p className="mail">dobisms@gmail.com</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default About;
