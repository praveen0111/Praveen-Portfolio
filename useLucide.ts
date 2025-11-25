
import { useEffect } from 'react';

declare global {
  interface Window {
    lucide: any;
  }
}

// Hook to refresh Lucide icons
export const useLucide = (dependencies: any[] = []) => {
  useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }, dependencies);
};
