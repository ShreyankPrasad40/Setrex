"use client";
import styles from './Integrations.module.css';

const logos = [
  // 1. Slanted Square
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round"><path d="M5 8l10-3 4 11-10 3z" /></svg>,
  // 2. Layered disks
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><ellipse cx="12" cy="8" rx="8" ry="4"/><path d="M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4"/><path d="M4 16c0 2.2 3.6 4 8 4s8-1.8 8-4"/></svg>,
  // 3. Concentric circles rings
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6a6 6 0 1 0 0 12"/><circle cx="14" cy="12" r="2" fill="white"/></svg>,
  // 4. Overlapping rounded squares
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="4" y="8" width="12" height="12" rx="3" stroke="rgba(255,255,255,0.4)"/><rect x="8" y="4" width="12" height="12" rx="3" fill="white"/></svg>,
  // 5. Circle split horizontal
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 12a9 9 0 0 1 9-9H3a9 9 0 0 1 9 9z" fill="white"/></svg>,
  // 6. Dot matrix star
  <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><rect x="11" y="2" width="2" height="2"/><rect x="11" y="20" width="2" height="2"/><rect x="2" y="11" width="2" height="2"/><rect x="20" y="11" width="2" height="2"/><rect x="6" y="6" width="2" height="2"/><rect x="16" y="16" width="2" height="2"/><rect x="16" y="6" width="2" height="2"/><rect x="6" y="16" width="2" height="2"/><circle cx="12" cy="12" r="3" fill="none" stroke="white" strokeWidth="2"/></svg>,
  // 7. Four point sparkle
  <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"/></svg>,
  // 8. Multi point star flower
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" /></svg>,
  // 9. Link node circles
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="15" cy="15" r="5" /><circle cx="10" cy="10" r="4"/><path d="M15 10a5 5 0 0 0-5 5" /><circle cx="15" cy="15" r="2" fill="white"/></svg>,
  // 10. Abstract spark
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/></svg>
];

export default function Integrations() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Seamless Integration</h2>
        <p className={styles.subtitle}>
          Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.
        </p>
        <a href="#" className={styles.button}>
          See All Integrations
        </a>
      </header>

      <div className={styles.gridWrapper}>
        <div className={styles.logoGrid}>
          {[...logos, ...logos].map((Logo, idx) => (
            <div key={idx} className={styles.logoBox}>
              {Logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
