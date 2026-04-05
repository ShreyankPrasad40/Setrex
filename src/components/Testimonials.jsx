"use client";
import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Amelia Johnson',
    role: 'COO, Financial Group',
    quote: "Partnering with Metrilog has been invaluable. We've strengthened security, minimized risks, and scaled with peace of mind across global markets with ease and confidence.",
    rating: '4.9',
    image: '/images/testimonial_client.png',
    company: 'DataStack'
  },
  {
    name: 'Liam Chen',
    role: 'Head of Growth, NeoTech',
    quote: "The modularity of the platform and the speed of integration exceeded our expectations. It has become a core part of our stack as we handle millions of transactions.",
    rating: '5.0',
    image: '/images/testimonial_client_2.png',
    company: 'NeoTech'
  },
  {
    name: 'Sarah Williams',
    role: 'Director of Product, FlowPay',
    quote: "Exceptional design and truly world-class support. The live insights have allowed us to make data-driven decisions that boosted our revenue by 30% in just one quarter.",
    rating: '4.8',
    image: '/images/testimonial_client_3.png',
    company: 'FlowPay'
  }
];

export default function Testimonials() {
  const [index, setIndex] = React.useState(0);
  
  const next = React.useCallback(() => setIndex((prev) => (prev + 1) % testimonials.length), []);
  const prev = React.useCallback(() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length), []);

  React.useEffect(() => {
    const timer = setInterval(next, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, [next]);


  const current = testimonials[index];

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Client feedback in their words</h2>
        <p className={styles.subtitle}>
          Fintech is its potential to promote financial inclusion. In many parts of the world,<br />
          millions of people lack access to traditional banking services.
        </p>
      </header>

      <div className={styles.card}>
        <div className={styles.visualSide}>
          <img 
            src={current.image} 
            alt={current.name} 
            className={styles.clientImage}
            key={current.image}
          />
          <div className={styles.navBar}>
            <button className={styles.navBtn} onClick={prev} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <div className={styles.divider}></div>
            <button className={styles.navBtn} onClick={next} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.contentSide} key={index}>
            <div className={styles.rating}>
              <span className={styles.star}>★</span>
              <span className={styles.score}>{current.rating}</span>
            </div>
            
            <blockquote className={styles.quote}>
              "{current.quote}"
            </blockquote>

            <div className={styles.footer}>
              <div className={styles.author}>
                <h4 className={styles.name}>{current.name}</h4>
                <p className={styles.role}>{current.role}</p>
              </div>
              
              <div className={styles.companyLogo}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="16" cy="16" r="6" fill="currentColor"/>
                  <path d="M16 2V6M16 26V30M2 16H6M26 16H30" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className={styles.companyName}>{current.company}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
