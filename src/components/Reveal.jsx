import { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  direction = 'up',
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const Tag = as;

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(node);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`
        reveal
        reveal-${direction}
        ${visible ? 'reveal-visible' : ''}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}