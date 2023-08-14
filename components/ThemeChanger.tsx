import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from 'next-themes';
import { AiFillSetting } from 'react-icons/ai';
import useOutsideClick from './hooks/useOutsideClick';

interface Theme {
  name: string;
  bgColor: string;
}

const themes: Theme[] = [
  { name: 'Light', bgColor: '#ffffff' },
  { name: 'Dark', bgColor: '#000000' },
  { name: 'Neon', bgColor: '#CCFF00' },
  { name: 'Pink', bgColor: '#dd1472' },
  { name: 'Magic', bgColor: '#8E2DE2' },
];

const ThemeChanger: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [panelVisible, setPanelVisible] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(panelRef, () => {
    setPanelVisible(false);
  });

  useEffect(() => {
    // When mounted on the client, now we can show the UI
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };

  const changeThemeAndClosePanel = (newTheme: string) => {
    if (newTheme !== theme) {
      setTheme(newTheme);
    }
    setPanelVisible(false);
  };

  return (
    <div
      className={`p-4 bg-white fixed top-80 right-0 z-10 rounded-bl-lg transition-transform shadow-lg ${
        panelVisible ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}
      ref={panelRef}
    >
      <div className="text-2xl lg:text-5xl text-black absolute -left-10  top-0 rounded-tl-lg rounded-bl-lg bg-white shadow-lg">
        <button
          aria-label="Toggle theme"
          type="button"
          className="flex justify-center items-center h-10 w-10 cursor-pointer animate-spin-slow"
          onClick={togglePanel}
        >
          <AiFillSetting />
        </button>
      </div>
      <h5 className="font-bold text-base text-black mb-2">Theme Switch</h5>
      <ul className="flex gap-2 lg:gap-3 m-0">
        {themes.map((t) => (
          <li key={t.name.toLowerCase()}>
            <a
              href="#"
              className={`w-7 h-7 block rounded-full text-gray-800 border-gray-800 border shadow-xl  ${
                theme === t.name.toLowerCase() ? 'cursor-default' : 'cursor-pointer'
              }`}
              style={{ backgroundColor: t.bgColor }}
              onClick={(e) => {
                e.preventDefault();
                if (theme !== t.name.toLowerCase()) {
                  changeThemeAndClosePanel(t.name.toLowerCase());
                }
              }}
            ></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeChanger;
