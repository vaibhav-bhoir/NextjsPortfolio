import React, { useState, useEffect } from 'react';

const Typed = ({ strings, typeSpeed, backSpeed, loop }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const stringToType = strings[currentIndex];
    let timeout;

    if (isTyping) {
      if (currentText.length < stringToType.length) {
        timeout = setTimeout(() => {
          setCurrentText(stringToType.slice(0, currentText.length + 1));
        }, typeSpeed);
      } else if (loop) {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentText('');
          setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }, backSpeed);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, backSpeed);
      } else {
        setIsTyping(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentText, isTyping, strings, typeSpeed, backSpeed, loop]);

  return <div>{currentText}</div>;
};

export default Typed;
