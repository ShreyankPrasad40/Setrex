import React from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import SetrexLogo from '../app/Setrex_logo.png';
import StaggeredMenu from './StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Features', ariaLabel: 'View features', link: '/features' },
  { label: 'Pricing', ariaLabel: 'See pricing', link: '/pricing' },
  { label: 'Blog', ariaLabel: 'Read our blog', link: '/blog' },
  { label: 'Pages', ariaLabel: 'View more pages', link: '/pages' },
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

const Logo = () => (
  <div className={styles.leftSection}>
    <div className={styles.logoIcon}>
      <Image src={SetrexLogo} alt="Setrex Logo" width={24} height={24} />
    </div>
    <span className={styles.brandName}>Setrex.</span>
  </div>
);

export default function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <Logo />
        <nav className={styles.centerSection}>
          <a href="#" className={styles.navLink}>
            Home <FontAwesomeIcon className={styles.chevronIcon} icon={faChevronDown} />
          </a>
          <a href="#" className={styles.navLink}>About</a>
          <a href="#" className={styles.navLink}>Features</a>
          <a href="#" className={styles.navLink}>Pricing</a>
          <a href="#" className={styles.navLink}>Blog</a>
        </nav>
        <div className={styles.rightSection}>
          <div className={styles.dropdownContainer}>
            <a href="#" className={styles.navLink}>
              Pages <FontAwesomeIcon className={styles.chevronIcon} icon={faChevronDown} />
            </a>
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownColumn}>
                <h4>Main Pages</h4>
                <a href="#" className={styles.dropdownLink}>Home 01</a>
                <a href="#" className={styles.dropdownLink}>Home 02</a>
                <a href="#" className={styles.dropdownLink}>Features</a>
                <a href="#" className={styles.dropdownLink}>About</a>
                <a href="#" className={styles.dropdownLink}>Blog</a>
                <a href="#" className={styles.dropdownLink}>Pricing</a>
                <a href="#" className={styles.dropdownLink}>Contact</a>
              </div>
              <div className={styles.dropdownDivider}></div>
              <div className={styles.dropdownColumn}>
                <h4>Inner Pages</h4>
                <a href="#" className={styles.dropdownLink}>Career</a>
                <a href="#" className={styles.dropdownLink}>Career Details</a>
                <a href="#" className={styles.dropdownLink}>Integration</a>
                <a href="#" className={styles.dropdownLink}>Integration Details</a>
                <a href="#" className={styles.dropdownLink}>Blog Details</a>
                <a href="#" className={styles.dropdownLink}>Privacy Policy</a>
                <a href="#" className={styles.dropdownLink}>Terms &amp; Condition</a>
              </div>
              <div className={styles.dropdownDivider}></div>
              <div className={styles.dropdownColumn}>
                <h4>Utility Pages</h4>
                <a href="#" className={styles.dropdownLink}>404</a>
                <a href="#" className={styles.dropdownLink}>Password</a>
                <a href="#" className={styles.dropdownLink}>Style Guide</a>
                <a href="#" className={styles.dropdownLink}>License</a>
                <a href="#" className={styles.dropdownLink}>Changelog</a>
              </div>
            </div>
          </div>
          <a href="#" className={styles.contactBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.contactArrow}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            LET'S TALK
          </a>
        </div>
      </header>

      <div className={styles.mobileMenuWrapper}>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#000000', '#111111']}
          logoNode={<Logo />}
          accentColor="#D4FF33"
          isFixed={true}
          bottomContent={
            <a href="#" className={styles.mobileContactBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.contactArrow}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              LET'S TALK
            </a>
          }
        />
      </div>
    </>
  );
}

