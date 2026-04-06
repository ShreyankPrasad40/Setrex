"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Investors.module.css';
import LogoLoop from './LogoLoop';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ROW_1_INVESTORS = [
  { name: 'David Chen', role: 'Marketing Officer', image: '/investors/investor_1_portrait_1775503329925.png' },
  { name: 'James Patel', role: 'UX Designer', image: '/investors/investor_2_portrait_1775503346849.png' },
  { name: 'Liam Johnson', role: 'Software Engineer', image: '/investors/investor_3_portrait_1775503364059.png' },
  { name: 'Emily Nguyen', role: 'Operations Director', image: '/investors/investor_4_portrait_1775503378883.png' },
  { name: 'Michael Brown', role: 'CEO', image: '/investors/investor_5_portrait_1775503401909.png' },
  { name: 'Olivia Martinez', role: 'Head of Sales', image: '/investors/investor_6_portrait_1775503419385.png' },
  { name: 'Aria Thompson', role: 'UX Researcher', image: '/investors/investor_13_portrait_1775505932267.png' }
];

const ROW_2_INVESTORS = [
  { name: 'Sophia Wilson', role: 'Lead Researcher', image: '/investors/investor_7_portrait_1775503434798.png' },
  { name: 'Ethan Hunt', role: 'Security Expert', image: '/investors/investor_8_portrait_1775503453917.png' },
  { name: 'Mia Garcia', role: 'Product Lead', image: '/investors/investor_9_portrait_1775503477436.png' },
  { name: 'William Taylor', role: 'Data Scientist', image: '/investors/investor_10_portrait_1775503493006.png' },
  { name: 'Chloe Adams', role: 'Creative Director', image: '/investors/investor_11_portrait_1775503508301.png' },
  { name: 'Daniel Lee', role: 'Backend Architect', image: '/investors/investor_12_portrait_1775503525812.png' },
  { name: 'Logan Harris', role: 'Fullstack Engineer', image: '/investors/investor_14_portrait_1775505947188.png' },
  { name: 'Sophie King', role: 'Marketing Lead', image: '/investors/investor_15_portrait_1775505966037.png' },
  { name: 'Lucas Wright', role: 'AI Specialist', image: '/investors/investor_16_portrait_1775505983209.png' },
  { name: 'Elena Rossi', role: 'Legal Consultant', image: '/investors/investor_17_portrait_1775506003127.png' }
];

export default function Investors() {
  const containerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const displacement = isMobile ? 150 : 450; // Smaller displacement on mobile to keep items centered

    const ctx = gsap.context(() => {
      // Precise scroll parallax for extended rows
      gsap.fromTo(row1Ref.current, 
        { x: 0 },
        {
          x: -displacement,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true 
          }
        }
      );

      gsap.fromTo(row2Ref.current, 
        { x: -displacement },
        {
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderInvestor = (investor) => (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <img src={investor.image} alt={investor.name} className={styles.avatar} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.name}>{investor.name}</h4>
        <p className={styles.role}>{investor.role}</p>
      </div>
    </div>
  );

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Supported by leading AI and<br />future-of-work investors.
        </h2>
      </div>

      <div className={styles.marqueeRow} ref={row1Ref} style={{ display: 'flex', justifyContent: 'center' }}>
        <LogoLoop
          logos={ROW_1_INVESTORS.map(inv => ({ node: renderInvestor(inv) }))}
          speed={0}
          direction="left"
          logoHeight={60}
          gap={30}
          fadeOut={true}
          fadeOutColor="#000000"
          pauseOnHover={false}
        />
      </div>

      <div className={styles.marqueeRow} ref={row2Ref} style={{ display: 'flex', justifyContent: 'center' }}>
        <LogoLoop
          logos={ROW_2_INVESTORS.map(inv => ({ node: renderInvestor(inv) }))}
          speed={0}
          direction="right"
          logoHeight={60}
          gap={30}
          fadeOut={true}
          fadeOutColor="#000000"
          pauseOnHover={false}
        />
      </div>
    </section>
  );
}
