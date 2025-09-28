import React, { useState, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  speed = 50 
}) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          const startAnimation = () => {
            const interval = setInterval(() => {
              setVisibleCount((prev) => {
                if (prev >= text.length) {
                  clearInterval(interval);
                  return prev;
                }
                return prev + 1;
              });
            }, speed);
          };

          if (delay > 0) {
            setTimeout(startAnimation, delay);
          } else {
            startAnimation();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [text.length, delay, speed, hasStarted]);

  return (
    <div ref={ref} className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-opacity duration-200 ${
            index < visibleCount ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDelay: `${index * 20}ms`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;