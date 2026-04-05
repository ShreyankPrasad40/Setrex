import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import SetrexLogo from '../app/Setrex_logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Image src={SetrexLogo} alt="Setrex Logo" width={24} height={24} />
              </div>
              <span className={styles.brandName}>Setrex.</span>
            </div>
            <p className={styles.description}>Your AI-Powered Workflow.</p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.header}>Quick Link</h4>
            <div className={styles.linkList}>
              <a href="#" className={`${styles.link} ${styles.activeLink}`}>Home 01</a>
              <a href="#" className={styles.link}>Home 02</a>
              <a href="#" className={styles.link}>About Us</a>
              <a href="#" className={styles.link}>Features</a>
              <a href="#" className={styles.link}>Pricinging</a>
              <a href="#" className={styles.link}>Blog</a>
              <a href="#" className={styles.link}>Integration</a>
              <a href="#" className={styles.link}>Contact Us</a>
            </div>
          </div>

          {/* Utility Pages */}
          <div className={styles.column}>
            <h4 className={styles.header}>Utility Pages</h4>
            <div className={styles.linkList}>
              <a href="#" className={styles.link}>404</a>
              <a href="#" className={styles.link}>Password</a>
              <a href="#" className={styles.link}>License</a>
              <a href="#" className={styles.link}>Changelog</a>
              <a href="#" className={styles.link}>Style Guide</a>
              <a href="#" className={styles.link}>Privacy Policy</a>
              <a href="#" className={styles.link}>Terms & Conditions</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.infoColumn}>
            <div className={styles.infoBlock}>
              <h4 className={styles.header}>Our Office</h4>
              <p className={styles.infoText}>
                88 Market Street, San Francisco,<br />
                CA 94103 United States
              </p>
            </div>
            <div className={styles.infoBlock}>
              <h4 className={styles.header}>Our Phone</h4>
              <p className={styles.infoText}>+117 2345 6948</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © 2025 All rights reserved, Developed by <b>Arini Studio</b>
          </div>
          <div className={styles.poweredBy}>
            Powered by <b>Webflow</b>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
