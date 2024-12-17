import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 25px;
  height: 25px;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s;
  z-index: 10000;
`;

const OuterCircle = styled.div`
  width: 35px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 10000;
`;

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({
    width: '25px',
    height: '25px',
    left: '0px',
    top: '0px',
  });

  const [trailerStyle, setTrailerStyle] = useState({
    left: '0px',
    top: '0px',
  });

  let mouseX = 0;
  let mouseY = 0;
  let trailerX = 0;
  let trailerY = 0;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      setCursorStyle((prev) => ({
        ...prev,
        left: mouseX + 'px',
        top: mouseY + 'px',
      }));
    };

    const animateTrailer = () => {
      const easing = 0.1;

      const dx = mouseX - trailerX;
      const dy = mouseY - trailerY;

      trailerX += dx * easing;
      trailerY += dy * easing;

      setTrailerStyle({
        left: trailerX + 'px',
        top: trailerY + 'px',
      });

      requestAnimationFrame(animateTrailer);
    };

    const handleMouseDown = () => {
      setCursorStyle((prev) => ({
        ...prev,
        width: '15px',
        height: '15px',
      }));
    };

    const handleMouseUp = () => {
      setCursorStyle((prev) => ({
        ...prev,
        width: '25px',
        height: '25px',
      }));
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    animateTrailer();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <Circle style={cursorStyle}/>
      <OuterCircle style={trailerStyle}/>
    </>
  );
};

export default Cursor;
