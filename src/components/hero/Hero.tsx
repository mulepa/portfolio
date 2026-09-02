'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Hero.module.css';

const ROLES = [
  'a Robotics Engineer',
  'an Embedded Engineer',
  'an Electronics Engineer',
  'a Software Engineer',
];

// Typing animation timing (ms)
const TYPING_SPEED = 65;
const DELETION_SPEED = 35;
const HOLD_DURATION = 2200;
const TRANSITION_GAP = 200;

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [animationActive, setAnimationActive] = useState(true);
  const prefersReducedMotion = useRef(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mq.matches;
    if (mq.matches) {
      setDisplayText(ROLES[0]);
      setAnimationActive(false);
    }

    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
      if (e.matches) {
        setDisplayText(ROLES[roleIndex]);
        setAnimationActive(false);
      } else {
        setAnimationActive(true);
      }
    };

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [roleIndex]);

  // Stop animation on meaningful scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setAnimationActive(false);
      } else {
        if (!prefersReducedMotion.current) {
          setAnimationActive(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing animation loop
  useEffect(() => {
    if (!animationActive || prefersReducedMotion.current) return;

    const currentRole = ROLES[roleIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, HOLD_DURATION);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        const gapTimer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, TRANSITION_GAP);
        return () => clearTimeout(gapTimer);
      }

      const deleteTimer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, DELETION_SPEED);
      return () => clearTimeout(deleteTimer);
    }

    // Typing
    if (displayText.length < currentRole.length) {
      const typeTimer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(typeTimer);
    }

    // Finished typing — pause
    setIsPaused(true);
  }, [displayText, roleIndex, isDeleting, isPaused, animationActive]);

  const handleNameClick = useCallback(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offset = 80;
      const top = aboutSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleScrollCue = useCallback(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offset = 80;
      const top = aboutSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      {/* Subtle ambient background */}
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.content}>
        <h1 className={styles.name}>
          <button
            onClick={handleNameClick}
            className={styles.stack}
            aria-label="Scroll to About section"
          >
            <span
              className={`${styles.stackLayer} ${styles.ghost1}`}
              aria-hidden="true"
            >
              PARTH MULE
            </span>
            <span
              className={`${styles.stackLayer} ${styles.ghost2}`}
              aria-hidden="true"
            >
              PARTH MULE
            </span>
            <span className={`${styles.stackLayer} ${styles.l0}`}>
              PARTH MULE
            </span>
          </button>
        </h1>

        <div className={styles.identityLine} aria-live="polite" aria-atomic="true">
          <span className={styles.identityFixed}>I am</span>
          <span className={styles.identityRole}>
            {displayText}
            <span
              className={`${styles.cursor} ${isPaused ? styles.cursorBlink : ''}`}
              aria-hidden="true"
            />
          </span>
        </div>

        <p className={styles.statement}>
          I like where circuits become code, and code becomes something real.
        </p>
      </div>

      <button
        className={styles.scrollCue}
        onClick={handleScrollCue}
        aria-label="Scroll to next section"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
}
