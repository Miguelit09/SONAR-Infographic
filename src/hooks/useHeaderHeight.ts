import { useEffect, type RefObject } from 'react';

export function useHeaderHeight(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${element.offsetHeight}px`,
      );
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--header-height');
    };
  }, [ref]);
}
