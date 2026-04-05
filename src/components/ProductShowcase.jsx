"use client";

import React, { useState, useEffect } from 'react';
import styles from './ProductShowcase.module.css';
import AnimateIcon from './AnimateIcon';
import ThumbsUp from './ThumbsUp';
import Users from './Users';
import LockKeyhole from './LockKeyhole';
import Settings from './Settings';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const features = [
  {
    title: 'Project Planning',
    description: 'Create, assign, and manage tasks with a drag-and-drop interface or calendar views.',
    icon: (
      <AnimateIcon animateOnHover>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="8" y1="22" x2="16" y2="22" />
        </svg>
      </AnimateIcon>
    )
  },
  {
    title: 'Team Collaboration',
    description: 'Powerful Team Collaboration Tools to boost Streamline Communication for you.',
    icon: (
      <AnimateIcon animateOnHover>
        <Users />
      </AnimateIcon>
    )
  },
  {
    title: 'Live Insights',
    description: 'Track performance instantly with accurate insights for smarter business decisions.',
    icon: (
      <AnimateIcon animateOnHover>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      </AnimateIcon>
    )
  },
  {
    title: 'Easy to Use',
    description: 'Intuitive design lets anyone navigate, manage, and operate effortlessly.',
    icon: (
      <AnimateIcon animateOnHover>
        <ThumbsUp />
      </AnimateIcon>
    )
  },
  {
    title: 'Limitless Flexibility',
    description: 'Adaptable platform empowers teams to customize workflows and scale effortlessly.',
    icon: (
      <AnimateIcon animateOnHover>
        <Settings />
      </AnimateIcon>
    )
  },
  {
    title: 'Secure at Scale',
    description: 'Advanced security measures protect data while supporting growth across all operations.',
    icon: (
      <AnimateIcon animateOnHover>
        <LockKeyhole />
      </AnimateIcon>
    )
  }
];


export default function ProductShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Custom-designed modular<br />products at a world-class standard
        </h2>
        <p className={styles.subtitle}>
          Fintech is its potential to promote financial inclusion. In many parts of the world,<br />
          millions of people lack access to traditional banking services.
        </p>
      </header>

      {isMobile ? (
        <div style={{ width: '100%', padding: '0 10px' }}>
          <ScrollStack useWindowScroll={true} itemDistance={45} itemStackDistance={25}>
            {features.map((feature, index) => (
              <ScrollStackItem key={index} itemClassName={styles.card}>
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      ) : (
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
