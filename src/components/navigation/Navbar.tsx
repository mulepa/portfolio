'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80; // nav height offset
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Scroll to top"
        >
          PARTH&apos;S PORTFOLIO
        </a>

        <div className={styles.links}>
          <a
            href="#work"
            className={styles.navLink}
            onClick={(e) => handleNavClick(e, 'work')}
          >
            WORK
          </a>
          <a
            href="#about"
            className={styles.navLink}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            ABOUT
          </a>
          <a
            href="/resumes/resume_master_parth_mule.pdf"
            className={styles.navLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}
