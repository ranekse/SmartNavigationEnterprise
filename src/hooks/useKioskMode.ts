import { useState, useEffect, useRef } from 'react';

export function useKioskMode(timeoutMs = 15000) {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleActivity = () => {
      setIsIdle(false);
      resetTimeout();
    };

    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (timeoutMs > 0) {
        timeoutRef.current = setTimeout(() => {
          setIsIdle(true);
        }, timeoutMs);
      } else {
        setIsIdle(false);
      }
    };

    // Dinlenecek etkinlikler
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    events.forEach((event) => {
      window.addEventListener(event, handleActivity, { passive: true });
    });

    // Başlangıçta zamanlayıcıyı başlat
    resetTimeout();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, [timeoutMs]);

  return isIdle;
}
