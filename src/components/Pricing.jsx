"use client";
import React, { useState } from 'react';
import styles from './Pricing.module.css';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Flexible pricing for every stage</h2>
        <p className={styles.subtitle}>
          Fintech is its potential to promote financial inclusion. In many parts of the world,<br />
          millions of people lack access to traditional banking services.
        </p>

        <div className={styles.toggleWrapper}>
          <span className={`${styles.toggleLabel} ${billingCycle === 'monthly' ? styles.active : ''}`}>Monthly</span>
          <div 
            className={styles.toggleSwitch} 
            onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
          >
            <div className={`${styles.toggleKnob} ${billingCycle === 'yearly' ? styles.knobYearly : ''}`}></div>
          </div>
          <span className={`${styles.toggleLabel} ${billingCycle === 'yearly' ? styles.active : ''}`}>Yearly</span>
        </div>
      </header>

      <div className={styles.pricingWrapper}>
        <div className={styles.pricingCard}>
          
          {/* Starter Plan */}
          <div className={styles.starterSide}>
            <div className={styles.planHeader}>
              <div className={styles.iconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 3.43-1 5a4.48 4.48 0 0 0 6.13 1.13c1.5-1.27 2-3.44 1-5a4.48 4.48 0 0 0-6.13-1.13Z"/>
                  <path d="M15 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                  <path d="m13 13 3 2 5-6-4-1"/>
                  <path d="m8 10 3-5 5-1-1 11-3-2"/>
                </svg>
              </div>
              <h3 className={styles.planTitle}>Starter Plan</h3>
              <p className={styles.planDescription}>
                Perfect for small businesses and startups looking to establish their digital presence.
              </p>
            </div>

            <div className={styles.priceContainer}>
              <span className={styles.currency}>$</span>
              <span className={styles.amount}>{billingCycle === 'monthly' ? '299' : '249'}</span>
              <span className={styles.period}>/ month</span>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.featuresList}>
              <p className={styles.listLabel}>What's Included:</p>
              <div className={styles.featureItem}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Basic strategy consultation</span>
              </div>
              <div className={styles.featureItem}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Social media setup</span>
              </div>
              <div className={styles.featureItem}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Monthly performance reports</span>
              </div>
              <div className={styles.featureItem}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Dedicated Support Team</span>
              </div>
            </div>

            <button className={styles.starterBtn}>
               <span className={styles.arrow}>→</span> Get Started Now
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className={styles.enterpriseSide}>
            <div className={styles.badge}>Most Popular</div>
            
            <div className={styles.planHeader}>
              <div className={styles.iconBoxDark}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                 </svg>
              </div>
              <h3 className={styles.planTitleDark}>Enterprise Plan</h3>
              <p className={styles.planDescriptionDark}>
                Solutions tailored for large businesses to optimize performance and drive innovation.
              </p>
            </div>

            <div className={styles.priceContainerDark}>
              <span className={styles.currencyDark}>$</span>
              <span className={styles.amountDark}>{billingCycle === 'monthly' ? '799' : '699'}</span>
              <span className={styles.periodDark}>/ month</span>
            </div>

            <div className={styles.dividerDark}></div>

            <div className={styles.featuresListDark}>
              <p className={styles.listLabelDark}>What's Included:</p>
              <div className={styles.featureItemDark}>
                <svg className={styles.checkIconDark} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>For large businesses with complex needs</span>
              </div>
              <div className={styles.featureItemDark}>
                <svg className={styles.checkIconDark} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Full-service marketing strategy and execution</span>
              </div>
              <div className={styles.featureItemDark}>
                <svg className={styles.checkIconDark} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Advanced analytics and custom reporting</span>
              </div>
              <div className={styles.featureItemDark}>
                <svg className={styles.checkIconDark} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>24/7 priority support</span>
              </div>
            </div>

            <button className={styles.enterpriseBtn}>
               <span className={styles.arrowDark}>→</span> Get Started Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
