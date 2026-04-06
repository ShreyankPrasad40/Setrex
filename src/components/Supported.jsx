import React from 'react';
import styles from './Supported.module.css';
import SpotlightCard from './SpotlightCard';
import CountUp from './CountUp';
import Image from 'next/image';


export default function Supported() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Supported by many<br/>companies around the world</h2>
      
      <div className={styles.grid}>
        {/* Left Card */}
        <SpotlightCard className={styles.leftCard} spotlightColor="rgba(212, 255, 51, 0.15)">
          <div className={styles.badgeLeft}>CEO's Words</div>
          <p className={styles.quote}>
            "Working with you was seamless from start to finish. The final design exceeded our expectations. Your attention to detail and ability to adaptable was outstanding throughout the entire process to the world."
          </p>
          <div className={styles.leftBottom}>
            <div className={styles.profileArea}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Emily R" className={styles.profilePic} />
              <div className={styles.profileInfo}>
                <h4>Emily R</h4>
                <span>Co Founder of Metrilo</span>
              </div>
            </div>
            <div className={styles.logoIcon}>
              <Image src="/sitelogo.svg" alt="Setrex Logo" width={24} height={24} style={{ marginRight: '8px' }} />
              <span className={styles.brandName}>Setrex.</span>
            </div>
          </div>
        </SpotlightCard>

        {/* Right Cards Column */}
        <div className={styles.rightColumn}>
          {/* Top Right Card */}
          <SpotlightCard className={styles.rightCard} spotlightColor="rgba(255, 255, 255, 0.1)">
            <div className={styles.cardHeader}>
              <h3 className={styles.stat}>
                <CountUp to={15} duration={2} />+
              </h3>
              <div className={styles.badgeRight}>Years of experiences</div>
            </div>
            <p className={styles.description}>
              Delivering timeless, functional spaces through innovation, precision, and client-focused design excellence.
            </p>
          </SpotlightCard>

          {/* Bottom Right Card */}
          <SpotlightCard className={styles.rightCard} spotlightColor="rgba(255, 255, 255, 0.1)">
            <div className={styles.cardHeader}>
              <h3 className={styles.stat}>
                <CountUp to={98} duration={2} />%
              </h3>
              <div className={styles.badgeRight}>Client satisfaction rate</div>
            </div>
            <p className={styles.description}>
              We pride ourselves on delivering excellence, reflected in the high satisfaction of every client.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
