import React from 'react';
import styles from './AnimateIcon.module.css';

export default function AnimateIcon({ children, animateOnHover }) {
  if (!animateOnHover) return <>{children}</>;

  return (
    <div className={styles.iconWrapper}>
      {children}
    </div>
  );
}
