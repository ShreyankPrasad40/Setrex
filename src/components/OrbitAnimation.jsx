"use client";
import React from 'react';
import styles from './OrbitAnimation.module.css';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiNodedotjs, SiPython, SiDocker, SiGithub, SiVercel } from 'react-icons/si';

const icons = [
  { node: <SiReact />, orbit: 1, delay: 0 },
  { node: <SiNextdotjs />, orbit: 1, delay: -5 },
  { node: <SiTypescript />, orbit: 2, delay: 0 },
  { node: <SiTailwindcss />, orbit: 2, delay: -4 },
  { node: <SiJavascript />, orbit: 2, delay: -8 },
  { node: <SiNodedotjs />, orbit: 2, delay: -12 },
  { node: <SiPython />, orbit: 3, delay: 0 },
  { node: <SiDocker />, orbit: 3, delay: -6 },
  { node: <SiGithub />, orbit: 3, delay: -12 },
  { node: <SiVercel />, orbit: 3, delay: -18 },
];

export default function OrbitAnimation() {
  return (
    <div className={styles.container}>
      {/* Background Orbits */}
      <div className={styles.orbit1}></div>
      <div className={styles.orbit2}></div>
      <div className={styles.orbit3}></div>

      {/* Center Logo */}
      <div className={styles.centerLogo}>
        <div className={styles.centerIcon}>
          {/* Neon logo placeholder */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5C11.72 5 5 11.72 5 20C5 28.28 11.72 35 20 35C28.28 35 35 28.28 35 20" stroke="black" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="20" cy="20" r="8" fill="black"/>
            <path d="M15 20C15 17.2386 17.2386 15 20 15V25C17.2386 25 15 22.7614 15 20Z" fill="black"/>
          </svg>
        </div>
      </div>

      {/* Orbiting Icons */}
      {icons.map((item, i) => (
        <div 
          key={i} 
          className={`${styles.orbitingIcon} ${styles[`orbit${item.orbit}Icon`]}`}
          style={{ animationDelay: `${item.delay}s` }}
        >
          <div className={styles.iconContent}>
            {item.node}
          </div>
        </div>
      ))}
    </div>
  );
}
