import { useState, useEffect, useRef } from 'react';

const Scro = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const pTag1Ref = useRef(null);
  const pTag2Ref = useRef(null);
  const pTag3Ref = useRef(null);
  const pTag4Ref = useRef(null);

  const textArr1 =
    ' Hobbies Listening to music taking pictures sharing discussing singing reading books walking around looking at pretty things Kim Seong-cheol the best Lee Do-hyun pretty want to swim in their mouths '.split(
      ''
    );
  const textArr2 =
    ' Hobbies Listening to music taking pictures sharing discussing singing reading books walking around looking at pretty things Kim Seong-cheol the best Lee Do-hyun pretty want to swim in their mouths '.split(
      ''
    );
  const textArr3 =
    ' Hobbies Listening to music taking pictures sharing discussing singing reading books walking around looking at pretty things Kim Seong-cheol the best Lee Do-hyun pretty want to swim in their mouths '.split(
      ''
    );
  const textArr4 =
    ' Hobbies Listening to music taking pictures sharing discussing singing reading books walking around looking at pretty things Kim Seong-cheol the best Lee Do-hyun pretty want to swim in their mouths '.split(
      ''
    );

  function initTexts(element, textArray) {
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
      element.innerText += `${textArray[i]}\u00A0`;
    }
  }
  useEffect(() => {
    initTexts(pTag1Ref.current, textArr1);
    initTexts(pTag2Ref.current, textArr2);
    initTexts(pTag3Ref.current, textArr3);
    initTexts(pTag4Ref.current, textArr4);
  }, []);

  function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 4) {
      element.style.transform = `translateX(0)`;
      count = 0;
    }
    element.style.transform = `translateX(${count * direction}px)`;
    return count;
  }

  function animate() {
    setCount1((prevCount) => marqueeText(prevCount + 1, pTag1Ref.current, 1));
    setCount2((prevCount) => marqueeText(prevCount + 1, pTag2Ref.current, -1));
    setCount3((prevCount) => marqueeText(prevCount + 1, pTag3Ref.current, 1));
    setCount4((prevCount) => marqueeText(prevCount + 1, pTag4Ref.current, -1));
    window.requestAnimationFrame(animate);
  }

  useEffect(() => {
    animate();
  }, []);

  function handleScroll() {
    setCount1((prevCount) => prevCount + 15);
    setCount2((prevCount) => prevCount + 15);
    setCount3((prevCount) => prevCount + 15);
    setCount4((prevCount) => prevCount + 15);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="cover01">
        <p className="first" ref={pTag1Ref}></p>
      </div>
      <div className="cover02">
        <p className="second" ref={pTag2Ref}></p>
      </div>
      <div className="cover03">
        <p className="third" ref={pTag3Ref}></p>
      </div>
      <div className="cover04">
        <p className="fourth" ref={pTag4Ref}></p>
      </div>
    </>
  );
};

export default Scro;
