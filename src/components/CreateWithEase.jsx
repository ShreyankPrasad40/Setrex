import styles from './CreateWithEase.module.css';
import OrbitAnimation from './OrbitAnimation';

export default function CreateWithEase() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Create with ease like <br/> never before.</h2>
        <p className={styles.subtitle}>
          Fintech is its potential to promote financial inclusion. In many parts of the world, millions<br/>
          of people lack access to traditional banking services.
        </p>
      </div>

      <div className={styles.topCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardBadge}>Overview of Interface</div>
          <h3 className={styles.cardTitle}>Designed with an<br/>intuitive experience<br/>users love.</h3>
          <p className={styles.cardDescription}>
            An intuitive interface means users can quickly understand<br/>
            how to perform tasks without the need for extensive<br/>
            training or guidance.
          </p>
        </div>
        
        <div className={styles.mockupContainer}>
          <div className={styles.browserWindow}>
            <div className={styles.browserHeader}>
              <span className={styles.dotRed}></span>
              <span className={styles.dotYellow}></span>
              <span className={styles.dotGreen}></span>
            </div>
            <div className={styles.browserBody}>
              <div className={styles.sidebar}>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLineShort}></div>
                <div className={styles.skeletonSpace}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLineShort}></div>
                <div className={styles.skeletonSpace}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.skeletonLineShort}></div>
              </div>
              <div className={styles.mainContent}>
                <div className={styles.row}>
                  <div className={styles.largeCard}>
                    <div className={styles.circle}></div>
                    <div className={styles.lines}>
                      <div className={styles.skeletonLine}></div>
                      <div className={styles.skeletonLineLong}></div>
                      <div className={styles.skeletonLineShort}></div>
                    </div>
                  </div>
                  <div className={styles.thinCard}></div>
                </div>
                <div className={styles.row}>
                  <div className={styles.wideCard}>
                    <div className={styles.skeletonLineLong}></div>
                    <div className={styles.skeletonLine}></div>
                    <div className={styles.skeletonLineShort}></div>
                    <div className={styles.skeletonLineSpace}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomGrid}>
        <div className={styles.integrationCard}>
          <div className={styles.orbitWrapper}>
            <OrbitAnimation />
          </div>
          <div className={styles.cardFooter}>
            <h3 className={styles.smallCardTitle}>Easy Integration</h3>
            <p className={styles.smallCardDescription}>
              Integrates with other tools and systems streamlining their workflow.
            </p>
          </div>
        </div>

        <div className={styles.supportCard}>
          <div className={styles.supportVisual}>
            <div className={styles.bgText}>24/7</div>
            <div className={styles.supportBadge}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
               </svg>
               Support
            </div>
          </div>
          <div className={styles.cardFooter}>
            <h3 className={styles.smallCardTitle}>Trusted Support Team</h3>
            <p className={styles.smallCardDescription}>
              Recognized for responses and knowledge for quick solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
