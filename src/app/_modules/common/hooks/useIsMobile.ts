'use client';

import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

export const useIsMobile = (): boolean => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      const isMobileDevice = isMobile || window.innerWidth < 1081;
      setIsMobileView(isMobileDevice);
    };

    // 처음 마운트 시 1회 체크
    checkMobile();

    // resize시 너무 자주 발생하지 않게 debounce (100ms)
    let timeoutId: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        checkMobile();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 서버 사이드에서는 항상 false를 반환
  if (!mounted) {
    return false;
  }

  return isMobileView;
};
