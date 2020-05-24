import React, { useState, useEffect } from 'react';

function WindowResize() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  return (
    <>
      <h2>Window Resize</h2>
      <div>
        {windowWidth} x {windowHeight}
      </div>
    </>
  )
}

export default WindowResize;