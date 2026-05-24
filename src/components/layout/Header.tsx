import { useRef } from 'react';
import { SITE } from '../../data/content';
import { useScrollProgress } from '../../hooks/useActiveSection';
import { useHeaderHeight } from '../../hooks/useHeaderHeight';

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress();
  useHeaderHeight(headerRef);

  return (
    <header ref={headerRef} className="site-header">
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="site-header__inner">
        <p className="site-header__eyebrow">{SITE.subtitle}</p>
        <h1 className="site-header__title">{SITE.title}</h1>
      </div>
    </header>
  );
}
