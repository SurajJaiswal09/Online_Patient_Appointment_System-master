import React, { useEffect } from 'react';
import "../../src/index.css"; // Import your custom cursor styles

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.display = 'block';
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.display = 'none';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div id="custom-cursor"></div>;
};

export default Cursor;
