import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from 'next-themes';
import { AiFillSetting } from 'react-icons/ai';
import useOutsideClick from './hooks/useOutsideClick';

const mode_settings = [
  {
    id: 'light',
    name: 'Light',
    class: 'light',
    bgColor: '#ffffff',
  },
  {
    id: 'dark',
    name: 'Dark',
    class: 'dark',
    bgColor: '#000000',
  },
];

const color_settings = [
  {
    id: 'blue',
    name: 'Blue',
    class: 'theme-color-blue',
    bgColor: '#349eff',
  },
  {
    id: 'red',
    name: 'Red',
    class: 'theme-color-red',
    bgColor: '#fb0b12',
  },
  {
    id: 'cyan',
    name: 'Cyan',
    class: 'theme-color-cyan',
    bgColor: '#10d4d2',
  },
  {
    id: 'green',
    name: 'Green',
    class: 'theme-color-green',
    bgColor: '#019707',
  },
  {
    id: 'orange',
    name: 'Orange',
    class: 'theme-color-orange',
    bgColor: '#d68102',
  },
];

const ThemeChanger: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [panelVisible, setPanelVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState('red');
  const panelRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(panelRef, () => {
    setPanelVisible(false);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.themeMod = theme;
    }
  }, [theme]);

  useEffect(() => {
    if (selectedColor) {
      document.documentElement.dataset.themeColor = selectedColor;
    }
  }, [selectedColor]);

  if (!mounted) return null;

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };

  const setMode = (newMode: string) => {
    if (newMode !== theme) {
      setTheme(newMode);
    }
    setPanelVisible(false);
  };

  const setColor = (newColor: string) => {
    setSelectedColor(newColor);
    setPanelVisible(false);
  };

  return (
    <div
      className={`p-4 bg-main-bg fixed top-80 right-0 z-10 rounded-bl-lg shadow-shadow transition-transform shadow-lg ${
        panelVisible ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}
      ref={panelRef}
    >
      <div className="text-2xl lg:text-5xl text-primary absolute -left-10 top-0 rounded-tl-lg rounded-bl-lg bg-main-bg shadow-lg">
        <button
          aria-label="Toggle theme"
          type="button"
          className="flex justify-center items-center h-10 w-10 cursor-pointer animate-spin-slow"
          onClick={togglePanel}
        >
          <AiFillSetting />
        </button>
      </div>
      <h5 className="font-bold text-center text-base text-primary mb-2">Choose Mode</h5>
      <ul className="flex justify-center gap-2 lg:gap-3 mb-4">
        {/* Theme options */}
        {mode_settings.map((t) => (
          <li key={t.id}>
            <a
              href="#"
              className={`w-7 h-7 block rounded-full text-gray-800 border-gray-800 border shadow-xl ${
                theme === t.class ? 'cursor-default' : 'cursor-pointer'
              }`}
              style={{ backgroundColor: t.bgColor }}
              onClick={(e) => {
                e.preventDefault();
                if (theme !== t.class) {
                  setMode(t.class);
                }
              }}
            ></a>
          </li>
        ))}
      </ul>
      <h5 className="font-bold text-center text-base text-primary mb-2">Choose Color</h5>
      <ul className="flex justify-center gap-2 lg:gap-3 m-0">
        {/* Color options */}
        {color_settings.map((t) => (
          <li key={t.id}>
            <a
              href="#"
              className={`w-7 h-7 block rounded-full text-gray-800 border-gray-800 border shadow-xl ${
                selectedColor === t.id ? 'cursor-default' : 'cursor-pointer'
              }`}
              style={{ backgroundColor: t.bgColor }}
              onClick={(e) => {
                e.preventDefault();
                if (selectedColor !== t.id) {
                  setColor(t.id);
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
