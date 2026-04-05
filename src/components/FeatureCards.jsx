import styles from './FeatureCards.module.css';

export default function FeatureCards() {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        
        {/* Left Card: Easy Integration */}
        <div className={styles.card}>
          <div className={styles.integrationVisual}>
            <div className={styles.circleSystem}>
              <div className={styles.ring1}></div>
              <div className={styles.ring2}></div>
              <div className={styles.ring3}></div>
              <div className={styles.centerLogo}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4"></path>
                  <path d="M4 12h16"></path>
                  <path d="M12 12v8"></path>
                </svg>
              </div>
              
              {/* Orbiting Elements */}
              <div className={`${styles.orbitItem} ${styles.orbitItem1}`}>
                <div className={styles.innerDot}></div>
              </div>
              <div className={`${styles.orbitItem} ${styles.orbitItem2}`}>
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
              <div className={`${styles.orbitItem} ${styles.orbitItem3}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg>
              </div>
              <div className={`${styles.orbitItem} ${styles.orbitItem4}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
               <div className={`${styles.orbitItem} ${styles.orbitItem5}`}>
                <div className={styles.solidHex}></div>
              </div>
            </div>
            
            <div className={styles.gradientGlow}></div>
          </div>
          
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Easy Integration</h3>
            <p className={styles.cardDescription}>
              Integrates with other tools and systems streamlining their workflow.
            </p>
          </div>
        </div>

        {/* Right Card: Trusted Support Team */}
        <div className={styles.card}>
          <div className={styles.supportVisual}>
             <div className={styles.hugeText}>24/7</div>
             <button className={styles.supportBtn}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                 <line x1="9" y1="10" x2="9.01" y2="10"></line>
                 <line x1="15" y1="10" x2="15.01" y2="10"></line>
               </svg>
               Support
             </button>
             <div className={styles.greenGlow}></div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Trusted Support Team</h3>
            <p className={styles.cardDescription}>
              Recognized for responses and knowledge for quick solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
