import React, { useEffect, useRef } from "react";

const AnimateBlock = ({ animationClass, children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          } else {
            entry.target.classList.remove(animationClass);
          }
        });
      },
      { threshold: 0.5 }
    ); // Adjust threshold as needed

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationClass]);

  return (
    <div ref={elementRef} className="animated-component">
      {children}
    </div>
  );
};

export default AnimateBlock;
