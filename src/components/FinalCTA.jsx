"use client";

import styles from "./FinalCTA.module.css";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function FinalCTA() {
  return (
    <section className={styles.container}>
      <div className={styles.mockupWrapper}>
        <img 
          src="/cta_mockup.png" 
          alt="Dashboard Mockup" 
          className={styles.mockupImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          Introducing Money management website
        </div>
        <h2 className={styles.title}>Turn your big idea into a stunning website</h2>
        <p className={styles.subtitle}>
          Fintech is its potential to promote financial inclusion. In many parts of the world, 
          millions of people lack access to traditional banking services.
        </p>
        <div className={styles.actions}>
          <a href="#" className={styles.getStartedBtn}>
            Get Started Now
            <HiArrowRight size={20} className={styles.getStartedArrow} />
          </a>
          <a href="#" className={styles.pricingBtn}>
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
