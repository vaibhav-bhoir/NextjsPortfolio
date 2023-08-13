import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { AiFillSetting } from 'react-icons/ai';

const themes = [
  { name: 'Light', bgColor: '#ffffff' },
  { name: 'Dark', bgColor: '#000000' },
  { name: 'Neon', bgColor: '#CCFF00' },
  { name: 'Pink', bgColor: '#dd1472' },
  { name: 'Magic', bgColor: '#8E2DE2' },
];
const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [panelVisible, setPanelVisible] = useState(false);

  // When mounted on the client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };

  const changeThemeAndClosePanel = (newTheme) => {
    if (newTheme !== theme) {
      setTheme(newTheme);
    }
    setPanelVisible(false);
  };

  return (
    <div
      className={`p-6 bg-white fixed top-80 right-0 z-50 rounded-bl-lg transition-transform shadow-lg ${
        panelVisible ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}
    >
      <div className="text-5xl text-black absolute -left-16 top-0 rounded-tl-lg rounded-bl-lg bg-white shadow-lg">
        <button
          aria-label="Toggle theme"
          type="button"
          className="flex justify-center items-center h-16 w-16 cursor-pointer animate-spin-slow"
          onClick={togglePanel}
        >
          <AiFillSetting />
        </button>
      </div>
      <h5 className="font-bold text-3xl text-black mb-5">Theme Switch</h5>
      <ul className="flex gap-4 m-0">
        {themes.map((t) => (
          <li key={t.name.toLowerCase()}>
            <a
              href="#"
              className={`w-12 h-12 block rounded-full text-gray-800 border-gray-800 border  ${
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
