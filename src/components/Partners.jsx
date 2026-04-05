import React from 'react';
import styles from './Partners.module.css';
import LogoLoop from './LogoLoop';

const PARTNER_LOGOS = [
  {
    node: (
      <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: 'auto' }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M11 5C8.23858 5 6 7.23858 6 10C6 11.2335 6.44682 12.3626 7.18579 13.2359L4.69707 18.2134L8.71804 19.554C9.56306 20.4729 10.7258 21 12 21C13.2742 21 14.4369 20.4729 15.282 19.554L19.3029 18.2134L16.8142 13.2359C17.5532 12.3626 18 11.2335 18 10C18 7.23858 15.7614 5 13 5H11ZM12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17ZM12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z" fill="currentColor"/>
        <text x="35" y="22" fill="currentColor" fontFamily="sans-serif" fontSize="18" fontWeight="bold">logoipsum</text>
      </svg>
    ),
    alt: 'Logoipsum 1'
  },
  {
    node: (
      <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: 'auto' }}>
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3"/>
        <path d="M18 7L10 17H16L14 25L22 15H16L18 7Z" fill="currentColor"/>
        <text x="40" y="22" fill="currentColor" fontFamily="sans-serif" fontSize="18" fontWeight="bold">logoipsum</text>
      </svg>
    ),
    alt: 'Logoipsum 2'
  },
  {
    node: (
      <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: 'auto' }}>
        <path d="M4 14H24M4 18H24M4 22H24" stroke="currentColor" strokeWidth="2"/>
        <circle cx="14" cy="18" r="8" stroke="currentColor" strokeWidth="2" fill="black"/>
        <text x="35" y="18" fill="currentColor" fontFamily="sans-serif" fontSize="16" fontWeight="bold">logoipsum</text>
        <text x="35" y="28" fill="currentColor" fontFamily="serif" fontSize="10" fontStyle="italic">Brand Standard</text>
      </svg>
    ),
    alt: 'Logoipsum 3'
  },
  {
    node: (
      <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: 'auto' }}>
        <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.8"/>
        <circle cx="20" cy="12" r="6" fill="currentColor" opacity="0.8"/>
        <circle cx="12" cy="20" r="6" fill="currentColor" opacity="0.8"/>
        <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.8"/>
        <text x="40" y="22" fill="currentColor" fontFamily="sans-serif" fontSize="18" fontWeight="bold">logoipsum</text>
      </svg>
    ),
    alt: 'Logoipsum 4'
  },
  {
    node: (
      <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: 'auto' }}>
        <circle cx="16" cy="16" r="6" fill="currentColor"/>
        <path d="M16 2V6M16 26V30M2 16H6M26 16H30M6.1 6.1L8.9 8.9M23.1 23.1L25.9 25.9M6.1 25.9L8.9 23.1M23.1 8.9L25.9 6.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <text x="40" y="22" fill="currentColor" fontFamily="sans-serif" fontSize="18" fontWeight="bold">logoipsum</text>
      </svg>
    ),
    alt: 'Logoipsum 5'
  }
];

export default function Partners() {
  return (
    <section className={styles.partnersSection}>
      <p className={styles.title}>Partnering with the world's leading enterprises</p>
      <div className={styles.logoRow}>
        <LogoLoop 
          logos={PARTNER_LOGOS} 
          speed={60} 
          pauseOnHover={true} 
          fadeOut={true} 
          logoHeight={32}
          gap={60}
        />
      </div>
    </section>
  );
}
