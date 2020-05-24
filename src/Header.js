import React, { useEffect, useState } from 'react';

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header className={!isFixed ? 'headerNormal' : 'headerFixed'}>
      Nagłówek aplikacji
    </header>
  )
}

export default Header;