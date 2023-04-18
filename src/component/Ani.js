import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const COLORS = [
  '#bbf7d0',
  '#99f6e4',
  '#bfdbfe',
  '#ddd6fe',
  '#f5d0fe',
  '#fed7aa',
  '#fee2e2',
];
const TAGS = [
  'GTQ1급 ',
  '그래픽 Master',
  '컴퓨터그래픽스 운용기능사',
  '자동차 운전면허증 2종 보통',
  'GTQid 1급',
  '시각디자인 산업기사',
  'GTQi-1급',
];
const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 3;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal',
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    <span>#</span> {text}
  </div>
);

const Ani = () => (
  <div className="ani">
    <header className='aniheader'>
      <h1>Certification</h1>
      <p>National Qualification & National technical qualification</p>
    </header>
    <div className="tag-list">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade" />
    </div>
  </div>
);

export default Ani;
