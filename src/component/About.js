import React from 'react';
import '../css/About.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo2 } from '../css/imgs/logo_b_title.svg';

// scroll 이벤트
import Scro from './Scro';

const About = () => {
  return (
    <>
      <header className="w">
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
      <main className="aboutmain">
        {/* 첫번째 단락 */}
        <article className="section11">
          <section className="section11_1">
            <div className="linebox">
              <article className="left">
                <div className="above">
                  <div className="firstbox">
                    <p>1999.05.18</p>
                    <h2>LEE JI YOUNG</h2>
                    <h3>디자인 감각이 있는 퍼블리셔</h3>
                  </div>
                  <div className="blank01"></div>
                  <div className="secondbox">
                    <img src="../img/04.png" />
                  </div>
                </div>
                <div className="under">
                  <h2 className="mini_title">
                    2023 <br /> - <br />
                    RESUME
                  </h2>
                  {/* 자기소개 내용 */}
                  <div className="pbox">
                    <p className="p01">
                      하고 싶은 일이나 궁금한 것이 생기면 직접 부딪혀 보고,{' '}
                      <br />제 힘으로 알아내고 나서야 직성이 풀립니다.
                    </p>
                    <p className="p02">
                      공부를 하며서 사람들에게 쉽게 필요한 정보나 내용을
                      전달한다
                      <br />
                      것이 매력적으로 다가왔고 의도한 것들이 화면에 구현되고
                      <br />
                      적용하는 것이 신기하였습니다.
                    </p>

                    <p className="p03">
                      아직 많이 부족하지만 계속해서 변화하는 세태에 맞춰
                      자기개발을
                      <br />
                      미루지 않는 기본기 탄탄한 웹 퍼블리셔가 되겠습니다.
                    </p>
                  </div>
                </div>
              </article>
              <article className="right">
                <div className="list_title">
                  <h2>Certification</h2>
                </div>
                <div className="list_content01">
                  <h3>National Qualification</h3>
                  <div>
                    <p>- GTQ 1급</p>
                    <p>- GTQ-i 1급</p>
                    <p>- GTQid 1급</p>
                    <p>- 그래픽 Master</p>
                    <p>- 컴퓨터 그래픽스 운용기능사</p>
                  </div>
                </div>
                <div className="list_content02">
                  <h3>National technical qualification</h3>
                  <div>
                    <p>- 자동차 운전면허증 2종 보통</p>
                    <p>- 시각디자인 산업기사</p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </article>

        {/* 두번째 단락 */}
        <section className="section12">
          <div className="rotatebox">
            <div className="rotatebox">{<Scro />}</div>
          </div>
          <img src="../img/02.png" />
        </section>
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
          </article>
          <article className="se_title">
            <h2>Deploy & Soft Wares</h2>
            <div className="paragraph02">
              <div className="DEPLOY">
                <div className="number_05">05</div>
                <div className="text_05">DEPLOY</div>
                <ul>
                  <li>Git / Git Desktop</li>
                  <li>FileZilla</li>
                  <li>Dothome</li>
                </ul>
              </div>
              <div className="SOFT">
                <div className="number_06">06</div>
                <div className="text_06">SOFT WARES</div>
                <ul>
                  <li>Photoshop Illusrtation InDesign</li>
                  <li>타고난 의사 소통 능력</li>
                  <li>누구보다 빠른 적응력</li>
                </ul>
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
    </>
  );
};

export default About;
