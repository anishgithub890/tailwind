'use client';

import { useEffect, useState } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
// import { FaBeer } from 'react-icons/all-files/fa/FaBeer';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
  const size = '24px';

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', 'true');
      window.document.documentElement.classList.add('dark');
    } else if (darkMode === false) {
      localStorage.setItem('darkMode', 'false');
      window.document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(localStorage.getItem('darkMode') === 'true');
    }
  }, [darkMode]);

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <header className="flex w-full p-4 items-center justify-end">
        <div className="transition hover:text-blue-700" onClick={switchMode}>
          {!darkMode ? (
            <BsMoonStarsFill width={size} height={size} />
          ) : (
            <BsSunFill width={size} height={size} />
          )}
        </div>
      </header>
      <div className="container p-6">
        <h1 className="2xl font-bold">Dark</h1>
        {/* <h3>
          Lets go for a <FaBeer /> ?
        </h3> */}
      </div>
    </div>
  );
};

export default DarkMode;
